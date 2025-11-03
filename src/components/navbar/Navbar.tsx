import { navbarLinks } from "@/constants/navbarLinks";
import { BrowserRouter, Link } from "react-router-dom";
function Navbar() {
  return (
    <BrowserRouter>
      <nav className="flex justify-between items-center bg-white shadow-md px-6 py-4 sticky top-0 z-50">
        <h1 className="text-xl font-bold text-gray-800">☕ CashRegisterApp</h1>
        <div className="flex justify-around">
          {navbarLinks.map((link) => (
            <Link
              className="px-8 "
              key={link.name}
              to={`localhost:5173${link.redirect}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </BrowserRouter>
  );
}

export default Navbar;
