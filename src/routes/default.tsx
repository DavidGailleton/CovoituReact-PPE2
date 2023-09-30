import "../index.css";
import { Link } from "react-router-dom";

export default function Default() {
  return (
    <main className="xl:px-48 lg:px-36 md:px-24 px-8 bg-gray-200 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Bienvenue sur My Covoiturage</h1>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Section Trouver un Covoiturage */}
        <div className="bg-white p-4 rounded-lg shadow-md flex-1">
          <h2 className="text-2xl font-semibold mb-2">
            Trouver un Covoiturage
          </h2>
          <p className="text-gray-600">
            Recherchez et trouvez des covoiturages disponibles près de chez
            vous.
          </p>
          <Link
            to="/search"
            className="mt-4 block text-blue-500 hover:underline"
          >
            Commencer la recherche
          </Link>
        </div>

        {/* Section Poster une Annonce */}
        <div className="bg-white p-4 rounded-lg shadow-md flex-1">
          <h2 className="text-2xl font-semibold mb-2">Poster une Annonce</h2>
          <p className="text-gray-600">
            Partagez vos trajets et proposez des covoiturages pour d'autres
            voyageurs.
          </p>
          <Link to="/post" className="mt-4 block text-blue-500 hover:underline">
            Poster une annonce
          </Link>
        </div>

        {/* Section Accéder à Votre Profil */}
        <div className="bg-white p-4 rounded-lg shadow-md flex-1">
          <h2 className="text-2xl font-semibold mb-2">
            Accéder à Votre Profil
          </h2>
          <p className="text-gray-600">
            Consultez et gérez votre profil d'utilisateur.
          </p>
          <Link
            to="/userInformation"
            className="mt-4 block text-blue-500 hover:underline"
          >
            Accéder à votre profil
          </Link>
        </div>
      </div>
    </main>
  );
}
