import { useState, useEffect } from "react";

export default function UserInfo() {
  // Déclaration des états locaux pour stocker le nom et l'e-mail
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Effet de côté exécuté lors du chargement du composant
    // Récupérez le nom et l'e-mail depuis le localStorage s'ils existent
    const storedName = localStorage.getItem("name");
    const storedEmail = localStorage.getItem("email");

    if (storedName && storedEmail) {
      // Si le nom et l'e-mail sont présents dans le localStorage, mettez à jour les états locaux
      setName(storedName);
      setEmail(storedEmail);
    }
  }, []); // Le tableau vide [] signifie que cet effet ne s'exécute qu'une fois lors du montage initial du composant

  return (
    <div className="container mx-auto mt-6">
      <h1 className="text-3xl font-semibold mb-4">Information Utilisateur</h1>
      <div className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <strong>Nom:</strong> {name}
        </div>
        <div>
          <strong>E-mail:</strong> {email}
        </div>
      </div>
    </div>
  );
}
