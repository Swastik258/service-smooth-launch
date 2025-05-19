
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="font-bold text-xl text-brand-600">
            ServPro
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-600 hover:text-brand-600 transition-colors">
            Home
          </Link>
          <a href="#services" className="text-gray-600 hover:text-brand-600 transition-colors">
            Services
          </a>
          <a href="#about" className="text-gray-600 hover:text-brand-600 transition-colors">
            About
          </a>
          <a href="#contact" className="text-gray-600 hover:text-brand-600 transition-colors">
            Contact
          </a>
          <Button size="sm" className="bg-brand-600 hover:bg-brand-700">
            Get Started
          </Button>
        </div>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-gray-600" />
          ) : (
            <Menu className="w-6 h-6 text-gray-600" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3 space-y-3">
            <Link
              to="/"
              className="block py-2 text-gray-600 hover:text-brand-600"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <a
              href="#services"
              className="block py-2 text-gray-600 hover:text-brand-600"
              onClick={toggleMenu}
            >
              Services
            </a>
            <a
              href="#about"
              className="block py-2 text-gray-600 hover:text-brand-600"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#contact"
              className="block py-2 text-gray-600 hover:text-brand-600"
              onClick={toggleMenu}
            >
              Contact
            </a>
            <Button
              size="sm"
              className="w-full bg-brand-600 hover:bg-brand-700"
              onClick={toggleMenu}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
