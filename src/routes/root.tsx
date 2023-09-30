// Importation des fichiers CSS et des composants "NavBar" et "Footer"
import "../index.css";
import NavBar from "../Components/NavBar.tsx";
import Footer from "../Components/Footer.tsx";
import { Outlet } from "react-router-dom";

// Définition du composant principal de l'application
function App() {
  // Récupération du JWT (JSON Web Token) depuis le stockage local
  const token = localStorage.getItem("JWT");

  // Configuration de la requête pour vérifier l'authentification
  const requestOptions = {
    method: "GET", // Méthode de la requête (GET dans ce cas)
    headers: {
      Authorization: `Bearer ${token}`, // Ajout du JWT dans l'en-tête de la requête
      "Content-Type": "application/json", // Type de contenu de la requête
    },
  };

  // Envoi de la requête au point de terminaison d'authentification
  fetch(`http://localhost:3003/auth/auth-endpoint`, requestOptions)
    .then((response) => {
      // Vérification de la réponse HTTP
      if (!response.ok) {
        throw new Error("Request failed"); // En cas d'échec de la requête, génère une erreur
      }
      return response.json(); // Convertit la réponse en format JSON
    })
    .then((data) => {
      console.log(data); // Affiche les données de la réponse dans la console
    })
    .catch((error) => {
      console.error(error); // En cas d'erreur, affiche l'erreur dans la console
      if (error instanceof Error && error.message === "Request failed") {
        // Si l'erreur est due à une requête échouée, redirige vers la page de connexion
        window.location.replace("/login");
      }
    });

  return (
    <>
      {/* Affichage de la barre de navigation */}
      <NavBar />
      {/* Affichage du contenu de la route actuelle (via "Outlet" de React Router) */}
      <Outlet />
      {/* Affichage du pied de page */}
      <Footer />
    </>
  );
}

// Exportation du composant principal de l'application
export default App;
