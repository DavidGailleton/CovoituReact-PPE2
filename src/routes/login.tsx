import "../index.css";
import { LoginCheck } from "../Components/Auth.tsx";

export default function Login() {
  return (
    <>
      <main>
        <div className="bg-white flex justify-center items-center min-h-screen">
          <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
            <div>
              <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
                Log In
              </h1>
              <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer"></p>
            </div>
            <LoginCheck></LoginCheck>{" "}
            {/* Composant de vérification de la connexion */}
          </div>
        </div>
      </main>
    </>
  );
}
