export default function Videos() {
  const videos = [
    {
      title: "Music Video - Song Title 1",
      date: "January 2026",
      views: "1.2M",
    },
    {
      title: "Live Performance - Festival 2025",
      date: "December 2025",
      views: "850K",
    },
    {
      title: "Behind the Scenes - Album Recording",
      date: "November 2025",
      views: "450K",
    },
    {
      title: "Music Video - Song Title 2",
      date: "October 2025",
      views: "2.1M",
    },
    {
      title: "Acoustic Session",
      date: "September 2025",
      views: "680K",
    },
    {
      title: "Interview - Music Magazine",
      date: "August 2025",
      views: "320K",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Videos</h1>
          <p className="text-xl text-slate-300">Watch music videos, live performances, and more</p>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Video</h2>
          <div className="bg-slate-900 aspect-video rounded-lg flex items-center justify-center">
            <span className="text-white text-xl">Video Player Placeholder</span>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-bold mb-2">Latest Music Video</h3>
            <p className="text-slate-600">
              Watch the official music video for the latest single.
            </p>
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">All Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="bg-slate-700 aspect-video flex items-center justify-center relative group">
                  <span className="text-white">Video Thumbnail</span>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">{video.title}</h3>
                  <div className="flex justify-between text-sm text-slate-600">
                    <span>{video.date}</span>
                    <span>{video.views} views</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe for More</h2>
          <p className="text-slate-600 mb-8">
            Don&apos;t miss out on new music videos and exclusive content
          </p>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold inline-block transition-colors"
          >
            Subscribe on YouTube
          </a>
        </div>
      </section>
    </div>
  );
}
