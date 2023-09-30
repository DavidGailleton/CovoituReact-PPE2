import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ProductPage from "./routes/productPage.tsx";
import Login from "./routes/login.tsx";
import Post from "./routes/post.tsx";
import Error from "./Components/Error.tsx";
import Default from "./routes/default.tsx";
import Signup from "./routes/signup.tsx";
import MyProduct from "./routes/myProduct.tsx";
import UserInfo from "./routes/userInformation.tsx";

// Crée une instance de BrowserRouter avec la structure des routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Default />,
      },
      {
        path: "search",
        element: <ProductPage />,
      },
      {
        path: "post",
        element: <Post />,
      },
      {
        path: "myProduct",
        element: <MyProduct />,
      },
      {
        path: "userInformation",
        element: <UserInfo />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <Error />,
  },
]);

// Rend l'application React dans l'élément avec l'ID "root"
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* Fournit le router à l'application */}
  </React.StrictMode>
);
