import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 bg-neutral-200 border-b border-gray-500/30 text-gray-500 text-center md:text-left">
        <div className="w-4/5 flex flex-col items-center md:items-start">
          <Image width={200} height={200} className="w-35 md:w-32" src="/logo.png" alt="logo" />
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          <h2 className="font-medium text-gray-900 mb-5">Company</h2>
          <ul className="text-sm space-y-2">
            <li><Link href="/" className="hover:underline transition">Home</Link></li>
            <li><Link href="/shop" className="hover:underline transition">Shop</Link></li>
            <li><Link href="/cart" className="hover:underline transition">Cart</Link></li>
            <li><Link href="/contact" className="hover:underline transition">Contact Us</Link></li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          <h2 className="font-medium text-gray-900 mb-5">Get in touch</h2>
          <div className="text-sm space-y-2">
            <p>+233269776695</p>
            <p>naakuokor@gmail.com</p>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm text-gray-900 bg-neutral-200">
        ©2025 JollofDevelopers All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
