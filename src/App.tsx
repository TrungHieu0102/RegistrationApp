import "./App.css";
import { ChooseBrand } from "./pages/ChooseBrand";
import { useLocation } from "react-router-dom";
import { ChooseDevice } from "./pages/ChooseDevice";
import { ChooseService } from "./pages/ChooseService";
function App() {
  const location = useLocation();
  const brand = new URLSearchParams(location.search).get("brand");
  const deviceId = new URLSearchParams(location.search).get("deviceId");

  return (
    <div>
    {deviceId ? (  
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
