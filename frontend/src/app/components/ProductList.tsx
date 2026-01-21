const sections = [
  {
    title: "Makola Veggies",
    desc: "Nature’s Best, Delivered. Sourced daily from local farmers to ensure your kitchen is always stocked with vibrant, organic greens.",
    img: "/img/veggies.png",
    reverse: false
  },
  {
    title: "Grains & Powders",
    desc: "The Foundation of Every Meal. From premium stone-ground Agushie to the finest Gari, we provide the authentic staples.",
    img: "/img/grains.png",
    reverse: true
  },
    {
    title: "Teshie Coldstore",
    desc: "From the Coast to Your Kitchen. Our Teshie Cold Store is dedicated to preserving the quality of Ghana’s favorite proteins. From expertly smoked herring and salted pig feet (nane) to premium poultry, we ensure everything is handled with care and kept at peak freshness. No compromises—just the high-quality ingredients you need for an authentic Sunday fufu or a weekday light soup.",
    img: "/img/coldstore.png",
    reverse: false
  },
    {
    title: "KantaOnline",
    desc: "Heritage Reimagined, Waste Redefined. KantaOnline is our tribute to sustainability. We breathe new life into high-quality textiles by upcycling them into unique, contemporary fashion pieces. By blending traditional patterns with modern silhouettes, we’re not just making clothes; we’re preserving craftsmanship and reducing our environmental footprint, one stitch at a time.",
    img: "/img/kanta.png",
    reverse: true
  }
];

export default function CategorySections() {
  return (
        <div className="space-y-32 py-20">
          <div className="max-w-7xl mx-auto px-6 pt-24 pb-12 text-center">
      <span className="text-sm font-bold tracking-[0.3em] text-yellow-600 uppercase mb-4 block">
        Explore
      </span>
      <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-black">
        Our Products
      </h2>
      <div className="w-24 h-1 bg-yellow-600 mx-auto mt-6"></div>
    </div>
      {sections.map((sec) => (
        <section key={sec.title} className={`flex flex-col md:flex-row items-center gap-12 px-6 max-w-7xl mx-auto ${sec.reverse ? 'md:flex-row-reverse' : ''}`}>
          {/* Image & Label */}
          <div className="w-full md:w-1/2">
            <div className="border border-neutral-100 shadow-sm rounded-sm overflow-hidden">
              <img src={sec.img} alt={sec.title} className="w-full h-auto object-cover" />
            </div>
            <h3 className="mt-4 text-xl font-bold uppercase tracking-tighter text-black">{sec.title}</h3>
          </div>
          
          {/* Description Text */}
          <div className="w-full md:w-1/2 space-y-4">
            <p className="text-gray-600 leading-relaxed text-lg italic">{sec.desc}</p>
            <button className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-600 border-b-2 border-black pb-1 transition-all hover:text-yellow-500 hover:border-yellow-500">
              Shop Now
            </button>
          </div>
        </section>
      ))}
    </div>
  );
}
