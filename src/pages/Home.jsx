import { useEffect, useState } from "react";
import { getProducts } from "../services/fakestoreapi";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError("Error Occurred");
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Products</h1>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>Rs. {product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
