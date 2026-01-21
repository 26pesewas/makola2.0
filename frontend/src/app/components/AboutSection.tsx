import Link from 'next/link';
export default function AboutSection() {
  return (
    <section className="bg-white py-16 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-12">
        
{/* LEFT SIDE: IMAGE & FOUNDER INFO */}
        <div className="w-full md:w-1/2">
          <div className="relative group">
            {/* The Image with a subtle border and shadow */}
            <div className="overflow-hidden rounded-sm border border-neutral-200 shadow-sm">
              <img 
                src="/img/about.png" 
                alt="Phyllis Naa Akuokor Laryea" 
                className="object-cover w-full h-[500px] grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            
            {/* Founder Text Beneath Image */}
            <div className="mt-6">
              <h3 className="text-xl font-bold text-black tracking-tight">
                Phyllis Naa Akuokor Laryea
              </h3>
              <p className="text-sm uppercase tracking-widest text-yellow-600 font-semibold mt-1">
                Founder, Jollof Developers
              </p>
            </div>
          </div>
        </div>


        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <header>
            <h4 className="text-yellow-600 font-bold uppercase tracking-widest text-sm">
              About Us
            </h4>
            <h2 className="text-4xl font-extrabold text-gray-900 mt-2 leading-tight">
              Bringing the Heart of Makola <br /> Right to Your Doorstep
            </h2>
          </header>

          <p className="text-gray-600 leading-relaxed text-lg">
            Makola Online was created in response to the everyday challenges of shopping at traditional marketplaces in Ghana;
            overcrowded spaces, difficult navigation, and a heavy reliance on cash. At Jollof Developers, our goal is to bring convenience 
            and affordability into one trusted platform, making it easier for customers to access specific products from Makola Market
            without leaving the comfort of their homes. At the same time, we work to empower vendors by introducing digital payments such
            as Mobile Money and bank transfers, encouraging financial inclusion, and supporting sustainable income growth. 
            Makola Online bridges the gap between tradition and technology, smaking the market work better for everyone.
          </p>

        <Link href="/contact">
          <button className="mt-6 px-8 py-3 bg-black text-white font-bold rounded hover:bg-gray-800 transition-colors">
            Contact Us
          </button>
        </Link>
        </div>
      </div>
    </section>
  );
}