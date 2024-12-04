import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Product from "./pages/Product.tsx";
import { ChooseBrand } from "./components/ChooseBrand.tsx";
import State from "./pages/State.tsx";
import RenderList from "./pages/RenderList.tsx";
import Form from "./pages/Form.tsx";
import Login from "./pages/Login.tsx";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/choosebrand",
    element: <ChooseBrand />,
  },
  {
    path: "/state",
    element: <State />,
  },
  {
    path: "/render-list",
    element: <RenderList />,
  },
  {
    path: "/form",
    element: <Form />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
