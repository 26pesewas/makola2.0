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
  category: string;
}

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true); // New Loading State

  const categories = [
    "All", 
    "Makola Fruits and Veggies", 
    "Grains and Powders", 
    "Teshie Coldstore", 
    "KantaOnline"
  ];

  useEffect(() => {
    setIsLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false); // Stop loading when data arrives
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />
      
      <main className="max-w-7xl mx-auto p-6 space-y-12">
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto pt-8">
          <input
            type="text"
            placeholder="SEARCH PRODUCTS..."
            className="w-full pb-2 bg-transparent border-b-2 border-neutral-200 focus:border-yellow-600 transition-colors placeholder-gray-300 text-black uppercase font-black text-xs tracking-[0.2em] focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Category Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 pt-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] border-2 transition-all duration-300 
                ${activeCategory === cat 
                  ? 'bg-yellow-600 text-white border-yellow-600 shadow-md scale-105' 
                  : 'bg-white text-black border-neutral-100 hover:border-yellow-600 hover:text-yellow-600'
                }`}
            >
              {cat === 'KantaOnline' ? 'KantaOnline' : cat.replace('Makola ', '')}
            </button>
          ))}
        </div>

        {/* Conditional Rendering: Loading vs Grid */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-32 space-y-6">
            {/* Logo Container with Mustard Pulse Animation */}
            <div className="relative w-100 h-100 animate-pulse">
                <img 
                  src="/makola_logo.svg"
                  alt="Makola Online Loading"
                  className="w-full h-full object-contain"
                />
            </div>
            <div className="text-center">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-yellow-600 animate-bounce">
                Loading Products
              </p>
            </div>
          </div>
        ) : (
          <>
            {/* Full-Width Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
              {filteredProducts.map((product) => (
                <Link key={product._id} href={`/product/${product._id}`} className="group">
                  <div className="bg-white">
                    <div className="aspect-square w-full border border-neutral-100 bg-white overflow-hidden flex items-center justify-center p-8 transition-all duration-500 group-hover:border-yellow-600/20 group-hover:shadow-xl group-hover:shadow-yellow-600/5">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-400" 
                      />
                    </div>

                    <div className="mt-6 text-center">
                      <h3 className="text-xs font-black uppercase tracking-tight text-black group-hover:text-yellow-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-[10px] font-bold text-neutral-400 mt-1">
                        GHS {product.price}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-20 border-2 border-dashed border-neutral-100 rounded-xl">
                <p className="text-neutral-400 uppercase tracking-widest font-black text-xs">
                  No items found in {activeCategory}
                </p>
              </div>
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}