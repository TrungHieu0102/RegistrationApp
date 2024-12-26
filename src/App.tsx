import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme/theme";
import { ChooseBrand } from "./pages/ChooseBrand";
import { ChooseDevice } from "./pages/ChooseDevice";
import { ChooseService } from "./pages/ChooseService";
import ErrorBoundary from "./components/ErrorBoundary";
import useQueryParams from "./hooks/useQueryParams";
import { ChooseLocation } from "./pages/ChooseLocation";
import { ChooseTime } from "./pages/ChooseTime";
import { SubmitInfo } from "./pages/SubmitInfo";
import { AdditionInfo } from "./pages/AdditionInfo";
import { useEffect, useState } from "react";
import {Confirm} from "./pages/Confirm";

function App() {
  const {
    brand,
    deviceId,
    serviceId,
    locationId,
    time,
    date,
    phone,
    email,
    paramCount,
  } = useQueryParams();
  const [isConfirmPage, setIsConfirmPage] = useState(false);
  useEffect(() => {
    if (location.pathname === "/confirm") {
      const accessoriesAppointment = sessionStorage.getItem("accessoriesAppointment");
      const serviceDataAppointment = sessionStorage.getItem("serviceDataAppointment");
      const formDataAppointment = sessionStorage.getItem("formDataAppointment");

      if (accessoriesAppointment && serviceDataAppointment && formDataAppointment) {
        setIsConfirmPage(true);
      } else {
        setIsConfirmPage(false);
        window.location.href = "/";  
      }
    }
  }, [location.pathname]);

  let content;
  if (isConfirmPage) {
    content = <Confirm />;
  } else  if (email && phone && paramCount === 8) {
    content = <AdditionInfo />;
  } else if (time && date && paramCount === 6) {
    content = <SubmitInfo />;
  } else if (locationId && paramCount === 4) {
    content = <ChooseTime />;
  } else if (serviceId && paramCount === 3) {
    content = <ChooseLocation />;
  } else if (deviceId && paramCount === 2) {
    content = <ChooseService />;
  } else if (brand && paramCount === 1) {
    content = <ChooseDevice />;
  } else {
    content = <ChooseBrand />;
  }

  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {content}
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
