import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/categoryFilter";

function Home() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await getProducts();
      setProducts(data);
      setAllProducts(data);
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query) => {
    const filtered = allProducts.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase()),
    );
    setProducts(filtered);
  };

  const handleCategory = (category) => {
    if (category === "all") {
      setProducts(allProducts);
      return;
    }

    const filtered = allProducts.filter((item) => item.category === category);

    setProducts(filtered);
  };

  if (loading) return <p className="text-center mt-5">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <SearchBar onSearch={handleSearch} />
      <CategoryFilter onSelect={handleCategory} />

      <div
        className="grid gap-6 
                      grid-cols-1 
                      sm:grid-cols-2 
                      md:grid-cols-3 
                      lg:grid-cols-4"
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
