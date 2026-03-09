"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t-1 border-black pt-20 pb-10 mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20 text-center md:text-left">
          
          {/* Column 1: Brand & Logo Area */}
<div className="flex flex-col items-center md:items-start space-y-6">
  {/* Change items-center to flex-col and keep md:items-start */}
  <div className="flex flex-col items-center md:items-start gap-2">
    <Image 
      width={60} // Slightly increased width since it's now solo
      height={60} 
      className="w-auto h-auto object-contain" 
      src="/makola_logo.svg" 
      alt="MakolaOnline Logo" 
    />
    <span className="font-black uppercase tracking-tighter text-xl text-black">
      MakolaOnline
    </span>
  </div>
</div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="font-black uppercase text-[11px] tracking-[0.4em] text-black mb-8">Company</h2>
            <ul className="flex flex-col space-y-4">
              <li>
                <Link href="/" className="text-[11px] font-bold uppercase tracking-widest text-neutral-500 hover:text-yellow-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-[11px] font-bold uppercase tracking-widest text-neutral-500 hover:text-yellow-600 transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-[11px] font-bold uppercase tracking-widest text-neutral-500 hover:text-yellow-600 transition-colors">
                  Cart
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[11px] font-bold uppercase tracking-widest text-neutral-500 hover:text-yellow-600 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="font-black uppercase text-[11px] tracking-[0.4em] text-black mb-8">Get in touch</h2>
            <div className="flex flex-col space-y-4 text-[11px] font-bold uppercase tracking-widest text-neutral-500">
              <span className="hover:text-black transition-colors cursor-default">+233269776695</span>
              <a href="mailto:naakuokor@gmail.com" className="hover:text-yellow-600 transition-colors">
                naakuokor@gmail.com
              </a>
              <p className="text-neutral-600 pt-2">Accra, Ghana</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[9px] font-black uppercase tracking-[0.3em] text-neutral-600">
            ©2026 JollofDevelopers All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
