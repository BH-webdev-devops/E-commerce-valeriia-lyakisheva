import { useContext } from "react";
import ProductCard from "../components/ProductCard";
import { ProductsContext } from "../context/productsContext";

const Products: React.FC = () => {
  const { products } = useContext(ProductsContext);

  return (
    <>
      <h1 className="text-xl">Products List</h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {products !== null &&
          products &&
          products.map((product) => {
            return <ProductCard key={product.id} {...product} />;
          })}
      </div>
    </>
  );
};

export default Products;
