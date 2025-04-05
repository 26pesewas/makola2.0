"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-neutral-200 shadow-md p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900">MakolaOnline</div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900">
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Nav Links */}
        <ul className={`md:flex space-x-6 text-gray-700 font-medium hidden`}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/shop">Shop</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <Link href="/cart" className="hover:text-gray-400">
                <ShoppingCart className="w-5 h-5" />
              </Link>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-neutral-200 text-gray-900 py-4 space-y-4 shadow-md">
          <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link href="/shop" onClick={() => setIsOpen(false)}>Shop</Link></li>
          <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          <li><Link href="/cart" onClick={() => setIsOpen(false)}>Cart</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
