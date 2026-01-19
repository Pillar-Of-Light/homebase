export default function Tour() {
  const tourDates = [
    {
      date: "Feb 15, 2026",
      venue: "Madison Square Garden",
      city: "New York, NY",
      status: "On Sale",
    },
    {
      date: "Feb 22, 2026",
      venue: "The Forum",
      city: "Los Angeles, CA",
      status: "On Sale",
    },
    {
      date: "Mar 1, 2026",
      venue: "United Center",
      city: "Chicago, IL",
      status: "On Sale",
    },
    {
      date: "Mar 8, 2026",
      venue: "TD Garden",
      city: "Boston, MA",
      status: "Few Tickets",
    },
    {
      date: "Mar 15, 2026",
      venue: "American Airlines Center",
      city: "Dallas, TX",
      status: "On Sale",
    },
    {
      date: "Mar 22, 2026",
      venue: "Chase Center",
      city: "San Francisco, CA",
      status: "On Sale",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tour Dates</h1>
          <p className="text-xl text-slate-300">Catch the show live near you</p>
        </div>
      </section>

      {/* Tour Dates List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Upcoming Shows</h2>
          <div className="space-y-4">
            {tourDates.map((show, index) => (
              <div
                key={index}
                className="bg-slate-100 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="text-sm text-slate-500 mb-1">{show.date}</div>
                    <h3 className="text-xl font-bold mb-1">{show.venue}</h3>
                    <p className="text-slate-600">{show.city}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        show.status === "Few Tickets"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {show.status}
                    </span>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                      Get Tickets
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIP Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">VIP Experience</h2>
          <p className="text-xl mb-8 text-slate-300 max-w-2xl mx-auto">
            Get exclusive access to meet & greets, soundcheck, premium seating, and more with VIP packages.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Learn More About VIP
          </button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-slate-100 rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Never Miss a Show</h2>
            <p className="text-slate-600 mb-6">
              Sign up to get notified when new tour dates are announced in your area.
            </p>
            <div className="max-w-md mx-auto flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
