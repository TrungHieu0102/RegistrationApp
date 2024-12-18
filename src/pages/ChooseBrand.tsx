import { Box, Typography, Grid2 as Grid, Stack } from "@mui/material";
import { ButtonBrand } from "../components/Button/ButtonBrand";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import brands, { Brand } from "../Data/Brand";
import CommonContainer from "../components/UI/CommonContainer";
import { useTranslation } from 'react-i18next';

const brandButton = brands.map((brand: Brand) => (

  <ButtonBrand
  key={brand.id}
    props={{
      name: brand.name,
      image: brand.image,
    }}
  />
));

export const ChooseBrand = () => {
  const { t } = useTranslation();

  return (
    <CommonContainer>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "16px",
          paddingTop:"0px",
          gap: "24px",
          width: "100%", 
        }}
      >
        <Box display={"flex"} flexDirection={"row"}>
          <Stack
            direction="row"
            sx={{
              justifyContent: "space-between",
              alignItems: "flex-start",
              width: "100%", 
            }}
          >
            <Box>
              <Typography fontWeight={"bold"} variant="h4" component="h1">
              {t('title')}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ marginTop: "16px", fontWeight: "bold" }}
              >
                Choose a brand
              </Typography>
            </Box>
            <LanguageSwitcher />
          </Stack>
        </Box>

        <Grid
          container
          spacing={{ xs: 1, sm: 2, md: 3 }}
          justifyContent="center"
        >
          {brandButton}
        </Grid>
      </Box>
    </CommonContainer>
  );
};
