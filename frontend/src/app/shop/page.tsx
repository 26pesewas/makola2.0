"use client";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";


interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
}

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
        <Navbar />
    <main className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search products..."
        className="w-full p-2 border border-neutral-400 rounded placeholder-gray-400 text-gray-600 focus:outline-none"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Sidebar & Products Grid */}
      <div className="flex flex-col md:grid md:grid-cols-4 gap-6">
        {/* Sidebar - Takes 1 column */}
        <aside className="bg-neutral-200 p-4 shadow-lg rounded w-full md:col-span-1">
          <h2 className="font-semibold text-lg text-black">Products</h2>
          <ul className="space-y-2 text-gray-700 divide-y-1 divide-gray-300">
            <li>Beverages</li>
            <li>Rice and grains</li>
            <li>Drinks</li>
            <li>Cereal</li>
            <li>Self-care</li>
            <li>Kanta Online (Upcycled clothes)</li>
          </ul>
        </aside>

        {/* Products Grid - Takes 1 column on mobiles and 2 columns on larger screens*/}
        <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredProducts.map((product) => (
            <Link key={product._id} href={`/product/${product._id}`}>
            <div key={product._id} className="bg-neutral-200 p-4 rounded shadow">
              <img src={product.image} alt={product.name} className="w-full h-48 object-contain rounded" />
              <h3 className="text-lg font-semibold text-gray-700">{product.name}</h3>
              <p className="text-gray-600">GHS {product.price}</p>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}
