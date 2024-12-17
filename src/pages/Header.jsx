import React, { useState } from "react";
import Logo from '../assets/sports-logo.png'
import { Link } from "react-router-dom";


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
       
        <img src={Logo} alt="Sport Logo" />

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="block md:hidden text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/football" className="hover:text-gray-300">
            Football
          </Link>
          <Link to="/boxing" className="hover:text-gray-300">
            Boxing
          </Link>
          <Link to="/tennis" className="hover:text-gray-300">
            Tennis
          </Link>
          <Link to="/AboutUs" className="hover:text-gray-300">
            About Us
          </Link>
          <Link to="/ContactUs" className="hover:text-gray-300">
            Contact Us
          </Link>
        </nav>
        <button
        className="bg-white hidden lg:block text-blue-500 font-bold px-6 py-3 rounded-md shadow-md hover:bg-blue-200"
        ><Link to="/Create">Create Post</Link> </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-700">
          <nav className="flex flex-col items-center space-y-2 py-2 px-4">
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link to="/football" className="hover:text-gray-300">
              Football
            </Link>
            <Link to="/boxing" className="hover:text-gray-300">
              Boxing
            </Link>
            <Link to="/tennis" className="hover:text-gray-300">
              Tennis
            </Link>
            <Link to="/AboutUs" className="hover:text-gray-300">
            About Us
          </Link>
          <Link to="/ContactUs" className="hover:text-gray-300">
            Contact Us
          </Link>
          <button
        className="hover:text-gray-300"
        ><Link to="/Create">Create Post</Link> </button>
          </nav>
        </div>
      )}
    </header>
  );
}
