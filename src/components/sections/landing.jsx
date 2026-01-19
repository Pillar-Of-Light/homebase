import React from "react";
import GlowText from "../ui/glow-text";
import GoldButton from "../ui/gold-button";

export default function Landing() {
  return (
    <section className="landing-section">
      <div>
        <GlowText size="3.5rem">zonkleberg</GlowText>
        <p style={{
          fontSize: "1.25rem",
          color: "var(--text-secondary)",
          marginTop: "var(--space-md)",
          marginBottom: "var(--space-lg)",
          maxWidth: "600px",
          lineHeight: "1.6"
        }}>
          Experimental music and sound art
        </p>
        
        <div style={{ marginTop: "var(--space-xl)", display: "flex", gap: "var(--space-md)", justifyContent: "center", flexWrap: "wrap" }}>
          <GoldButton onClick={() => document.getElementById('music')?.scrollIntoView({ behavior: 'smooth' })}>
            Listen
          </GoldButton>
          <GoldButton onClick={() => document.getElementById('communion')?.scrollIntoView({ behavior: 'smooth' })}>
            Contact
          </GoldButton>
        </div>
      </div>
    </section>
  );
}
