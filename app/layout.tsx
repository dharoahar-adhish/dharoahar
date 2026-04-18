import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#f7f5f2] text-gray-900 overflow-x-hidden">

        {/* HEADER */}
        <header className="sticky top-0 z-50 bg-black text-white">
          <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">

            <img src="/logo.jpg" className="h-7" />

            <nav className="flex gap-4 text-sm">
              <a href="/">Home</a>
              <a href="/products">Products</a>
              <a href="/contact">Contact</a>
            </nav>

            <button className="bg-white text-black px-3 py-1 rounded text-xs">
              Request Sample
            </button>

          </div>
        </header>

        {children}

      </body>
    </html>
  );
}