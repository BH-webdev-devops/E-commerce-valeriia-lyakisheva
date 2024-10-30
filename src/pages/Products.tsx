import { useState, useEffect } from "react";
import Axios from "axios";
import { Product } from "../types/interface";
import ProductCard from "../components/ProductCard";

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const response = await Axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <h1 className="text-xl">Products List</h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {products.length > 0 &&
          products.map((product) => {
            return <ProductCard key={product.id} {...product} />;
          })}
      </div>
    </>
  );
};

export default Products;
