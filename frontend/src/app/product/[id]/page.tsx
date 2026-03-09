"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  stock: number;
  category?: string;
}

export default function ProductPage() {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!id) return;
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const newCart = [...cart, { ...product, quantity }];
    localStorage.setItem("cart", JSON.stringify(newCart));
    router.push("/cart");
  };

  // Loading State - You can eventually use your mustard pulse here too!
  if (!product) return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-[10px] font-black uppercase tracking-[0.4em] text-yellow-600 animate-pulse">Loading Details...</p>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto w-full p-6 lg:py-20">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          
          {/* LEFT: Product Image - Clean & Sharp */}
          <div className="flex-1 bg-white border border-neutral-100 p-8 flex items-center justify-center transition-all duration-500 hover:shadow-sm">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto max-h-[550px] object-contain transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* RIGHT: Product Details - Bold & Airy */}
          <div className="flex-1 space-y-8 py-4">
            <div className="space-y-4">
              <h1 className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-black leading-tight">
                {product.name}
              </h1>
              <p className="text-2xl font-bold text-yellow-600">
                GHS {product.price}
              </p>
            </div>

            <div className="space-y-4">
               <p className="text-neutral-500 leading-relaxed text-sm max-w-lg">
                {product.description}
              </p>
              
              {/* Stock Badge */}
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${product.stock > 0 ? 'bg-green-500' : 'bg-red-500'}`} />
                <p className="text-[10px] font-black uppercase tracking-widest text-neutral-400">
                  {product.stock > 0 ? `${product.stock} ITEMS AVAILABLE` : "OUT OF STOCK"}
                </p>
              </div>
            </div>

            {/* ACTION SECTION */}
            {product.stock > 0 && (
              <div className="space-y-6 pt-4">
                <div className="flex flex-col space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-black">Quantity</span>
                  <div className="flex items-center border border-neutral-200 w-max bg-white">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 hover:bg-neutral-50 transition-colors font-bold border-r border-neutral-200"
                    >-</button>
                    <span className="px-8 py-2 font-black text-xs text-black">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                      className="px-4 py-2 hover:bg-neutral-50 transition-colors font-bold border-l border-neutral-200"
                    >+</button>
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="w-full md:w-80 py-4 bg-black text-white font-black uppercase tracking-[0.2em] text-[10px] hover:bg-yellow-600 transition-all duration-500 shadow-xl hover:shadow-yellow-600/20 active:scale-95"
                >
                  Add to Cart
                </button>
              </div>
            )}

            {/* Category Tagging for better UX */}
            <div className="pt-10 border-t border-neutral-100">
              <p className="text-[10px] font-black uppercase tracking-widest text-neutral-400">
                Category: <span className="text-black ml-2">{product.category || "General"}</span>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
