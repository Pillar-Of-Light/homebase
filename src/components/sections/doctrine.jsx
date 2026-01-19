import React from "react";
import GoldDivider from "../ui/gold-divider";

export default function Doctrine() {
  const principles = [
    {
      title: "I. FAITH IN EXPRESSION",
      text: "Through music and art, we express what words alone cannot. Faith becomes visible, audible, tangible.",
    },
    {
      title: "II. BEAUTY IN BROKENNESS",
      text: "God meets us in our imperfection. In broken places, we find grace and redemption.",
    },
    {
      title: "III. COMMUNION WITH TRUTH",
      text: "In shared experience, we connect with the divine and with one another.",
    },
    {
      title: "IV. EXPERIMENTAL DEVOTION",
      text: "Question, explore, deconstruct. Through inquiry, we deepen our understanding of faith.",
    },
  ];

  return (
    <section id="doctrine" style={{ paddingTop: "6rem" }}>
      <h2
        style={{
          textAlign: "center",
          color: "#22c55e",
          fontFamily: "var(--font-heading)",
          fontSize: "2.5rem",
          letterSpacing: "0.2rem",
          marginBottom: "3rem",
        }}
      >
        BELIEFS
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
                borderLeft: "2px solid var(--color-green-dark)",
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
          border: "1px solid var(--color-green-dark)",
          background: "rgba(34, 197, 94, 0.02)",
        }}
      >
        <p style={{ color: "var(--color-gray)", fontSize: "0.95rem", lineHeight: "1.8", fontStyle: "italic" }}>
          "The artistic is not separate from the spiritual—it is a pathway to it. <br />
          A willingness to listen, to witness, to encounter the sacred in unexpected places."
        </p>
        <p style={{ color: "var(--color-gold)", marginTop: "1rem", fontSize: "0.85rem", letterSpacing: "0.1rem" }}>
          — zonkleberg Statement of Faith, 2024
        </p>
      </div>
    </section>
  );
}
