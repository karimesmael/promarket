import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "product/:id", element: <ProductPage /> },
      { path: "cart", element: <CartPage /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
