import React from "react";
import GoldDivider from "../ui/gold-divider";
import SectionTitle from "../ui/section-title";
import CosmicContainer from "../ui/cosmic-container";

export default function Writings() {
  const writings = [
    {
      title: "On Silence as Sound",
      date: "January 2026",
      excerpt: "The spaces between notes are not empty. Exploring silence in an anechoic chamber...",
      readTime: "5 min"
    },
    {
      title: "Embracing Imperfection",
      date: "December 2025",
      excerpt: "Finding beauty in mistakes and unexpected sounds. Life exists in the harmonics...",
      readTime: "8 min"
    },
    {
      title: "Field Recording Notes",
      date: "November 2025",
      excerpt: "Three days recording in various spaces. Discovering hidden frequencies...",
      readTime: "12 min"
    },
    {
      title: "Sound and Intention",
      date: "October 2025",
      excerpt: "What makes music meaningful? Thoughts on intention and listening...",
      readTime: "6 min"
    }
  ];

  return (
    <section className="writings-section" id="writings">
      <SectionTitle>WRITINGS</SectionTitle>
      <GoldDivider />
      
      <p style={{
        textAlign: "center",
        color: "var(--text-secondary)",
        maxWidth: "700px",
        margin: "0 auto var(--space-xl)",
        lineHeight: "1.8"
      }}>
        Essays and reflections on experimental sound.
      </p>
      
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {writings.map((writing, index) => (
          <CosmicContainer key={index} style={{ marginBottom: "var(--space-lg)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "var(--space-sm)" }}>
              <h3 style={{
                color: "var(--gold)",
                fontSize: "1.4rem",
                letterSpacing: "0.05em"
              }}>
                {writing.title}
              </h3>
              <div style={{ textAlign: "right" }}>
                <div style={{ color: "var(--text-dim)", fontSize: "0.85rem" }}>{writing.date}</div>
                <div style={{ color: "var(--text-dim)", fontSize: "0.75rem" }}>{writing.readTime} read</div>
              </div>
            </div>
            
            <p style={{
              color: "var(--text-secondary)",
              lineHeight: "1.8",
              marginBottom: "var(--space-md)"
            }}>
              {writing.excerpt}
            </p>
            
            <a href="#" style={{
              color: "var(--gold)",
              fontSize: "0.9rem",
              textDecoration: "none",
              letterSpacing: "0.05em"
            }}>
              READ MORE →
            </a>
          </CosmicContainer>
        ))}
      </div>
      
      <div style={{ marginTop: "var(--space-xl)", textAlign: "center" }}>
        <button className="gold-button">
          VIEW ALL WRITINGS
        </button>
      </div>
    </section>
  );
}
