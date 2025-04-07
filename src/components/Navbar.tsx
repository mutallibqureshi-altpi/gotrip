import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for mobile menu

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-blue-600">
            TravelBook
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            <a
              href="#offers"
              className="text-gray-600 hover:text-blue-500 transition duration-200"
            >
              Offers
            </a>
            <a
              href="#support"
              className="text-gray-600 hover:text-blue-500 transition duration-200"
            >
              Support
            </a>
            <a
              href="#help"
              className="text-gray-600 hover:text-blue-500 transition duration-200"
            >
              Help
            </a>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200 text-sm">
              Login / Signup
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="text-xl" />
              ) : (
                <FaBars className="text-xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen py-4" : "max-h-0 py-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-4 px-4">
          <a
            href="#offers"
            className="block text-gray-600 hover:text-blue-500"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Offers
          </a>
          <a
            href="#support"
            className="block text-gray-600 hover:text-blue-500"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Support
          </a>
          <a
            href="#help"
            className="block text-gray-600 hover:text-blue-500"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Help
          </a>
          <button className="w-full max-w-xs bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200 text-sm">
            Login / Signup
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
