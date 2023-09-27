import { useEffect, useState } from "react";
import { Product, ProductCard } from "../Components/Product.tsx";
import { name } from "autoprefixer";

function MyProduct() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  // fetch products from database

  const fetchProducts = async () => {
    const response = await fetch("http://localhost:3003/products/getproducts");
    const responseValue = await response.json();
    const nameFromLocalStorage = localStorage.getItem("name");
    let myPost;

    if (Array.isArray(responseValue.posts) && nameFromLocalStorage) {
      const filteredArray = responseValue.posts.filter(
        (item) => item.name === nameFromLocalStorage
      );

      console.log(filteredArray);
      myPost = filteredArray;
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
    <>
      <main className="flex justify-center">
        <div className="w-3/4 border-black border-2">
          <section>
            <ul className="flex flex-col gap-3 p-2">
              {loading && <div>Loading...</div>}{" "}
              {loading && <div>Loading...</div>}{" "}
              {!loading &&
                products.length > 0 &&
                products.map((product: Product, index) => (
                  <li
                    key={index}
                    className="grid grid-cols-2 grid-rows-2 border-black border-2 p-2"
                  >
                    <ProductCard product={product} />
                  </li>
                ))}
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
export default MyProduct;
