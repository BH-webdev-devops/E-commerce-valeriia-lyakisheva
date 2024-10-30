import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import MyRouter from "./MyRouter";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <MyRouter />
  </BrowserRouter>
);
