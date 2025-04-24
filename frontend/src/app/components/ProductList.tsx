"use client";
import { useEffect, useState } from "react";
import Link from 'next/link';

interface Product {
  _id: string;
  name: string;
  price: string;
  description: string;
  image: string;
}

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`)
      .then((res) => res.json())
      .then((data) => {
        // Filter only the selected products
        const selectedProducts = data.filter((product: Product) =>
          ["67d507cadc04662b1eaefc2a", "67d5079bdc04662b1eaefc28"].includes(product._id)
        );
        setProducts(selectedProducts);
      })
      .catch((error) => console.error("Error fetching products:", error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="p-8 flex flex-col items-center bg-neutral-100 text-black min-h-screen">
      <h2 className="text-2xl font-bold mb-1">Products</h2>
      <hr className="w-16 border-t-1 border-black mx-auto mb-3" />
      <div className="grid grid-cols-2 gap-8 place-items-center">
        {products.map((product) => (
          <div key={product._id} className="flex flex-col items-center">
            {product.image && (
              <img
                src={`${product.image}`}
                alt={product.name}
                className="w-64 h-64 object-contain
                border border-gray-100 rounded-lg shadow-xl p-2 m-4"
              />
            )}
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
          </div>
        ))}
      </div>
      <Link href="/shop">
        <button className="mt-6 px-6 py-3 bg-neutral-800 text-white font-semibold rounded-lg shadow-md hover:bg-neutral-300 transition">
          View More
        </button>
      </Link>
    </section>
  );
}
