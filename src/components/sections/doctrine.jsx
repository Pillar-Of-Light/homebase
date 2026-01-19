import React from "react";
import GoldDivider from "../ui/gold-divider";
import SectionTitle from "../ui/section-title";
import DropCap from "../ui/dropcap";

export default function Doctrine() {
  const principles = [
    {
      title: "I. EMBRACE SILENCE",
      text: "In silence, find meaning. In noise, find truth."
    },
    {
      title: "II. IMPERFECTION",
      text: "Beauty emerges from mistakes. Authenticity lives in the unexpected."
    },
    {
      title: "III. CONNECTION",
      text: "Sound creates connection. Every note is communication."
    },
    {
      title: "IV. EXPLORATION",
      text: "Question everything. Deconstruct. Rebuild."
    }
  ];

  return (
    <section className="doctrine-section" id="doctrine">
      <SectionTitle>PHILOSOPHY</SectionTitle>
      <GoldDivider />
      
      <div style={{ maxWidth: "900px", margin: "0 auto", marginTop: "var(--space-xl)" }}>
        <p style={{ 
          color: "var(--text-secondary)", 
          fontSize: "1.1rem", 
          lineHeight: "1.8",
          marginBottom: "var(--space-xl)",
          fontStyle: "italic",
          textAlign: "center"
        }}>
          Core principles.
        </p>
        
        {principles.map((principle, index) => (
          <div key={index} style={{ marginBottom: "var(--space-lg)" }}>
            <h3 style={{
              color: "var(--gold)",
              fontSize: "1.3rem",
              marginBottom: "var(--space-sm)",
              letterSpacing: "0.1em"
            }}>
              {principle.title}
            </h3>
            <p style={{
              color: "var(--text-primary)",
              lineHeight: "1.8",
              paddingLeft: "var(--space-md)",
              borderLeft: "2px solid var(--gold-dark)"
            }}>
              {principle.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
