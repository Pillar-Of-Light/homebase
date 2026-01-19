import React from "react";
import GoldDivider from "../ui/gold-divider";

export default function Doctrine() {
  const principles = [
    {
      title: "I. THE VOID SPEAKS",
      text: "In silence, find the noise. In noise, find the truth.",
    },
    {
      title: "II. SACRED DISTORTION",
      text: "Beauty emerges from broken frequencies and fractured harmonies.",
    },
    {
      title: "III. COSMIC COMMUNION",
      text: "We are receivers and transmitters, channels for the universal signal.",
    },
    {
      title: "IV. EXPERIMENTAL FAITH",
      text: "Question every note. Deconstruct every rhythm. Rebuild from chaos.",
    },
  ];

  return (
    <section id="doctrine" style={{ paddingTop: "6rem" }}>
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
        THE DOCTRINE
      </h2>

      <GoldDivider />

      <div style={{ maxWidth: "800px", margin: "3rem auto" }}>
        {principles.map((principle, index) => (
          <div key={index} style={{ marginBottom: "3rem" }}>
            <h3
              style={{
                color: "var(--color-gold)",
                fontFamily: "var(--font-heading)",
                fontSize: "1.2rem",
                letterSpacing: "0.12rem",
                marginBottom: "1rem",
              }}
            >
              {principle.title}
            </h3>
            <p
              style={{
                color: "var(--color-light)",
                fontSize: "1.1rem",
                lineHeight: "1.8",
                fontStyle: "italic",
                paddingLeft: "2rem",
                borderLeft: "2px solid var(--color-gold-dim)",
              }}
            >
              {principle.text}
            </p>
          </div>
        ))}
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "4rem",
          padding: "2rem",
          border: "1px solid var(--color-gold-dim)",
          background: "rgba(255, 215, 0, 0.02)",
        }}
      >
        <p style={{ color: "var(--color-gray)", fontSize: "0.95rem", lineHeight: "1.8", fontStyle: "italic" }}>
          "The experimental is not a genre—it is a posture. <br />
          A willingness to fail, to fragment, to find the divine in the dissonant."
        </p>
        <p style={{ color: "var(--color-gold)", marginTop: "1rem", fontSize: "0.85rem", letterSpacing: "0.1rem" }}>
          — zonkleberg manifesto, 2024
        </p>
      </div>
    </section>
  );
}
