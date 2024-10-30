import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex bg-zinc-400 p-8 text-xl">
      <Link to="/" className="flex-1 w-14 text-red-600">
        <div>Home</div>
      </Link>
      <Link to="/products" className="flex-1 w-65">
        <div>Products</div>
      </Link>
      <Link to="/contact" className="flex-1 w-32">
        <div>Contact</div>
      </Link>
    </div>
  );
};

export default Navbar;
