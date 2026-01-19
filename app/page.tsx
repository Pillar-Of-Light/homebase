import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-700 text-white py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Welcome to Artist Name</h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-300">
            Musician, Songwriter & Performer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/music"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Listen Now
            </Link>
            <Link
              href="/tour"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Tour Dates
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Releases</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Album Card 1 */}
            <div className="bg-slate-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-slate-300 h-64 flex items-center justify-center">
                <span className="text-slate-500">Album Cover</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Album Title 1</h3>
                <p className="text-slate-600 mb-4">Released 2026</p>
                <Link
                  href="/music"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Listen Now →
                </Link>
              </div>
            </div>

            {/* Album Card 2 */}
            <div className="bg-slate-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-slate-300 h-64 flex items-center justify-center">
                <span className="text-slate-500">Album Cover</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Album Title 2</h3>
                <p className="text-slate-600 mb-4">Released 2025</p>
                <Link
                  href="/music"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Listen Now →
                </Link>
              </div>
            </div>

            {/* Album Card 3 */}
            <div className="bg-slate-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-slate-300 h-64 flex items-center justify-center">
                <span className="text-slate-500">Album Cover</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Album Title 3</h3>
                <p className="text-slate-600 mb-4">Released 2024</p>
                <Link
                  href="/music"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Listen Now →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Connected</h2>
          <p className="text-xl mb-8 text-slate-300">
            Get the latest updates on new music, tour dates, and exclusive content.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold inline-block transition-colors"
          >
            Sign Up for Newsletter
          </Link>
        </div>
      </section>
    </div>
  );
}
