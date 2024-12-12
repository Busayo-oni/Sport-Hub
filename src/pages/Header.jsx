import React, { useState } from "react";
import Logo from '../assets/sports-logo.png'

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
          <a href="/" className="hover:text-gray-300">
            Home
          </a>
          <a href="/football" className="hover:text-gray-300">
            Football
          </a>
          <a href="/boxing" className="hover:text-gray-300">
            Boxing
          </a>
          <a href="/tennis" className="hover:text-gray-300">
            Tennis
          </a>
          <a href="/AboutUs" className="hover:text-gray-300">
            About Us
          </a>
          <a href="/ContactUs" className="hover:text-gray-300">
            Contact Us
          </a>
        </nav>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-700">
          <nav className="flex flex-col items-center space-y-2 py-2 px-4">
            <a href="/" className="hover:text-gray-300">
              Home
            </a>
            <a href="/football" className="hover:text-gray-300">
              Football
            </a>
            <a href="/boxing" className="hover:text-gray-300">
              Boxing
            </a>
            <a href="/tennis" className="hover:text-gray-300">
              Tennis
            </a>
            <a href="/AboutUs" className="hover:text-gray-300">
            About Us
          </a>
          <a href="/ContactUs" className="hover:text-gray-300">
            Contact Us
          </a>
          </nav>
        </div>
      )}
    </header>
  );
}
