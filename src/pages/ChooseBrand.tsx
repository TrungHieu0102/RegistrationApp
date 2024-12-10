import { Box, Typography, Grid2 as Grid } from "@mui/material";
import { ButtonBrand } from "../components/ButtonBrand";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import brands, { Brand } from "../Data/Brand";
import CommonContainer from "../components/UI/CommonContainer";

const brandButton = brands.map((brand: Brand) => (
  <ButtonBrand
    props={{
      name: brand.name,
      image: brand.image,
    }}
  />
));
export const ChooseBrand = () => {
  return (
   <CommonContainer>
     <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        padding: "16px",
        gap: "24px",
        position: "relative",
       
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "16px",
          right: "16px",
          zIndex: 1000,
        }}
      >
        <LanguageSwitcher />
      </Box>
      <Box
        sx={{
          textAlign: "left",
        }}
      >
        <Typography fontWeight={"bold"} variant="h4" component="h1">
          Appointment booking
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ marginTop: "16px", fontWeight: "bold" }}
        >
          Choose a brand
        </Typography>
      </Box>

      <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center">
        {brandButton}
      </Grid>
    </Box>
   </CommonContainer>
  );
};
