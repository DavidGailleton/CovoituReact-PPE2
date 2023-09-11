import '../index.css';
import { Product, ProductCard } from '../Components/Product.tsx';
import { useEffect, useState } from 'react';

function ProductPage() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  // fetch products from database

  const fetchProducts = async () => {
    const response = await fetch('http://localhost:3003/products/getproducts');
    const responseValue = await response.json();
    console.log(responseValue.posts);
    console.log(responseValue);
    setProducts(responseValue.posts);
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
              {loading && <div>Loading...</div>}{' '}
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
export default ProductPage;
