import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import '../src/i18n/i18n.ts'
import {Confirm} from "./pages/Confirm.tsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    
  },
  {
    path: "/confirm", 
    element: <Confirm />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
