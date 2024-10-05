# Google Form Exporter for Tutor LMS Pro

## Overview

The **Google Form Exporter for Tutor LMS Pro** is a Google Apps Script-based tool designed to help educators and tutors efficiently migrate their quizzes from Google Forms into the **Tutor LMS Pro** platform in WordPress. By exporting quizzes from Google Forms into a compatible CSV format, educators can save significant time and effort in transitioning their content into a Learning Management System (LMS). This tool is especially useful for those looking to implement digital transformation in their classrooms or online courses.

## Features

- **Export Google Forms Quiz to CSV**: Export quiz questions, answers, and configurations from Google Forms into a CSV file format.
- **Tutor LMS Pro Compatibility**: The generated CSV is specifically formatted to be imported directly into **Tutor LMS Pro**, making it easy to add quizzes to your WordPress LMS.
- **Supports Multiple Choice Questions**: Currently, the tool is optimized for exporting multiple-choice questions, with each option labeled and formatted appropriately.
- **User-Friendly Interface**: Provides a simple HTML interface for educators, requiring minimal technical knowledge.

## Why Use This Tool?

- **Save Time**: No need to manually recreate quizzes in Tutor LMS. Just import the CSV and your quiz is ready.
- **Consistency**: Maintain consistent question formatting between Google Forms and your LMS, reducing the chances of errors.
- **Ease of Use**: The interface and Google Apps Script automation make the entire process user-friendly and accessible, even for those without programming experience.

## How It Works

1. **Form ID Input**: Provide the Google Form ID that you want to export.
2. **Correct Answers Input**: Manually enter the correct answers in a structured format, such as `1. A`, `2. B`, etc.
3. **Export Process**: Click the "Export Questions" button, and the script processes the Google Form to create a CSV file.
4. **Import to Tutor LMS Pro**: Import the generated CSV into Tutor LMS Pro through the WordPress dashboard to create a fully functional quiz.

## Requirements

- **Google Account**: You need to have access to the Google Form that you wish to export.
- **Google Apps Script**: This project runs on Google Apps Script, which is a cloud-based scripting language for light-weight application development in Google Workspace.
- **Tutor LMS Pro Plugin**: Ensure that you have the Tutor LMS Pro plugin installed on your WordPress site.

## Installation & Usage

### Step 1: Set Up Google Apps Script

1. Open the Google Form that contains your quiz.
2. Click on the three-dot menu at the top-right and select **Script Editor**.
3. Copy the provided Google Apps Script (`Code.gs`) into the Script Editor.
4. Save the script with a recognizable name, like **Google Form Exporter**.

### Step 2: Deploy the Script

1. In the Script Editor, click **Deploy > Test Deploy as web app**.
2. Set **Execute the app as** to **Me** and **Who has access** to **Anyone**.
3. Deploy and copy the web URL provided by Google.

### Step 3: Use the HTML Interface

1. Open the HTML interface by visiting the deployment URL.
2. Enter the Google Form ID, desired CSV file name, and correct answers.
3. Click the **Export Questions** button to generate a CSV file.

### Step 4: Import into Tutor LMS Pro

1. Log in to your WordPress site.
2. Go to **Tutor LMS > Quizzes** and select **Import Quiz**.
3. Upload the generated CSV file and verify that the questions and answers are correctly imported.

## CSV Structure

The CSV file is structured as follows to ensure compatibility with **Tutor LMS Pro**:

| Settings  | Question Title                 | Type          | Is Correct | Answer Text | Points |
|-----------|--------------------------------|---------------|------------|-------------|--------|
| Question  | What is the capital of France?  | single_choice | 0          |             | 10     |
| Answer    | A. Paris                        | text          | 1          |             |        |
| Answer    | B. London                       | text          | 0          |             |        |
| Answer    | C. Rome                         | text          | 0          |             |        |

- **Question** row contains metadata about the question, such as the question text, type, and points.
- **Answer** rows contain each possible answer, including an indicator for the correct answer (`Is Correct`).

## Customization

Feel free to modify the following:

- **Additional Question Types**: Modify the script to add support for other question types, such as true/false or short answer.
- **Feedback Fields**: You can add fields for correct and incorrect feedback within the CSV for enhanced functionality in Tutor LMS.

## Limitations

- **Multiple Choice Questions Only**: Currently, the script supports only multiple-choice questions.
- **Manual Answer Entry**: Correct answers need to be manually entered before export.

## Future Enhancements

- **Support for Other Question Types**: Add support for true/false and descriptive questions.
- **Batch Export Functionality**: Support batch exporting multiple Google Forms quizzes at once.
- **Enhanced Feedback**: Include custom feedback options for each question and answer.

## Contributing

If you wish to contribute to this project, please fork the repository and submit a pull request with your changes. We welcome any improvements, especially those aimed at expanding question type support or improving user experience.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or suggestions, please contact **Amr Khaled** via [GitHub](https://github.com/AmrKhaledelsharkawy) or submit an issue in the repository.



---

Simply save the above content in a file named `README.md` and include it in your project repository. This README will make it clear to users what your project does, how to use it, and any other important details they need to know.
