// components/Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg">Semecolon</div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">About Us</a>
          <a href="#" className="hover:text-gray-300">Services</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
