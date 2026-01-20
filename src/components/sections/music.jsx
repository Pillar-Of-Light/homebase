import React from "react";
import { Link } from "react-router-dom";
import GoldDivider from "../ui/gold-divider";

export default function Music() {
  const releases = [
    {
        title: "AVALANCHES",
        year: "2026",
        description: "A reflection on overwhelming forces and spiritual journeys",
        link: "#",
    },
    {
      title: "HYMNS FOR OUR TIME",
      year: "2026",
      description: "Contemporary songs exploring faith, doubt, and spiritual seeking",
      link: "#",
    },
    {
      title: "GRACE IN THE MARGINS",
      year: "2025",
      description: "Experimental audio meditations on divine presence",
      link: "#",
    },
    {
      title: "SOUND OF REDEMPTION",
      year: "2024",
      description: "Instrumental works reflecting transformation and renewal",
      link: "#",
    },
  ];
  const displayReleases = releases.slice(0, 3);

  return (
    <section id="music" style={{ paddingTop: "6rem" }}>
      <h2
        style={{
          textAlign: "center",
          color: "#22c55e",
          fontFamily: "var(--font-heading)",
          fontSize: "2.5rem",
          letterSpacing: "0.2rem",
          marginBottom: "3rem",
        }}
      >
        MUSIC & SOUND
      </h2>

      <GoldDivider />

      <div style={{ display: "grid", gap: "2rem", marginTop: "3rem" }}>
        {displayReleases.map((release, index) => (
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
              <span style={{ color: "var(--color-gray)", fontFamily: "var(--font-heading)", fontSize: "0.9rem" }}>
                {release.year}
              </span>
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

      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <Link
          to="/music"
          style={{
            display: "inline-block",
            padding: "1rem 2rem",
            border: "1px solid var(--color-gold)",
            color: "var(--color-gold)",
            fontFamily: "var(--font-heading)",
            fontSize: "0.85rem",
            letterSpacing: "0.1rem",
            textTransform: "uppercase",
            transition: "all 0.3s ease",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "var(--color-gold)";
            e.target.style.color = "#0a0f0a";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "transparent";
            e.target.style.color = "var(--color-gold)";
          }}
        >
          View All Music
        </Link>
      </div>

      <div style={{ marginTop: "4rem", textAlign: "center" }}>
        <p style={{ color: "var(--color-gray)", marginBottom: "1rem", fontSize: "0.9rem" }}>
          Listen on all major platforms:
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
          <a href="#" style={{ color: "var(--color-gold)", fontSize: "0.9rem", letterSpacing: "0.1rem" }}>
            Bandcamp
          </a>
          <a href="#" style={{ color: "var(--color-gold)", fontSize: "0.9rem", letterSpacing: "0.1rem" }}>
            SoundCloud
          </a>
          <a href="#" style={{ color: "var(--color-gold)", fontSize: "0.9rem", letterSpacing: "0.1rem" }}>
            Spotify
          </a>
        </div>
      </div>
    </section>
  );
}
