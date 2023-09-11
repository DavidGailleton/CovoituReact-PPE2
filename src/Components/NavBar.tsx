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
        <button className="ml-6">
          <Link
            className="lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-full transition duration-200"
            to={`login`}
          >
            Log In
          </Link>
        </button>
      </header>
    </>
  );
}
