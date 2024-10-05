function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
                    .setTitle('Google Form Exporter');
}

function exportFormToCSV(formId, answers) {
  try {
    // Open the form by ID
    var form = FormApp.openById(formId);

    // Get all items (questions) from the form
    var items = form.getItems();

    // Prepare CSV data array
    var csvData = [];
    var headers = ['settings', 'HW Trial', 'Unnamed: 2', '0', 'minutes', 'Unnamed: 5', '1', '50', '45', 'Unnamed: 9', 'Unnamed: 10', 'rand', 'Unnamed: 12', '200'];
    csvData.push(headers);

    var questionNumber = 1;

    // Loop through all form items (questions)
    for (var i = 0; i < items.length; i++) {
      var item = items[i];

      // Only proceed if the item is a multiple choice question
      if (item.getType() == FormApp.ItemType.MULTIPLE_CHOICE) {
        var question = item.asMultipleChoiceItem();
        var questionText = question.getTitle().replace(/^\d+\.\s*/, '').trim();
        var choices = question.getChoices();

        var correctAnswerLetter = answers[questionNumber - 1];

        // Add question row to CSV data
        var questionRow = [
          'question',
          questionText,
          null,
          'single_choice',
          1,
          questionNumber,
          (correctAnswerLetter == 'A') ? 1 : 0,
          null, null, null, null, null, null, null
        ];
        csvData.push(questionRow);

        // Organize choices and match them to A, B, C, D, etc.
        var choiceLetters = ['A', 'B', 'C', 'D', 'E'];
        for (var j = 0; j < choices.length; j++) {
          var choiceText = choices[j].getValue().replace(/^[A-E]\.\s*/, '').trim();
          var optionLetter = choiceLetters[j];

          // Add answer row to CSV data with the option letter
          var optionRow = [
            'answer',
            optionLetter + '. ' + choiceText, // Include the letter
            'text',
            (correctAnswerLetter == optionLetter) ? 1 : 0,
            0,
            j + 1,
            0,
            null, null, null, null, null, null, null
          ];
          csvData.push(optionRow);
        }
        questionNumber++;
      }
    }

    // Convert CSV data array to CSV string using a custom function
    var csvContent = arrayToCsv(csvData);
    return csvContent;

  } catch (error) {
    throw new Error("Unable to export questions: " + error.message);
  }
}

// Custom function to convert an array of arrays into a CSV string
function arrayToCsv(data) {
  return data.map(function(row) {
    return row.map(function(cell) {
      if (cell === null || cell === undefined) {
        cell = '';
      }
      if (typeof cell === 'string') {
        cell = cell.replace(/"/g, '""');
        if (cell.search(/("|,|\n)/g) >= 0) {
          cell = '"' + cell + '"';
        }
      }
      return cell;
    }).join(',');
  }).join('\n');
}
