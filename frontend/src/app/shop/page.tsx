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
  category: string; // Ensure your DB includes category strings
}

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All", 
    "Makola Veggies", 
    "Makola Grains and Powders", 
    "Teshie Cold Store", 
    "KantaOnline"
  ];

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      <main className="max-w-7xl mx-auto p-6 space-y-12">
        
        {/* Search Bar - Refined with brand styling */}
        <div className="max-w-2xl mx-auto pt-8">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pb-2 bg-transparent border-b-2 border-neutral-200 focus:border-black transition-colors placeholder-gray-400 text-black uppercase font-bold text-xs tracking-widest focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Category Filter Bar - Replaces the Sidebar */}
        <div className="flex flex-wrap justify-center gap-3 pt-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] border-2 transition-all duration-300 
                ${activeCategory === cat 
                  ? 'bg-black text-white border-black' 
                  : 'bg-white text-black border-neutral-100 hover:border-black'
                }`}
            >
              {cat === 'KantaOnline' ? 'Upcycled Clothes' : cat.replace('Makola ', '')}
            </button>
          ))}
        </div>

        {/* Full-Width Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
          {filteredProducts.map((product) => (
            <Link key={product._id} href={`/product/${product._id}`} className="group">
              <div className="bg-white">
                {/* Image Wrapper - Pure white, no grey shadow */}
                <div className="aspect-square w-full border border-neutral-100 bg-white overflow-hidden flex items-center justify-center p-8 transition-shadow group-hover:shadow-sm">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>

                {/* Text Details - Bold and consistent with 'Our Products' section */}
                <div className="mt-6 text-center">
                  <h3 className="text-xs font-black uppercase text-black">
                    {product.name}
                  </h3>
                  <p className="text-xs font-medium text-neutral-500 mt-1">
                    GHS {product.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-neutral-400 uppercase tracking-widest font-bold text-sm">No products found in this category.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}