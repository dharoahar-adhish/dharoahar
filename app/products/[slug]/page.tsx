import { products } from "@/data/products";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) return notFound();

  return (
    <main className="w-full px-4 py-6">

      <div className="max-w-5xl mx-auto">

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">

          {/* IMAGE */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[220px] object-cover"
          />

          {/* CONTENT */}
          <div className="p-4">

            <h1 className="text-xl font-semibold mb-3">
              {product.name}
            </h1>

            <p className="text-sm text-gray-600 leading-relaxed mb-4 whitespace-pre-line">
              {product.content}
            </p>

            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              {product.bullets.map((b, i) => (
                <li key={i}>• {b}</li>
              ))}
            </ul>

            <button className="bg-black text-white px-4 py-2 text-sm rounded">
              Request Sample
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}