import "./App.css";
import { ChooseBrand } from "./pages/ChooseBrand";
import { ChooseDevice } from "./pages/ChooseDevice";
import { ChooseService } from "./pages/ChooseService";
import { ChooseLocation } from "./pages/ChooseLocation";
import ErrorBoundary from "./components/ErrorBoundary";
import useQueryParams from "./hooks/useQueryParams";
function App() {
 const {brand,deviceId,serviceId } = useQueryParams()
 console.log(brand)
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
