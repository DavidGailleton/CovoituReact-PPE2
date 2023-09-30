import { PostProduct } from "../Components/ProdutcsFunction.tsx";

export default function Post() {
  // Fonction pour vérifier si un utilisateur a déjà créé une annonce avec son nom
  const checkIfPostExistWithName = async () => {
    const UserName = localStorage.getItem("name"); // Récupère le nom de l'utilisateur depuis le stockage local
    console.log(UserName);
    const response = await fetch(
      `http://localhost:3003/products/getproducts/name/${UserName}`
    ).then((response) => response.json());
    // Si la réponse contient `message: "Product found"`, alors on redirige vers la page d'accueil
    if (response.message === "Product found") {
      window.location.href = "/myproduct"; // Redirection vers la page "myproduct"
    }
    console.log(response);
  };

  checkIfPostExistWithName(); // Appelle la fonction de vérification lors du chargement de la page

  return (
    <>
      <main className="px-64">
        <PostProduct /> {/* Affiche le composant PostProduct */}
      </main>
    </>
  );
}
