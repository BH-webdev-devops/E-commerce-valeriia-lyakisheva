import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import MyRouter from "./MyRouter";
import { ProductsController } from "./context/productsContext";

createRoot(document.getElementById("root")!).render(
  <ProductsController>
    <BrowserRouter>
      <MyRouter />
    </BrowserRouter>
  </ProductsController>
);
