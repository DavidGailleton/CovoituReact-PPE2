import "../index.css";
import NavBar from "../Components/NavBar.tsx";
import Footer from "../Components/Footer.tsx";
import { Outlet, redirect } from "react-router-dom";
import Login from "./login.tsx";
import { useState } from "react";
function App() {
  if (!localStorage.JWT) {
    return <Login />;
  }

  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
export default App;
