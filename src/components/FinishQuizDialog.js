import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

const FinishQuizDialog = ({ open, onClose, onConfirmFinish }) => (
  <Dialog
    open={open}
    onClose={onClose}
    PaperProps={{
      sx: { borderRadius: "1rem", padding: "1.5rem" },
    }}
  >
    <DialogTitle>Quizi Bitir</DialogTitle>
    <DialogContent>
      <Typography>Quizi bitirmek istediğinizden emin misiniz?</Typography>
    </DialogContent>
    <DialogActions>
      <Button
        variant="outlined"
        color="#F5F5F7"
        onClick={onClose}
        sx={{ borderRadius: "1.25rem" }}
      >
        Hayır
      </Button>
      <Button
        variant="contained"
        color="primary"
        sx={{ borderRadius: "1.25rem" }}
        onClick={() => {
          onConfirmFinish();
          onClose();
        }}
      >
        Evet
      </Button>
    </DialogActions>
  </Dialog>
);

export default FinishQuizDialog;
