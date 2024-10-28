import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const rules = [
  "Test toplamda 10 sorudan oluşmaktadır.",
  "Her soru ekranda 30 saniye kalacaktır.",
  "İlk 10 saniye boyunca cevaplar seçilemez; ardından etkinleşecektir.",
  "Her 30 saniye sonunda otomatik olarak bir sonraki soruya geçilir.",
  "Geçmiş sorulara geri dönülemez.",
  "Test sonunda cevaplarınızın sonuçları gösterilecektir.",
];

const RulesDialog = ({ open, onClose, onStartQuiz }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen={fullScreen}
      PaperProps={{
        sx: { borderRadius: "1rem", padding: "1.5rem" },
      }}
    >
      <DialogTitle>Quiz Kuralları</DialogTitle>
      <DialogContent dividers sx={{ padding: 0 }}>
        <List>
          {rules.map((rule, index) => (
            <ListItem key={index}>
              <ListItemText primary={rule} />
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions sx={{ marginTop: { xs: "0", sm: "1rem" } }}>
        <Button
          variant="outlined"
          size="medium"
          color="#F5F5F7"
          onClick={onClose}
          sx={{ borderRadius: "1.25rem" }}
        >
          Kapat
        </Button>
        <Button
          sx={{ borderRadius: "1.25rem" }}
          variant="contained"
          onClick={() => {
            onClose();
            onStartQuiz();
          }}
        >
          Quiz'e Başla
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RulesDialog;
