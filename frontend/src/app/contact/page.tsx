"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-grow max-w-6xl mx-auto w-full p-6 lg:py-20">
        <div className="border-b-1 border-black pb-8 mb-16">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-black">
            Contact Us
          </h1>
          <p className="mt-4 text-neutral-600 font-black uppercase text-[10px] tracking-[0.4em]">
            Get in touch with the Makola Online team
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-20">
          
          <div className="flex-1 space-y-12">
            <h2 className="text-2xl font-black uppercase tracking-tight text-black">
              Our Details
            </h2>
            
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="bg-neutral-50 p-4 border border-neutral-100">
                  <MapPin className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-black uppercase text-[10px] tracking-widest text-neutral-400 mb-1">Location</h3>
                  <p className="font-bold text-black uppercase text-sm">Accra, Ghana</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-neutral-50 p-4 border border-neutral-100">
                  <Mail className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-black uppercase text-[10px] tracking-widest text-neutral-400 mb-1">Email</h3>
                  <p className="font-bold text-black text-sm lowercase">naakuokor@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-neutral-50 p-4 border border-neutral-100">
                  <Phone className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-black uppercase text-[10px] tracking-widest text-neutral-400 mb-1">Phone</h3>
                  <p className="font-bold text-black text-sm">+233 26 977 6695</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-[1.5] bg-neutral-50 p-10 md:p-16 border border-neutral-100 shadow-sm">
            {isSubmitted ? (
              <div className="text-center py-20 space-y-4">
                <p className="text-green-600 font-black uppercase text-xs tracking-widest italic">Success</p>
                <h3 className="text-2xl font-black uppercase tracking-tighter text-black">Message Received</h3>
                <button 
                   onClick={() => setIsSubmitted(false)}
                   className="text-[10px] font-black uppercase tracking-widest text-yellow-600 hover:underline pt-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-neutral-500">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-white border-2 border-neutral-200 focus:border-black px-4 py-3 text-sm text-black transition-all placeholder:text-neutral-400 outline-none" 
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-neutral-500">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-white border-2 border-neutral-200 focus:border-black px-4 py-3 text-black text-sm transition-all placeholder:text-neutral-400 outline-none" 
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-neutral-500">Your Message</label>
                  <textarea 
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="bg-white border-2 border-neutral-200 focus:border-black px-4 py-3 text-sm  text-black transition-all placeholder:text-neutral-400 outline-none resize-none" 
                    placeholder="Type your message here..."
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full md:w-auto px-12 py-5 text-black font-black uppercase tracking-[0.3em] text-[10px] border-neutral-700 hover:bg-yellow-600 transition-all duration-200 shadow-xl active:scale-95"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
