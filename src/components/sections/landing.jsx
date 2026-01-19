import React from "react";
import GlowText from "../ui/glow-text";

export default function Landing() {
  return (
    <section
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, var(--color-cosmic-purple) 0%, transparent 70%)",
          opacity: 0.3,
          animation: "pulse-glow 4s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />
      
      <GlowText size="4rem">ZONKLEBERG</GlowText>
      
      <p
        style={{
          fontSize: "1.5rem",
          color: "var(--color-gray)",
          marginTop: "1rem",
          marginBottom: "2rem",
          maxWidth: "600px",
          lineHeight: "1.8",
          fontFamily: "var(--font-heading)",
          letterSpacing: "0.1rem",
        }}
      >
        Expressing faith through experimental music and art.
        <br />A vessel for spiritual truth.
      </p>
      
      <div style={{ marginTop: "2rem" }}>
        <a
          href="#music"
          style={{
            display: "inline-block",
            padding: "1rem 2rem",
            border: "2px solid var(--color-gold)",
            borderRadius: "0",
            color: "var(--color-gold)",
            fontFamily: "var(--font-heading)",
            letterSpacing: "0.15rem",
            textTransform: "uppercase",
            fontSize: "0.9rem",
            transition: "all 0.3s ease",
            boxShadow: "0 0 20px transparent",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "var(--color-gold)";
            e.target.style.color = "var(--color-void)";
            e.target.style.boxShadow = "0 0 20px var(--color-gold)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "transparent";
            e.target.style.color = "var(--color-gold)";
            e.target.style.boxShadow = "0 0 20px transparent";
          }}
        >
          Explore Our Work
        </a>
      </div>
    </section>
  );
}
