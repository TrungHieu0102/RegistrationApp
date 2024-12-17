import "./App.css";
import { ChooseBrand } from "./pages/ChooseBrand";
import { useLocation } from "react-router-dom";
import { ChooseDevice } from "./pages/ChooseDevice";
import { ChooseService } from "./pages/ChooseService";
import { ChooseLocation } from "./pages/ChooseLocation";
import ErrorBoundary from "./components/ErrorBoundary";
function App() {
  const location = useLocation();
  const param = new URLSearchParams(location.search);
  const brand = param.get("brand");
  const deviceId = param.get("deviceId");
  const serviceId = param.get("serviceId");

  return (
    <div>
      {serviceId ? (
        <ErrorBoundary>
          <ChooseLocation />
        </ErrorBoundary>
      ) : deviceId ? (
        <ChooseService />
      ) : brand ? (
        <ChooseDevice />
      ) : (
        <ChooseBrand />
      )}
    </div>
  );
}
export default App;
