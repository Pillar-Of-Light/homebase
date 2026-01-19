import React from "react";
import GoldDivider from "../ui/gold-divider";
import SectionTitle from "../ui/section-title";
import GalleryItem from "../ui/gallery-item";

export default function Visuals() {
  const visualWorks = [
    {
      title: "GLITCH CATHEDRAL",
      year: "2026",
      medium: "Generative Video",
      description: "Real-time visualization of audio frequencies collapsing into sacred geometry"
    },
    {
      title: "VOID STUDIES NO. 1-7",
      year: "2025",
      medium: "Digital Stills",
      description: "Meditations on emptiness through corrupted image data"
    },
    {
      title: "TRANSMISSION SERIES",
      year: "2024",
      medium: "Video Installation",
      description: "Visual interpretations of cosmic signals and radio static"
    },
    {
      title: "FRACTAL HYMNS",
      year: "2024",
      medium: "Live Performance",
      description: "Algorithmic visuals synchronized with experimental gospel improvisation"
    },
    {
      title: "ANALOG DECAY",
      year: "2023",
      medium: "Mixed Media",
      description: "Exploring the beauty of degradation in tape and film"
    },
    {
      title: "FREQUENCY MANTRAS",
      year: "2023",
      medium: "Interactive Installation",
      description: "Participatory sound-reactive light sculpture"
    }
  ];

  return (
    <section className="visuals-section" id="visuals">
      <SectionTitle>VISUALS</SectionTitle>
      <GoldDivider />
      
      <p style={{
        textAlign: "center",
        color: "var(--text-secondary)",
        maxWidth: "700px",
        margin: "0 auto var(--space-xl)",
        lineHeight: "1.8"
      }}>
        Visual works exploring light, form, and frequency.
      </p>
      
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "var(--space-md)"
      }}>
        {visualWorks.map((work, index) => (
          <div key={index} className="glow-card">
            <div style={{
              height: "200px",
              background: `linear-gradient(${45 + index * 30}deg, var(--stardust) 0%, var(--nebula) 100%)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "var(--space-sm)",
              position: "relative",
              overflow: "hidden"
            }}>
              <div style={{
                width: "100px",
                height: "100px",
                border: "1px solid var(--gold)",
                transform: "rotate(45deg)",
                opacity: 0.3
              }} />
              <span style={{
                position: "absolute",
                color: "var(--gold)",
                fontSize: "0.7rem",
                opacity: 0.5,
                letterSpacing: "0.15em"
              }}>
                [{work.medium.toUpperCase()}]
              </span>
            </div>
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "var(--space-xs)" }}>
              <h3 style={{ color: "var(--gold)", fontSize: "1rem", letterSpacing: "0.05em" }}>
                {work.title}
              </h3>
              <span style={{ color: "var(--text-dim)", fontSize: "0.85rem" }}>{work.year}</span>
            </div>
            
            <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: "1.6" }}>
              {work.description}
            </p>
          </div>
        ))}
      </div>
      
      <div style={{ marginTop: "var(--space-xl)", textAlign: "center" }}>
        <p style={{ color: "var(--text-dim)", fontSize: "0.9rem", fontStyle: "italic" }}>
          Available for exhibitions, installations, and performance integrations.
        </p>
      </div>
    </section>
  );
}
