export default function Hero() {
    return (
      <section 
        className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-white text-center p-8"
        style={{ backgroundImage: "url('/img/makola.png')" }}
      >
        <h2 className="text-5xl font-bold">Welcome to Makola Online</h2>
        <p className="text-lg mt-4 max-w-lg">
          Quality and affordability in one place.
        </p>
        <a 
          href="#shop"
          className="mt-6 bg-neutral-800 hover:bg-neutral-300 text-white px-6 py-3 rounded-lg text-lg"
        >
          Shop Now
        </a>
      </section>
    );
  }
  