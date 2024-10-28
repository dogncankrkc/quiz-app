import React from "react";
import { Box, Typography } from "@mui/material";

const QuestionTracker = ({ currentQuestion, totalQuestions }) => (
  <Box
    sx={{
      position: "fixed",
      bottom: 20,
      right: 20,
      padding: "10px",
      bgcolor: "#F5F5F7",
      color: "#333",
      borderRadius: "1.25rem",
      boxShadow: 3,
      paddingX: "1.5rem",
      opacity: 0.9,
    }}
  >
    <Typography variant="body2" fontWeight="bold" letterSpacing=".5px">
      Soru {currentQuestion} / {totalQuestions}
    </Typography>
  </Box>
);

export default QuestionTracker;
