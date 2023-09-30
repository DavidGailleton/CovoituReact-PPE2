import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  // Fonction pour basculer l'affichage du sous-menu
  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

  // Fonction de déconnexion
  const deconnexion = () => {
    localStorage.clear(); // Efface les données de local storage
    window.location.href = "/login"; // Redirige vers la page de connexion
  };

  return (
    <header className="bg-white px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={`/`}>
          <h1 className="text-3xl font-serif">My Covoiturage</h1>
        </Link>
        <div className="hidden md:flex md:flex-row gap-6">
          <Link to={`post`} className="text-blue-500 hover:underline">
            Poster annonce
          </Link>
          <Link to={`search`} className="text-blue-500 hover:underline">
            Trouver un Covoiturage
          </Link>
        </div>
        <div className="relative group">
          <div className="cursor-pointer" onClick={toggleSubmenu}>
            {localStorage.getItem("name")}{" "}
            {/* Affiche le nom de l'utilisateur */}
            <span>▼</span>{" "}
            {/* Affiche une flèche vers le bas pour indiquer le sous-menu */}
          </div>
          {submenuOpen && (
            <ul className="absolute right-0 mt-2 bg-white border border-gray-300 rounded shadow-lg">
              <Link to={`myProduct`}>
                <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                  Mon annonce
                </li>
              </Link>
              <Link to={`userInformation`}>
                <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                  Mes informations
                </li>
              </Link>
              <li
                className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                onClick={deconnexion} // Appelle la fonction de déconnexion lors du clic
              >
                Deconnexion
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}
