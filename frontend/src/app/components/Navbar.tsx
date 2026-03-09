"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b-1 border-black sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 h-20">
        {/* Logo */}
        <div className="text-2xl font-black uppercase tracking-tighter text-black">
          <Link href="/">MakolaOnline</Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center space-x-10">
          <li>
            <Link href="/" className="text-[11px] font-black uppercase tracking-[0.3em] text-neutral-600 hover:text-black transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="text-[11px] font-black uppercase tracking-[0.3em] text-neutral-600 hover:text-black transition-colors">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-[11px] font-black uppercase tracking-[0.3em] text-neutral-600 hover:text-black transition-colors">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/cart" className="text-black hover:text-yellow-600 transition-colors">
              <ShoppingCart className="w-5 h-5" strokeWidth={2.5} />
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-[84px] left-0 w-full bg-white border-b-4 border-black animate-in slide-in-from-top duration-300">
          <ul className="flex flex-col items-center py-10 space-y-6">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)} className="text-xs font-black uppercase tracking-[0.4em] text-black">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" onClick={() => setIsOpen(false)} className="text-xs font-black uppercase tracking-[0.4em] text-black">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="text-xs font-black uppercase tracking-[0.4em] text-black">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/cart" onClick={() => setIsOpen(false)} className="text-xs font-black uppercase tracking-[0.4em] text-yellow-600">
                Your Cart
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
