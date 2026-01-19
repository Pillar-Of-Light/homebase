import React from "react";
import GoldDivider from "../ui/gold-divider";

export default function Visuals() {
  const visualWorks = [
    {
      title: "GLITCH CATHEDRAL",
      year: "2026",
      medium: "Generative video / live performance",
      description: "Real-time visualization of audio frequencies collapsing into sacred geometry",
    },
    {
      title: "VOID STUDIES NO. 1-7",
      year: "2025",
      medium: "Digital stills",
      description: "Meditations on emptiness through corrupted image data",
    },
    {
      title: "TRANSMISSION SERIES",
      year: "2024-ongoing",
      medium: "Video installations",
      description: "Visual interpretations of cosmic signals and radio static",
    },
  ];

  return (
    <section id="visuals" style={{ paddingTop: "6rem" }}>
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
        VISUAL TRANSMISSIONS
      </h2>

      <GoldDivider />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginTop: "3rem" }}>
        {visualWorks.map((work, index) => (
          <div
            key={index}
            style={{
              border: "1px solid var(--color-gold-dim)",
              overflow: "hidden",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--color-gold)";
              e.currentTarget.style.boxShadow = "0 0 30px rgba(255, 215, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--color-gold-dim)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div
              style={{
                height: "200px",
                background: `linear-gradient(135deg, var(--color-stardust) 0%, var(--color-deep-space) 100%)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: "150px",
                  height: "150px",
                  border: "2px solid var(--color-gold)",
                  borderRadius: "50%",
                  opacity: 0.3,
                  animation: "rotate-slow 20s linear infinite",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  color: "var(--color-gold)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.15rem",
                  opacity: 0.5,
                }}
              >
                [VISUAL PLACEHOLDER]
              </span>
            </div>
            <div style={{ padding: "1.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                <h3
                  style={{
                    color: "var(--color-gold)",
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.1rem",
                    letterSpacing: "0.1rem",
                  }}
                >
                  {work.title}
                </h3>
                <span style={{ color: "var(--color-gray)", fontSize: "0.85rem" }}>{work.year}</span>
              </div>
              <p style={{ color: "var(--color-gray)", fontSize: "0.85rem", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.05rem" }}>
                {work.medium}
              </p>
              <p style={{ color: "var(--color-gray)", fontSize: "0.9rem", lineHeight: "1.6" }}>
                {work.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "4rem", textAlign: "center" }}>
        <p style={{ color: "var(--color-gray)", fontSize: "0.9rem", fontStyle: "italic" }}>
          Visual works available for exhibitions, installations, and performance integrations.
        </p>
      </div>
    </section>
  );
}
