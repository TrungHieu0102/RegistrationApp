import { Container } from "@mui/material";
import { PreviousSelections } from "../PreviousSelections";
import { Navigate } from "./Navigate";
import useQueryParams from "../../hooks/useQueryParams";

export const CommonContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { paramCount } = useQueryParams(); 
  const hasQueryParams = paramCount > 0; 

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
      {hasQueryParams && (
        <>
          <Navigate />
          <PreviousSelections />
        </>
      )}
      {children}
    </Container>
  );
};
