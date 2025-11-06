import NavbarLogo from "./NavbarLogo";
import { navbarLinks } from "@/constants/navbarLinks";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-white shadow-md px-6 py-4 sticky top-0 z-50">
      <NavbarLogo></NavbarLogo>
      <div className="flex justify-around">
        {navbarLinks.map((link) => (
          <Link
            className="px-8 py-3 mx-2 rounded-xl font-bold bg-gray-800 text-white"
            key={link.name}
            to={link.redirect}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
