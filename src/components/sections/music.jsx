import React from "react";
import GoldDivider from "../ui/gold-divider";

export default function Music() {
  const releases = [
    {
      title: "VOID GOSPELS VOL. 1",
      year: "2026",
      description: "Experimental ambient hymns from the outer reaches",
      link: "#",
    },
    {
      title: "COSMIC TRANSMISSIONS",
      year: "2025",
      description: "Drone-based meditations on existence",
      link: "#",
    },
    {
      title: "SACRED NOISE",
      year: "2024",
      description: "Harsh beauty in digital spaces",
      link: "#",
    },
  ];

  return (
    <section id="music" style={{ paddingTop: "6rem" }}>
      <h2
        style={{
          textAlign: "center",
          color: "var(--color-gold)",
          fontFamily: "var(--font-heading)",
          fontSize: "2.5rem",
          letterSpacing: "0.2rem",
          marginBottom: "3rem",
        }}
      >
        SONIC OFFERINGS
      </h2>

      <GoldDivider />

      <div style={{ display: "grid", gap: "2rem", marginTop: "3rem" }}>
        {releases.map((release, index) => (
          <div
            key={index}
            style={{
              padding: "2rem",
              border: "1px solid var(--color-gold-dim)",
              background: "rgba(255, 215, 0, 0.02)",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--color-gold)";
              e.currentTarget.style.boxShadow = "0 0 30px rgba(255, 215, 0, 0.2)";
              e.currentTarget.style.transform = "translateX(10px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--color-gold-dim)";
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

      <div style={{ marginTop: "4rem", textAlign: "center" }}>
        <p style={{ color: "var(--color-gray)", marginBottom: "1rem", fontSize: "0.9rem" }}>
          Find more transmissions on:
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
