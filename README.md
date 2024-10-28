
# Quiz App

A responsive Quiz App built with React and Material UI. The app allows users to answer a set of 10 randomly selected questions with multiple-choice answers and includes a timer for each question.

## Features

- **Random Questions**: Fetches a random set of 10 questions from a JSON placeholder API.
- **Timer**: Each question is displayed for 30 seconds, with the first 10 seconds disabling answer choices.
- **Result Summary**: At the end of the quiz, users can see a summary of their answers, with unanswered questions labeled as "Cevaplamadınız".
- **Responsive Design**: Works well on both desktop and mobile devices.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dogncankrkc/quiz-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd quiz-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

Start the development server:
```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

## Project Structure

- **`src/components`**: Contains custom components such as `QuizScreen`, `Question`, `ResultTable`, and modals.
- **`src/helpers`**: Helper functions for managing quiz logic.
- **`public`**: Contains static files.

## Technologies Used

- **React**: Frontend library
- **Material UI**: UI components
