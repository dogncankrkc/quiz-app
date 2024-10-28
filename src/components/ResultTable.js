import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
  Box,
} from "@mui/material";

const ResultTable = ({ answers, onClose }) => {
  console.log(answers);
  return (
    <TableContainer
      component={Paper}
      style={{
        marginTop: "20px",
        borderRadius: "1rem",
        overflowX: "auto",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Box p={3}>
        <Typography variant="h6" style={{ padding: "10px" }}>
          Test Sonuçları
        </Typography>
        <Table sx={{ minWidth: 300 }}>
          <TableHead>
            <TableRow>
              <TableCell>Soru No</TableCell>
              <TableCell>Soru</TableCell>
              <TableCell>Cevabınız</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {answers.map((answer, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{answer.question}</TableCell>
                <TableCell>{answer.answer}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Box display="flex" justifyContent="end" marginTop="1.5rem">
          <Button
            variant="contained"
            color="#333"
            sx={{
              borderRadius: "1.25rem",
              backgroundColor: "#F5F5F7",
              opacity: 0.9,
            }}
            onClick={onClose}
          >
            Kapat
          </Button>
        </Box>
      </Box>
    </TableContainer>
  );
};

export default ResultTable;
