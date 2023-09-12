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
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
    children: [
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
