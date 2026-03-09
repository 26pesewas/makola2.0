"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

interface CartItem {
  _id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  stock: number;
}

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const router = useRouter();

  useEffect(() => {
    const storedCart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const updateQuantity = (id: string, newQuantity: number) => {
    const updatedCart: CartItem[] = cart.map((item: CartItem) =>
      item._id === id ? { ...item, quantity: Math.min(Math.max(1, newQuantity), item.stock) } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (id: string) => {
    const filteredCart = cart.filter((item) => item._id !== id);
    setCart(filteredCart);
    localStorage.setItem("cart", JSON.stringify(filteredCart));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    router.push("/checkout");
  };

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <Navbar />

      <main className="flex-grow max-w-6xl mx-auto w-full p-6 lg:py-20">
        {/* Title - Larger & Bolder */}
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-16 border-b-4 border-black pb-8 text-black">
          Your Shopping Bag
        </h1>

        {cart.length === 0 ? (
          <div className="text-center py-32 space-y-8">
            <p className="text-neutral-400 font-black uppercase text-xs tracking-[0.5em]">Your bag is empty.</p>
            <Link href="/shop" className="inline-block px-10 py-4 bg-black text-white font-black text-xs uppercase tracking-widest hover:bg-yellow-600 transition-all duration-300">
              Return to Shop
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* LEFT: Item List - Increased scale */}
            <div className="flex-[2] w-full space-y-12">
              {cart.map((item: CartItem, index: number) => (
                <div key={`${item._id}-${index}`} className="flex flex-col md:flex-row gap-8 pb-10 border-b border-neutral-100 md:items-center">
                  
                  {/* Product Image - Increased from w-24 to w-40 */}
                  <div className="w-40 h-40 bg-white border border-neutral-100 flex-shrink-0 p-4 group overflow-hidden shadow-sm">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  
                  {/* Details - Larger Text */}
                  <div className="flex-grow space-y-2">
                    <h2 className="font-black uppercase text-lg md:text-xl tracking-tight text-black leading-none">
                      {item.name}
                    </h2>
                    <p className="text-yellow-600 font-black text-sm uppercase tracking-widest">
                      GHS {item.price.toFixed(2)}
                    </p>
                  </div>

                  {/* Custom Stepper - Larger Buttons */}
                  <div className="flex items-center border-1 border-black bg-white h-12">
                    <button 
                      onClick={() => updateQuantity(item._id, item.quantity - 1)} 
                      className="px-6 h-full hover:bg-neutral-50 transition-colors font-black text-lg border-r-1 border-black"
                    >-</button>
                    <span className="px-8 font-black text-sm text-black">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item._id, item.quantity + 1)} 
                      className="px-6 h-full hover:bg-neutral-50 transition-colors font-black text-lg border-l-1 border-black"
                    >+</button>
                  </div>

                  {/* Remove text link - More visible */}
                  <button
                    className="text-[11px] font-black uppercase tracking-[0.2em] text-neutral-300 hover:text-yellow-500 transition-colors underline decoration-2 underline-offset-4"
                    onClick={() => removeItem(item._id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* RIGHT: Summary Sidebar - Beefed up typography */}
            <div className="flex-1 w-full lg:w-auto">
              <div className="bg-neutral-50 p-10 space-y-10 sticky top-24 border border-neutral-100 shadow-sm">
                <h2 className="font-black uppercase text-xs tracking-[0.4em] text-neutral-400">Order Totals</h2>
                
                <div className="space-y-6 border-b-2 border-neutral-200 pb-8">
                  <div className="flex justify-between text-xs font-black text-neutral-600 uppercase tracking-widest">
                    <span>Subtotal</span>
                    <span>GHS {totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xs font-black text-neutral-600 uppercase tracking-widest">
                    <span>Delivery</span>
                    <span className="text-yellow-600 font-black italic">TBD</span>
                  </div>
                </div>

                <div className="flex justify-between font-black text-3xl uppercase tracking-tighter text-black">
                  <span>Total</span>
                  <span>GHS {totalPrice.toFixed(2)}</span>
                </div>

                <button
                  className="w-full py-6 bg-black text-white font-black uppercase tracking-[0.3em] text-xs hover:bg-yellow-600 transition-all duration-500 shadow-2xl hover:shadow-yellow-600/20 active:scale-95"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </button>
                
                <p className="text-[10px] text-center text-neutral-400 font-black uppercase tracking-[0.2em] leading-relaxed">
                  Fast, Fresh & Sustainable <br/> Makola Online Logistics
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
