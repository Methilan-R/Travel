import Link from 'next/link';
import React from 'react'

const Navbar = () => {
   return (
    <nav className="bg-white shadow-md sticky top-20 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Company Name */}
        <div className="text-2xl font-bold text-blue-600">Jathi</div>
 
        {/* Nav Links */}
        <div className="hidden md:flex space-x-6 text-gray-700">
          <Link href="/" className="hover:text-blue-600 font-medium">Home</Link>
          <Link href="/about" className="hover:text-blue-600 font-medium">About</Link>
          <Link href="/destination" className="hover:text-blue-600 font-medium">Destination</Link>
          <Link href="/blog" className="hover:text-blue-600 font-medium">Blog</Link>
          <Link href="/dashboard" className="hover:text-blue-600 font-medium">Dashboard</Link>
          <Link href="/contact" className="hover:text-blue-600 font-medium">Contact</Link>
        </div>

        {/* Book Now Button */}
        <div>
          <Link href="/book">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
