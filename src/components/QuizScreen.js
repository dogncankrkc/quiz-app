import React, { useEffect, useState } from "react";
import { Box, Typography, LinearProgress } from "@mui/material";
import Question from "./Question";
import QuestionTracker from "./QuestionTracker";
import { createChoices } from "../helpers";

const QuizScreen = ({ questions, updateAnswers, onFinishQuiz }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timer, setTimer] = useState(30);
  const [choicesEnabled, setChoicesEnabled] = useState(false);
  const [choices, setChoices] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          handleNextQuestion();
          return prev;
        }
        if (prev < 20) setChoicesEnabled(true);
        return prev - 0.1; 
      });
    }, 100);

    return () => clearInterval(interval);
  }, [currentQuestionIndex]);

  useEffect(() => {
    if (questions.length > 0) {
      setChoices(createChoices(questions[currentQuestionIndex]));
      setSelectedAnswer(null);
    }
  }, [currentQuestionIndex, questions]);

  const handleNextQuestion = () => {
    setChoicesEnabled(false);
    setTimer(30);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      onFinishQuiz(answers);
    }
  };

  const handleAnswer = (choice) => {
    setSelectedAnswer(choice);
    setChoicesEnabled(false);
    const newAnswer = {
      question: questions[currentQuestionIndex].title,
      answer: choice,
    };
    setAnswers((prev) => [...prev, newAnswer]);
    updateAnswers([...answers, newAnswer]);

    setTimeout(() => {
      handleNextQuestion();
    }, 1000);
  };

  const progress = (timer / 30) * 100;

  return (
    <Box
      width="500px"
      maxWidth="100%"
      display="flex"
      flexDirection="column"
      alignItems="start"
      textAlign="start"
    >
      <Typography variant="overline" color="textSecondary" mb={0}>
        Kalan süre: {Math.ceil(timer)} saniye
      </Typography>
      <Box width="100%" mb={2}>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: 10,
            borderRadius: 5,
            backgroundColor: "#f0f0f0",
            "& .MuiLinearProgress-bar": {
              backgroundColor: progress > 20 ? "#4caf50" : "#ff5722",
            },
          }}
        />
      </Box>

      <Question
        question={questions[currentQuestionIndex].title}
        choices={choices}
        onAnswer={handleAnswer}
        choicesEnabled={choicesEnabled}
        selectedAnswer={selectedAnswer}
      />
      <QuestionTracker
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={questions.length}
      />
    </Box>
  );
};

export default QuizScreen;
