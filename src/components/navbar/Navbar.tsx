import { navbarLinks } from "@/constants/navbarLinks";

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-white shadow-md px-6 py-4 sticky top-0 z-50">
      <h1 className="text-xl font-bold text-gray-800">☕ CashRegisterApp</h1>
      <div className="flex justify-around">
        {navbarLinks.map((link) => (
          <a
            key={link.name}
            href={`localhost:5173/${link.redirect}`}
            className="px-8 text-gray-700 hover:text-red-500 transition-colors "
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
