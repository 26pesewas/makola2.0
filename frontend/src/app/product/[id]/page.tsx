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
}

export default function ProductPage() {
  const { id } = useParams(); // Get ID dynamically from the URL
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!id) return; // Ensure id is available before fetching
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;

    // Get existing cart items from local storage
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    // Add new item to cart
    const newCart = [...cart, { ...product, quantity }];

    // Save back to local storage
    localStorage.setItem("cart", JSON.stringify(newCart));

    // Redirect to Cart Page
    router.push("/cart");
  };

  if (!product) return <p className="text-center text-gray-600">Loading...</p>;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar - Full width */}
      <header className="w-full shadow-md">
        <Navbar />
      </header>

      {/* Main content */}
      <main className="flex-grow max-w-5xl mx-auto p-6 bg-neutral-200 shadow rounded-lg mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 divide-x-1 divide-gray-300">
          {/* Product Image */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-contain rounded"
          />

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-2xl text-gray-700 my-4">GHS {product.price}</p>
            <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
            <p className="text-gray-600 mb-4">Stock: {product.stock > 0 ? product.stock : "Out of Stock"}</p>
            
            {/* Quantity Selector */}
            {product.stock > 0 && (
              <div className="mb-4">
                <label className="inline text-gray-700 mb-2">Quantity:</label>
                <select
                  className="border p-2 rounded text-gray-500"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                >
                  {[...Array(product.stock).keys()].map((num) => (
                    <option key={num + 1} value={num + 1}>{num + 1}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className={`px-6 py-3 rounded-lg transition text-white ${product.stock > 0 ? "bg-neutral-800 hover:bg-neutral-700" : "bg-gray-400 cursor-not-allowed"}`}
              disabled={product.stock === 0}
            >
              {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
            </button>
          </div>
        </div>
      </main>

      {/* Footer - Full width */}
      <footer className="w-full mt-6">
        <Footer />
      </footer>
    </div>
  );
}
