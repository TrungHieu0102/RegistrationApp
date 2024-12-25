import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  TextField,
  Typography,
  Stack,
  Grid2 as Grid,
  InputAdornment,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";

interface FormValues {
  serialNumber: string;
  description: string;
  name: string;
  address: string;
  city: string;
  zip: string;
  state: string;
  email: string;
  phone: string;
}

const validationSchema = Yup.object({
  email: Yup.string()
    .matches(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/, "Invalid email address")
    .test(
      "email-or-phone",
      "Either email or phone is required",
      function (value) {
        return value || this.parent.phone;
      }
    ),
  phone: Yup.string()
    .matches(/^\d{9}$/, "Phone number must be 9 digits")
    .test(
      "phone-or-email",
      "Either email or phone is required",
      function (value) {
        return value || this.parent.email;
      }
    ),
});

export const UserForm = () => {
  const [countryCode, setCountryCode] = useState("+84");
  const handleCountryCodeChange = (event: SelectChangeEvent<string>) => {
    setCountryCode(event.target.value);
  };
  const formik = useFormik<FormValues>({
    initialValues: {
      serialNumber: "",
      description: "",
      name: "",
      address: "",
      city: "",
      zip: "",
      state: "",
      email: "",
      phone: "",
    },
    validationSchema,
    onSubmit: (values) => {
      const phoneWithCountryCode = countryCode + values.phone;
      console.log("Form submitted:", {
        ...values,
        phone: phoneWithCountryCode,
      });
    },
  });

  return (
    <Box
      sx={{
        width: "90%",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h6" mb={2} fontSize="14px" fontWeight="bold">
              Device Details
            </Typography>
            <Stack spacing={2}>
              <TextField
                label="Serial Number"
                name="serialNumber"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.serialNumber}
                fullWidth
                // sx={{
                //   "& .MuiOutlinedInput-root": {
                //     borderRadius: "30px",
                //   },
                // }}
              />
              <TextField
                label="Description"
                name="description"
                variant="outlined"
                multiline
                rows={13.5}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
                fullWidth
              />
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h6" mb={2} fontSize="14px" fontWeight="bold">
              Contact Details
            </Typography>
            <Stack spacing={2}>
              <TextField
                label="Name"
                name="name"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                fullWidth
              />

              <TextField
                label="Address"
                name="address"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
                fullWidth
              />
              <Stack direction="row" spacing={1} sx={{ width: "100%" }}>
                <TextField
                  label="City"
                  name="city"
                  variant="outlined"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.city}
                  sx={{
                    width: "45%",
                  }}
                />

                <TextField
                  label="Zip"
                  name="zip"
                  variant="outlined"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.zip}
                  sx={{
                    width: "55%",
                  }}
                />
              </Stack>

              <TextField
                label="State"
                name="state"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.state}
                fullWidth
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                error={Boolean(formik.errors.email && formik.touched.email)}
                fullWidth
              />
              <TextField
                label="Phone Number"
                name="phone"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                error={
                  Boolean((formik.errors.phone && formik.touched.phone) || 
                          (formik.errors.email && formik.touched.email))
                }
                helperText={
                  formik.touched.phone && formik.errors.phone
                    ? formik.errors.phone
                    : formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : ""
                }
                fullWidth
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <Select
                          value={countryCode}
                          onChange={handleCountryCodeChange}
                          displayEmpty
                          sx={{
                            minWidth: 70,
                            border: "none",
                            backgroundColor: "transparent",
                            ".MuiOutlinedInput-notchedOutline": {
                              border: "none",
                            },
                          }}
                        >
                          <MenuItem value="+1">USA (+1)</MenuItem>
                          <MenuItem value="+91">IDN (+91)</MenuItem>
                          <MenuItem value="+44">UK (+44)</MenuItem>
                          <MenuItem value="+84">VN (+84)</MenuItem>
                          <MenuItem value="+81">JP (+81)</MenuItem>
                        </Select>
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Stack>
          </Grid>
        </Grid>

        <Box mt={3} display="flex" justifyContent="center">
          <Button
            type="submit"
            variant="contained"
            sx={{
              padding: "8px 80px",
              fontSize: "14px",
              textTransform: "none",
              color: "white",
              borderRadius: "30px",
              backgroundColor: "rgb(12, 140, 233)",
            }}
          >
            Continue
          </Button>
        </Box>
      </form>
    </Box>
  );
};
