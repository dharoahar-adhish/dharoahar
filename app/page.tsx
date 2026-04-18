import Link from "next/link";

const wholeSpices = [
  { name: "Clove", slug: "clove", image: "/products/clove.jpg" },
  { name: "Cardamom", slug: "cardamom", image: "/products/cardamom.jpg" },
  { name: "Cinnamon", slug: "cinnamon", image: "/products/cinnamon.jpg" },
  { name: "Black Pepper", slug: "black-pepper", image: "/products/black-pepper.jpg" },
  { name: "Cumin", slug: "cumin", image: "/products/cumin.jpg" },
];

const powderedSpices = [
  { name: "Kashmiri Mirch", slug: "kashmiri-mirch", image: "/products/kashmiri-mirch.jpg" },
  { name: "Degi Mirch", slug: "degi-mirch", image: "/products/degi-mirch.jpg" },
  { name: "Cumin Powder", slug: "cumin-powder", image: "/products/cumin-powder.jpg" },
  { name: "Garam Masala", slug: "garam-masala", image: "/products/garam-masala.jpg" },
  { name: "Dhaniya Powder", slug: "dhaniya-powder", image: "/products/dhaniya-powder.jpg" },
  { name: "Haldi Powder", slug: "haldi-powder", image: "/products/haldi-powder.jpg" },
];

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">

      {/* HERO */}
      <section className="relative h-[50vh] flex items-center justify-center text-center text-white">
        <img
          src="/hero.jpg"
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 px-4">
          <h1 className="text-2xl md:text-4xl font-semibold mb-2">
            Premium Spices Built on Consistency
          </h1>
          <p className="text-sm text-gray-200">
            Rooted in origin. Delivered with discipline.
          </p>
        </div>
      </section>

      {/* WHOLE SPICES */}
      <section className="bg-[#f7f5f2] max-w-6xl mx-auto px-4 py-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-900">
          Whole Spices
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {wholeSpices.map((item) => (
            <Link
              key={item.slug}
              href={`/products/${item.slug}`}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-32 object-cover"
              />
              <div className="bg-white p-2 text-sm text-center text-gray-900">
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* POWDERED SPICES */}
      <section className="bg-[#f7f5f2] max-w-6xl mx-auto px-4 py-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-900">
          Powdered Spices
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {powderedSpices.map((item) => (
            <Link
              key={item.slug}
              href={`/products/${item.slug}`}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-32 object-cover"
              />
              <div className="bg-white p-2 text-sm text-center text-gray-900">
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FOUNDER */}
      <section className="max-w-5xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-sm p-4 flex items-center gap-4">

          <div className="w-14 h-14 rounded-full overflow-hidden border">
            <img
              src="/founder.jpg"
              alt="Founder"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-1">
              Founder’s Vision
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Dharoahar delivers consistent, farm-sourced spices built on discipline,
              trust, and long-term partnerships.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#111] text-gray-400 mt-6">
        <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-center">
          © 2026 Dharoahar Pvt. Ltd.
        </div>
      </footer>

    </main>
  );
}