import React from "react";
import GlowText from "../ui/glow-text";

export default function Header() {
  return (
    <header
      style={{
        padding: "2rem",
        textAlign: "center",
        borderBottom: "1px solid var(--color-gold-dim)",
      }}
    >
      <GlowText size="2.5rem">zonkleberg</GlowText>
      <p style={{ color: "var(--color-gray)", fontSize: "0.9rem", marginTop: "0.5rem", letterSpacing: "0.15rem" }}>
        GOSPEL IN MUSIC
      </p>
      
      <nav style={{ marginTop: "2rem", display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
        <a href="#music" style={{ color: "#22c55e", fontSize: "0.85rem", letterSpacing: "0.1rem", textTransform: "uppercase" }}>
          Music
        </a>
        <a href="#visuals" style={{ color: "#22c55e", fontSize: "0.85rem", letterSpacing: "0.1rem", textTransform: "uppercase" }}>
          Visuals
        </a>
        <a href="#writings" style={{ color: "#22c55e", fontSize: "0.85rem", letterSpacing: "0.1rem", textTransform: "uppercase" }}>
          Writings
        </a>
        <a href="#communion" style={{ color: "#22c55e", fontSize: "0.85rem", letterSpacing: "0.1rem", textTransform: "uppercase" }}>
          Communion
        </a>
      </nav>
    </header>
  );
}
