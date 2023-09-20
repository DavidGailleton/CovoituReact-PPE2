import "../index.css";
import NavBar from "../Components/NavBar.tsx";
import Footer from "../Components/Footer.tsx";
import { Outlet } from "react-router-dom";
function App() {
  if (!localStorage.JWT) {
    window.location.replace("/login");
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
