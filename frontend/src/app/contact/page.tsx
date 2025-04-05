"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate sending an email (Backend integration needed for actual sending)
    setIsSubmitted(true);
  };

  return (
    <div className= "flex flex-col min-h-screen ">
      <header className="w-full shadow-md">
        <Navbar />
      </header>

      <main className="flex-grow max-w-5xl mx-auto p-6 bg-slate-800 shadow rounded-lg mt-6">
        <h1 className="text-3xl font-bold text-gray-100 mb-6 border-b-1 border-b-gray-600">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Business Details */}
          <div className="p-6 rounded shadow">
            <h2 className="text-2xl font-semibold mb-4 text-gray-100">Our Contact Details</h2>
            <p className="text-gray-100 mb-2">📍 Location: Accra, Ghana</p>
            <p className="text-gray-100 mb-2">📧 Email: naakuokor@gmail.com</p>
            <p className="text-gray-100 mb-2">📞 Phone: +233 26 977 6695</p>
          </div>

          {/* Contact Form */}
          <div className="p-6 rounded shadow">
            <h2 className="text-2xl font-semibold mb-4 text-gray-100">Get in Touch</h2>
            {isSubmitted ? (
              <p className="text-green-600 font-semibold">Thank you! Your message has been sent.</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full p-2 border rounded text-gray-400"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full p-2 border rounded text-gray-400"
                  value={formData.email}
                  onChange={handleChange}
                />
                <textarea
                  name="message"
                  placeholder="Type your message here"
                  required
                  className="w-full p-2 border rounded text-gray-400"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <footer className="w-full mt-6">
        <Footer />
      </footer>
    </div>
  );
}
