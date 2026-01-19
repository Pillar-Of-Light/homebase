export default function Music() {
  const albums = [
    {
      title: "Album Title 1",
      year: "2026",
      tracks: 12,
      genre: "Rock",
    },
    {
      title: "Album Title 2",
      year: "2025",
      tracks: 10,
      genre: "Alternative",
    },
    {
      title: "Album Title 3",
      year: "2024",
      tracks: 14,
      genre: "Indie",
    },
    {
      title: "Album Title 4",
      year: "2023",
      tracks: 11,
      genre: "Rock",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Music</h1>
          <p className="text-xl text-slate-300">Explore the discography</p>
        </div>
      </section>

      {/* Albums Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Discography</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {albums.map((album, index) => (
              <div
                key={index}
                className="bg-slate-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-slate-300 h-64 flex items-center justify-center">
                  <span className="text-slate-500">Album Cover</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{album.title}</h3>
                  <p className="text-slate-600 mb-1">{album.year}</p>
                  <p className="text-slate-500 text-sm mb-4">
                    {album.tracks} tracks • {album.genre}
                  </p>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                      Listen
                    </button>
                    <button className="px-4 py-2 border border-slate-300 hover:bg-slate-100 rounded-lg text-sm font-semibold transition-colors">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Streaming Links */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Listen on Your Favorite Platform</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Spotify
            </a>
            <a
              href="https://music.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Apple Music
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              YouTube Music
            </a>
            <a
              href="https://soundcloud.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              SoundCloud
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
