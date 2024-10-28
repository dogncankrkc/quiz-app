import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const Question = ({
  question,
  choices,
  onAnswer,
  choicesEnabled,
  selectedAnswer,
}) => (
  <Box
    style={{
      marginTop: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "500px",
      maxWidth: "100%",
      gap: "16px",
    }}
  >
    <Box
      display="flex"
      justifyContent={"center"}
      alignItems="center"
      minHeight="10rem"
      borderRadius={"1.25rem"}
      marginBottom="2rem"
      sx={{
        width: "500px",
        maxWidth: "100%",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Typography
        p={2}
        variant="h6"
        style={{ fontWeight: "bold", textAlign: "center", color: "#333" }}
      >
        {question}
      </Typography>
    </Box>

    <Grid
      container
      rowSpacing={{ xs: 2, md: 3 }}
      columnSpacing={{ xs: 2 }}
      sx={{ width: "100%" }}
    >
      {choices.map((choice, index) => (
        <Grid item size={{ xs: 6, md: 12 }} key={index}>
          <Button
            variant="contained"
            color="white"
            fullWidth
            style={{
              fontSize: "16px",
              padding: "10px 20px",
              borderRadius: "1.25rem",
              color: selectedAnswer === choice ? "#fff" : "#333",
              backgroundColor: selectedAnswer === choice && "#1976d2",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            disabled={!choicesEnabled}
            onClick={() => onAnswer(choice)}
            sx={{
              "@media (hover: hover)": {
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                  boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.3)",
                  transform: "scale(1.01)",
                },
              },
            }}
          >
            {choice}
          </Button>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Question;
