import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Home from "./Home";
import ProductDetails from "./components/ProductDetails";

const MyRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>Error page not found</h1>} />
        <Route path="/product/:productID" element={<ProductDetails />} />
      </Routes>
    </>
  );
};

export default MyRouter;
