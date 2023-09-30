import { useEffect, useState } from "react";
import { Product, ProductCard } from "../Components/Product.tsx";

function ProductPage() {
  const [loading, setLoading] = useState(true); // État pour gérer le chargement des données
  const [products, setProducts] = useState<Product[]>([]); // État pour stocker les produits récupérés

  // Fonction pour récupérer les produits depuis le serveur
  const fetchProducts = async () => {
    const response = await fetch("http://localhost:3003/products/getproducts/");
    const responseValue = await response.json();
    setProducts(responseValue.posts); // Met à jour l'état avec les produits récupérés
    setLoading(false); // Met fin au chargement une fois les données récupérées
  };

  useEffect(() => {
    fetchProducts(); // Appelle la fonction fetchProducts lors du chargement du composant
  }, []);

  // Fonction pour envoyer un e-mail à l'auteur d'un produit
  const sendEmail = () => {
    // Utilisez `window.location.href` pour ouvrir le client de messagerie par défaut
    window.location.href = `mailto:${product.mail}`;
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <main className="container mx-auto">
        <h1 className="text-3xl font-semibold mb-6">Annonces disponibles</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Affiche "Loading..." pendant le chargement */}
          {loading && <div>Loading...</div>}
          {!loading &&
            products.length > 0 &&
            products.map((product: Product, index) => (
              <div
                key={index}
                className="bg-white rounded shadow-md p-4 relative"
              >
                {/* Affiche les détails du produit */}
                <ProductCard product={product} />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  {/* Appelle sendEmail au clic */}
                  <a
                    href={`mailto:${product.mail}`}
                    onClick={sendEmail}
                    className="text-blue-500 hover:underline mt-2 block"
                  >
                    Envoyer un e-mail
                  </a>
                </div>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
}

export default ProductPage;
