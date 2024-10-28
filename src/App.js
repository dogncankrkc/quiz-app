import React, { useState } from "react";
import { Container, Button, CircularProgress, Box } from "@mui/material";
import Navbar from "./components/Navbar";
import QuizScreen from "./components/QuizScreen";
import RulesModal from "./components/RulesDialog";
import FinishQuizDialog from "./components/FinishQuizDialog";
import ResultTable from "./components/ResultTable";
import { fetchRandomQuestions } from "./helpers/index";

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isRulesModalOpen, setIsRulesModalOpen] = useState(false);
  const [isFinishDialogOpen, setIsFinishDialogOpen] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [answers, setAnswers] = useState([]);

  const handleStartQuiz = async () => {
    setQuizStarted(true);
    setQuizFinished(false);
    setLoading(true);
    setAnswers([]);
    const questionsData = await fetchRandomQuestions(10);
    setQuestions(questionsData);
    setLoading(false);
  };

  const updateAnswers = (newAnswers) => {
    setAnswers(newAnswers);
  };

  const handleFinishQuiz = (quizAnswers) => {
    const completedAnswers = questions.map((question, index) => {
      const answer = quizAnswers.find((ans) => ans.question === question.title);
      return {
        question: question.title,
        answer: answer ? answer.answer : "Cevaplanmadı",
      };
    });
    
    setAnswers(completedAnswers);
    setQuizFinished(true);
    setQuizStarted(false);
  };
  

  const handleConfirmFinish = () => {
    setIsFinishDialogOpen(false);
    handleFinishQuiz(answers);
  };

  const handleCloseResult = () => {
    setQuizFinished(false);
  };

  return (
    <div className="App">
      <Navbar />

      {quizStarted && !quizFinished && (
        <Box width="100%" display="flex" justifyContent="flex-end" mt={2}>
          <Button
            variant="contained"
            color="error"
            onClick={() => setIsFinishDialogOpen(true)}
            sx={{
              borderRadius: "1.25rem",
              marginRight: "1rem",
            }}
          >
            Quizi Bitir
          </Button>
        </Box>
      )}

      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: quizFinished ? "calc(100vh - 82px)" : "calc(100vh - 208px)",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {!quizStarted ? (
          quizFinished ? (
            <ResultTable answers={answers} onClose={handleCloseResult} />
          ) : (
            <Box display="flex" gap="1rem">
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ borderRadius: "1.25rem" }}
                onClick={() => setIsRulesModalOpen(true)}
              >
                Quiz Kuralları
              </Button>
              <Button
                variant="contained"
                color="success"
                size="large"
                sx={{ borderRadius: "1.25rem" }}
                onClick={handleStartQuiz}
              >
                Quiz'e Başla
              </Button>
            </Box>
          )
        ) : loading ? (
          <CircularProgress />
        ) : (
          <QuizScreen
            questions={questions}
            onFinishQuiz={handleFinishQuiz}
            updateAnswers={updateAnswers}
          />
        )}
      </Container>

      <RulesModal
        open={isRulesModalOpen}
        onClose={() => setIsRulesModalOpen(false)}
        onStartQuiz={handleStartQuiz}
      />

      <FinishQuizDialog
        open={isFinishDialogOpen}
        onClose={() => setIsFinishDialogOpen(false)}
        onConfirmFinish={handleConfirmFinish}
      />
    </div>
  );
}

export default App;
