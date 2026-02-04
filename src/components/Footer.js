import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">J&K Tour</h3>
            <p className="text-gray-400">
              Your gateway to unforgettable travel experiences.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-gray-400">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Tours</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/buntynamberdar" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/buntynamberdar" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/buntynamberdar" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">
              Email: sushilkhichar@gmail.com
            </p>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8">
          <p>&copy; {new Date().getFullYear()} J&K Tour. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;