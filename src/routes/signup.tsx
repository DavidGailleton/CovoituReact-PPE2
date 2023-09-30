// Importation de fichiers CSS et du composant "SignUpCheck" depuis les modules
import "../index.css";
import { SignUpCheck } from "../Components/Auth.tsx";

// Définition du composant de la page d'inscription
export default function Signup() {
  return (
    <>
      <main>
        {/* Conteneur principal de la page */}
        <div className="bg-white flex justify-center items-center min-h-screen">
          {/* Conteneur du formulaire d'inscription */}
          <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
            <div>
              <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
                SignUp
              </h1>
              {/* Texte d'informations (peut être vide) */}
              <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer"></p>
            </div>
            {/* Inclusion du composant "SignUpCheck" pour gérer le formulaire d'inscription */}
            <SignUpCheck></SignUpCheck>
          </div>
        </div>
      </main>
    </>
  );
}
