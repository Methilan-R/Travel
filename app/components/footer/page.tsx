import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 shadow-inner mt-10">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Company Name */}
        <div className="text-2xl font-bold text-blue-600">Jathi</div>

        {/* Footer Nav Links */}
        <div className="flex space-x-6 text-gray-700 text-sm">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/destination" className="hover:text-blue-600">Destination</Link>
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <Link href="/dashboard" className="hover:text-blue-600">Dashboard</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 text-blue-600 text-xl">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-500 text-sm py-4 border-t">
        &copy; {new Date().getFullYear()} Jathi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
