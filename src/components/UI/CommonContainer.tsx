import { Container } from "@mui/material";
const CommonContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container
    sx={{
      maxWidth: "lg",
      padding: "16px",
      marginLeft: "auto",
      marginRight: "auto", 
      paddingLeft: { xs: "8px", sm: "16px", md: "24px" },
      paddingRight: { xs: "8px", sm: "16px", md: "24px" },
    }}
  >
    {children}
  </Container>
  );
};

export default CommonContainer;
