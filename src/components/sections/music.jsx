import React from "react";
import GoldDivider from "../ui/gold-divider";
import SectionTitle from "../ui/section-title";
import GlowCard from "../ui/glow-card";

export default function Music() {
  const releases = [
    {
      title: "VOID GOSPELS VOL. 1",
      year: "2026",
      description: "Ambient and drone pieces exploring texture and space.",
      tracks: 7,
      duration: "47:23"
    },
    {
      title: "COSMIC TRANSMISSIONS",
      year: "2025",
      description: "Field recordings processed through analog effects.",
      tracks: 5,
      duration: "62:18"
    },
    {
      title: "SACRED NOISE",
      year: "2024",
      description: "Exploring loudness and feedback.",
      tracks: 9,
      duration: "38:45"
    }
  ];

  return (
    <section className="music-section" id="music">
      <SectionTitle>RELEASES</SectionTitle>
      <GoldDivider />
      
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "var(--space-md)",
        marginTop: "var(--space-xl)"
      }}>
        {releases.map((release, index) => (
          <GlowCard key={index}>
            <div style={{
              background: "linear-gradient(135deg, var(--stardust) 0%, var(--nebula) 100%)",
              height: "200px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "var(--space-md)",
              position: "relative"
            }}>
              <div style={{
                width: "120px",
                height: "120px",
                border: "2px solid var(--gold)",
                borderRadius: "50%",
                opacity: 0.4,
                animation: "rotate-slow 30s linear infinite"
              }} />
            </div>
            
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "var(--space-sm)" }}>
              <h3 style={{ color: "var(--gold)", fontSize: "1.2rem" }}>
                {release.title}
              </h3>
              <span style={{ color: "var(--text-dim)" }}>{release.year}</span>
            </div>
            
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: "1.6", marginBottom: "var(--space-sm)" }}>
              {release.description}
            </p>
            
            <div style={{ display: "flex", gap: "var(--space-md)", fontSize: "0.85rem", color: "var(--text-dim)" }}>
              <span>{release.tracks} tracks</span>
              <span>{release.duration}</span>
            </div>
            
            <div style={{ marginTop: "var(--space-md)", display: "flex", gap: "var(--space-sm)" }}>
              <a href="#" style={{ color: "var(--gold)", fontSize: "0.85rem", textDecoration: "none" }}>LISTEN →</a>
              <a href="#" style={{ color: "var(--gold)", fontSize: "0.85rem", textDecoration: "none" }}>BUY →</a>
            </div>
          </GlowCard>
        ))}
      </div>
      
      <div style={{ marginTop: "var(--space-xl)", textAlign: "center" }}>
        <p style={{ color: "var(--text-secondary)", marginBottom: "var(--space-md)" }}>
          AVAILABLE ON:
        </p>
        <div style={{ display: "flex", gap: "var(--space-md)", justifyContent: "center", flexWrap: "wrap" }}>
          {["BANDCAMP", "SOUNDCLOUD", "SPOTIFY", "APPLE MUSIC"].map(platform => (
            <a key={platform} href="#" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "0.9rem" }}>
              {platform}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
