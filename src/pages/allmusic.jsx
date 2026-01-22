import React from "react";
import GoldDivider from "../components/ui/gold-divider";
import { Link } from "react-router-dom";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

export default function AllMusic() {
    const releases = [
        {
            title: "AVALANCHES",
            year: "2026",
            description: "A reflection on overwhelming forces and spiritual journeys",
            link: "#",
            tracks: 1,
            duration: "3:00",
        },
        {
            title: "HYMNS FOR OUR TIME",
            year: "2026",
            description: "Contemporary songs exploring faith, doubt, and spiritual seeking",
            link: "#",
            tracks: 8,
            duration: "32:45",
        },
        {
            title: "GRACE IN THE MARGINS",
            year: "2025",
            description: "Experimental audio meditations on divine presence",
            link: "#",
            tracks: 5,
            duration: "20:15",
        },
        {
            title: "SOUND OF REDEMPTION",
            year: "2024",
            description: "Instrumental works reflecting transformation and renewal",
            link: "#",
            tracks: 7,
            duration: "28:30",
        },
    ];

    return (
        <div className="App">
            <Header />
            <main>
                <section id="all-music" style={{ paddingTop: "6rem" }}>
                    <Link to="/" style={{ color: "var(--color-gold)", fontSize: "0.9rem" }}>
                        &larr; Back to Home
                    </Link>
                    <h2 style={{
                        textAlign: "center",
                        color: "#22c55e",
                        fontFamily: "var(--font--heading)",
                        fontSize: "2.5rem",
                        letterSpacing: "0.2rem",
                        marginTop: "2rem",
                        marginBottom: "3rem",
                        animation: "flicker-medium 4s ease-in-out infinite",
                    }}>
                        ALL MUSIC
                    </h2>

                    <GoldDivider />

                    {/* Display all your music with full details */}
                    <div style={{ display: "grid", gap: "2rem", marginTop: "3rem" }}>
                      {releases.map((release, index) => (
                        <div
                          key={index}
                          style={{
                            padding: "2rem",
                            border: "1px solid var(--color-green-dark)",
                            background: "rgba(34, 197, 94, 0.02)",
                            transition: "all 0.3s ease",
                            cursor: "pointer",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = "var(--color-green-primary)";
                            e.currentTarget.style.boxShadow = "0 0 30px rgba(34, 197, 94, 0.2)";
                            e.currentTarget.style.transform = "translateX(10px)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "var(--color-green-dark)";
                            e.currentTarget.style.boxShadow = "none";
                            e.currentTarget.style.transform = "translateX(0)";
                          }}
                        >
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "1rem" }}>
                            <h3
                              style={{
                                color: "var(--color-gold)",
                                fontFamily: "var(--font-heading)",
                                fontSize: "1.5rem",
                                letterSpacing: "0.15rem",
                              }}
                            >
                              {release.title}
                            </h3>
                            <div style={{ textAlign: "right" }}>
                              <span style={{ color: "var(--color-gray)", fontFamily: "var(--font-heading)", fontSize: "0.9rem", display: "block" }}>
                                {release.year}
                              </span>
                              {release.tracks && (
                                <span style={{ color: "var(--color-gray)", fontSize: "0.75rem" }}>
                                  {release.tracks} tracks • {release.duration}
                                </span>
                              )}
                            </div>
                          </div>
                          <p style={{ color: "var(--color-gray)", marginBottom: "1.5rem", lineHeight: "1.8" }}>
                            {release.description}
                          </p>
                          <a
                            href={release.link}
                            style={{
                              display: "inline-block",
                              color: "var(--color-gold)",
                              fontFamily: "var(--font-heading)",
                              fontSize: "0.85rem",
                              letterSpacing: "0.1rem",
                              textTransform: "uppercase",
                              borderBottom: "1px solid var(--color-gold)",
                              paddingBottom: "0.25rem",
                            }}
                          >
                            Listen →
                          </a>
                        </div>
                      ))}
                    </div>

                    <div style={{ marginTop: "4rem", textAlign: "center" }}>
                      <p style={{ color: "var(--color-gray)", marginBottom: "1rem", fontSize: "0.9rem" }}>
                        Listen on all major platforms:
                      </p>
                      <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
                        <a href="https://bandcamp.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-gold)", fontSize: "0.9rem", letterSpacing: "0.1rem" }}>
                          Bandcamp
                        </a>
                        <a href="https://soundcloud.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-gold)", fontSize: "0.9rem", letterSpacing: "0.1rem" }}>
                          SoundCloud
                        </a>
                        <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-gold)", fontSize: "0.9rem", letterSpacing: "0.1rem" }}>
                          Spotify
                        </a>
                      </div>
                    </div>
                  </section>
                </main>
                <Footer />
              </div>
            );
}