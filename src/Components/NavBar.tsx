import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

  return (
    <header className="bg-white flex justify-between items-center gap-6 px-6 py-4">
      <Link to={`/`}>
        <h1 className="text-3xl font-serif">My Covoiturage</h1>
      </Link>
      <menu className="flex flex-row justify-center gap-6">
        <li>
          <Link to={`post`}>Poster annonce</Link>
        </li>
        <li>
          <Link to={`search`}>Trouver un Covoiturage</Link>
        </li>
      </menu>
      <div className="relative group">
        <div className="cursor-pointer" onClick={toggleSubmenu}>
          {localStorage.getItem("name")}
          <i
            className={`fas fa-angle-down ml-1 transform ${
              submenuOpen ? "rotate-180" : ""
            } transition-transform duration-300`}
          ></i>
        </div>
        {submenuOpen && (
          <ul className="absolute right-0 mt-2 bg-white border border-gray-300 rounded shadow-lg">
            <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
              Mon annonce
            </li>
            <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
              Mes informations
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}
