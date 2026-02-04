import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              {/* Website Logo */}
              <a href="#" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg">J&K <span className="text-yellow-400">Tours</span></span>
              </a>
            </div>
            {/* Primary Navbar items */}
            <div className="hidden md:flex items-center space-x-1">
              <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-yellow-400 transition duration-300">Home</a>
              <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-yellow-400 transition duration-300">Tours</a>
              <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-yellow-400 transition duration-300">About</a>
              <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-yellow-400 transition duration-300">Contact Us</a>
            </div>
          </div>
          {/* Secondary Navbar items */}
          <div className="hidden md:flex items-center space-x-3 ">
            <a href="#" className="py-2 px-2 font-medium text-white bg-yellow-400 rounded hover:bg-yellow-500 transition duration-300">Book Now</a>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className=" w-6 h-6 text-gray-500 hover:text-yellow-400 "
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* mobile menu */}
      <div className={`${isMenuOpen ? '' : 'hidden'} mobile-menu`}>
        <ul className="">
          <li className="active"><a href="index.html" className="block text-sm px-2 py-4 text-white bg-yellow-400 font-semibold">Home</a></li>
          <li><a href="#services" className="block text-sm px-2 py-4 hover:bg-yellow-500 transition duration-300">Tours</a></li>
          <li><a href="#about" className="block text-sm px-2 py-4 hover:bg-yellow-500 transition duration-300">About</a></li>
          <li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-yellow-500 transition duration-300">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;