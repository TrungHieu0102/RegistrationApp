import { Container } from "@mui/material";
import "./App.css";
import { ChooseBrand } from "./pages/ChooseBrand";
function App() {
  return (
    <Container
      sx={{
        maxWidth: "lg",
        padding: "16px",
        marginLeft: { xs: "8px", sm: "16px", md: "120px", lg: "200px" },
        marginRight: { xs: "8px", sm: "16px", md: "120px", lg: "200px" },
      }}
    >
      <ChooseBrand />
    </Container>
  );
}
export default App;
