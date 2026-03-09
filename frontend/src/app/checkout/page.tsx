"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface CartItem {
  _id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  stock: number;
}

export default function CheckoutPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const router = useRouter();

  // Load cart from Local Storage exactly as before
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  // Use your existing logic for quantity and removal
  const updateQuantity = (id: string, newQuantity: number) => {
    const updatedCart = cart.map((item) =>
      item._id === id ? { ...item, quantity: Math.min(newQuantity, item.stock) } : item
    );
    const uniqueCart = Array.from(new Map(updatedCart.map(item => [item._id, item])).values());
    setCart(uniqueCart);
    localStorage.setItem("cart", JSON.stringify(uniqueCart));
  };

  const removeItem = (id: string) => {
    const filteredCart = cart.filter((item) => item._id !== id);
    setCart(filteredCart);
    localStorage.setItem("cart", JSON.stringify(filteredCart));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-grow max-w-6xl mx-auto w-full p-6 lg:py-20">
        {/* Big Bold Header */}
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-16 border-b-4 border-black pb-8 text-black">
          Confirm Order
        </h1>

        {cart.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-neutral-400 font-black uppercase text-xs tracking-widest">Your cart is empty.</p>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* LEFT: Product List (The current content) */}
            <div className="flex-[2] w-full space-y-8">
              {cart.map((item, index) => (
                <div key={`${item._id}-${index}`} className="flex items-center justify-between border-b border-neutral-100 pb-8">
                  <div className="flex items-center">
                    <div className="w-24 h-24 border border-neutral-100 p-2 flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                    </div>
                    <div className="ml-6 space-y-1">
                      <h2 className="text-lg font-black uppercase tracking-tight text-black">{item.name}</h2>
                      <p className="text-yellow-600 font-bold text-sm">GHS {item.price}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    {/* Re-styled Quantity Selector */}
                    <select
                      className="bg-neutral-50 border-2 border-black p-2 font-black text-xs uppercase focus:outline-none cursor-pointer"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item._id, Number(e.target.value))}
                    >
                      {[...Array(item.stock).keys()].map((num) => (
                        <option key={num + 1} value={num + 1}>{num + 1}</option>
                      ))}
                    </select>

                    <button
                      className="text-[10px] font-black uppercase tracking-widest text-neutral-300 hover:text-red-600 transition-colors"
                      onClick={() => removeItem(item._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT: Final Total & Action */}
            <div className="flex-1 w-full lg:w-auto">
              <div className="bg-neutral-50 p-10 space-y-10 border border-neutral-100 sticky top-24 shadow-sm">
                <div className="space-y-2">
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-400">Final Summary</p>
                  <p className="text-3xl font-black text-black uppercase tracking-tighter">
                    Total: GHS {totalPrice.toFixed(2)}
                  </p>
                </div>

                <button
                  className="w-full py-6 bg-black text-white font-black uppercase tracking-[0.3em] text-xs hover:bg-yellow-600 transition-all duration-500 shadow-xl hover:shadow-yellow-600/20 active:scale-95"
                  onClick={() => {
                    alert("Thank you for your order! Let's keep protecting our environment🌍♻️");
                    router.push("/");
                  }}
                >
                  Confirm Order
                </button>
                
                <p className="text-[9px] text-center text-neutral-400 font-black uppercase tracking-widest leading-relaxed">
                  Every purchase supports <br/> eco-friendly Ghanaian trade.
                </p>
              </div>
            </div>

          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
