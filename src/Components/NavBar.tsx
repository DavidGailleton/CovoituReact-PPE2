import "../index.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <header className="bg-white flex justify-between items-center gap-6 px-6 py-4">
        <Link to={`/`}>
          <h1 className="text-3xl font-serif">My Covoiturage</h1>
        </Link>
        <menu className="flex flex-row justify-center gap-6">
          <li className="">
            <Link to={`post`}>Poster annonce</Link>
          </li>
          <li className="">
            <Link to={`search`}>Trouver un Covoiturage</Link>
          </li>
        </menu>
        <p>{localStorage.getItem("name")}</p>
      </header>
    </>
  );
}
