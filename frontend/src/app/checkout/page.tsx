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
  stock: number; // Ensure stock is considered
}

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const router = useRouter();

  // Load cart from Local Storage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  // Update quantity of an item
  const updateQuantity = (id: string, newQuantity: number) => {
    const updatedCart = cart.map((item) =>
      item._id === id ? { ...item, quantity: Math.min(newQuantity, item.stock) } : item
    );

    const uniqueCart = Array.from(new Map(updatedCart.map(item => [item._id, item])).values());

    setCart(uniqueCart);
    localStorage.setItem("cart", JSON.stringify(uniqueCart));
  };

  // Remove an item from the cart
  const removeItem = (id: string) => {
    const filteredCart = cart.filter((item) => item._id !== id);
    setCart(filteredCart);
    localStorage.setItem("cart", JSON.stringify(filteredCart));
  };

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Navigate to checkout page
  const handleCheckout = () => {
    router.push("/checkout");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar - Full width */}
      <header className="w-full shadow-md">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-5xl mx-auto p-6 bg-neutral-200 shadow rounded-lg mt-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h1>

        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div key={`${item._id}-${index}`} className="flex items-center justify-between bg-white p-4 rounded shadow">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-contain rounded" />
                <div className="flex-1 ml-4">
                  <h2 className="text-xl text-gray-700 font-semibold">{item.name}</h2>
                  <p className="text-gray-700">GHS {item.price}</p>
                </div>

                {/* Quantity Selector */}
                <select
                  className="border p-2 rounded text-gray-500 ml-4"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item._id, Number(e.target.value))}
                >
                  {[...Array(item.stock).keys()].map((num) => (
                    <option key={num + 1} value={num + 1}>{num + 1}</option>
                  ))}
                </select>

                {/* Remove Button */}
                <button
                  className="ml-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                  onClick={() => removeItem(item._id)}
                >
                  Remove
                </button>
              </div>
            ))}

            {/* Total Price & Checkout */}
            <div className="mt-6 p-4 bg-white rounded shadow text-center">
              <p className="text-xl text-gray-700 font-bold mb-4">Total: GHS {totalPrice.toFixed(2)}</p>
              <button
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
                onClick={() => {
                  alert("Thank you for your order! Let's keep protecting our environment🌍♻️");
                  router.push("/");
                }}
              >
                Confirm Order
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer - Full width */}
      <footer className="w-full mt-6">
        <Footer />
      </footer>
    </div>
  );
}
