import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Importez Link pour créer un lien vers la page '/post'
import { Product, ProductCard } from "../Components/Product.tsx";

function MyProduct() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [hasPosts, setHasPosts] = useState(false); // Ajoutez un état pour suivre si l'utilisateur a des posts

  const handleDeleteProduct = async (productName: string) => {
    try {
      const response = await fetch(`http://localhost:3003/deleteproduct/`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("JWT"),
        },
        body: JSON.stringify({ name: productName }),
      });

      if (response.ok) {
        // Suppression réussie, mettez à jour la liste des produits après suppression
        const updatedProducts = products.filter(
          (product) => product.name !== productName
        );
        setProducts(updatedProducts);
        window.location.href = "/post";
      } else {
        // Gérer les erreurs de suppression, afficher un message d'erreur, etc.
        console.error("Erreur lors de la suppression de l'annonce");
      }
    } catch (error) {
      console.error("Erreur lors de la suppression de l'annonce", error);
    }
  };

  const fetchProducts = async () => {
    const response = await fetch("http://localhost:3003/products/getproducts");
    const responseValue = await response.json();
    const nameFromLocalStorage = localStorage.getItem("name");
    let myPost;

    if (Array.isArray(responseValue.posts) && nameFromLocalStorage) {
      const filteredArray = responseValue.posts.filter(
        (item: { name: string }) => item.name === nameFromLocalStorage
      );

      console.log(filteredArray);
      myPost = filteredArray;
      setHasPosts(myPost.length > 0); // Mettez à jour l'état hasPosts en fonction des posts
    } else {
      console.log(
        "La valeur 'name' n'a pas été trouvée dans le local storage ou la réponse ne contient pas de tableau 'posts'."
      );
    }

    console.log(responseValue.posts); // Ceci affiche le tableau complet de produits
    console.log(responseValue);
    setProducts(myPost); // Utilisez directement myPost, pas myPost.posts
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <main className="container mx-auto">
        <div className="w-full bg-white p-6 rounded shadow-md">
          <h1 className="text-3xl font-semibold mb-6">Mon Annonce</h1>
          <section>
            {loading && <div>Loading...</div>}
            {!loading && !hasPosts && (
              <div className="text-center text-gray-600">
                Vous n'avez pas de post.
                <Link to="/post" className="text-blue-500 hover:underline">
                  Cliquez ici pour en créer un.
                </Link>
              </div>
            )}
            {!loading && products.length > 0 && (
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product: Product, index) => (
                  <li key={index} className="bg-white rounded shadow-md p-4">
                    <ProductCard product={product} />
                  </li>
                ))}
              </ul>
            )}
          </section>
          <li className="bg-white rounded shadow-md p-4">
            <button
              className="text-red-500 hover:underline"
              onClick={() => handleDeleteProduct(product.name)}
            >
              Supprimer l'annonce
            </button>
          </li>
        </div>
      </main>
    </div>
  );
}

export default MyProduct;
