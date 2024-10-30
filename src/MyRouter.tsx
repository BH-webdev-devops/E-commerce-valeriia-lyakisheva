import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

const MyRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>Error page not found</h1>} />
        {/* <Route path="/products/" element={} */}
      </Routes>
    </>
  );
};

export default MyRouter;
