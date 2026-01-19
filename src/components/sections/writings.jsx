import React from "react";
import GoldDivider from "../ui/gold-divider";

export default function Writings() {
  const writings = [
    {
      title: "On Silence as Sound",
      date: "Jan 2026",
      excerpt: "The spaces between notes are not empty. They are pregnant with possibility, heavy with the weight of what could have been and what might still be...",
      readTime: "5 min",
    },
    {
      title: "Manifesto for the Broken Frequency",
      date: "Dec 2025",
      excerpt: "We reject the pristine. We embrace the glitch, the error, the unexpected rupture in the signal. Here, in the broken places, we find divinity...",
      readTime: "8 min",
    },
    {
      title: "Field Notes: Recording the Void",
      date: "Nov 2025",
      excerpt: "Spent three days in an anechoic chamber. The silence was deafening. You hear your own blood, your nervous system, the electricity of thought itself...",
      readTime: "12 min",
    },
  ];

  return (
    <section id="writings" style={{ paddingTop: "6rem" }}>
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
        WRITTEN TRANSMISSIONS
      </h2>

      <GoldDivider />

      <div style={{ maxWidth: "800px", margin: "3rem auto" }}>
        {writings.map((writing, index) => (
          <article
            key={index}
            style={{
              marginBottom: "3rem",
              padding: "2rem",
              border: "1px solid var(--color-gold-dim)",
              background: "rgba(255, 215, 0, 0.02)",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--color-gold)";
              e.currentTarget.style.background = "rgba(255, 215, 0, 0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--color-gold-dim)";
              e.currentTarget.style.background = "rgba(255, 215, 0, 0.02)";
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "1rem" }}>
              <h3
                style={{
                  color: "var(--color-gold)",
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.3rem",
                  letterSpacing: "0.1rem",
                }}
              >
                {writing.title}
              </h3>
              <div style={{ textAlign: "right" }}>
                <div style={{ color: "var(--color-gray)", fontSize: "0.85rem" }}>{writing.date}</div>
                <div style={{ color: "var(--color-gray)", fontSize: "0.75rem" }}>{writing.readTime}</div>
              </div>
            </div>
            <p style={{ color: "var(--color-gray)", lineHeight: "1.8", marginBottom: "1rem" }}>
              {writing.excerpt}
            </p>
            <a
              href="#"
              style={{
                color: "var(--color-gold)",
                fontFamily: "var(--font-heading)",
                fontSize: "0.85rem",
                letterSpacing: "0.1rem",
                textTransform: "uppercase",
              }}
            >
              Read More →
            </a>
          </article>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <a
          href="#"
          style={{
            display: "inline-block",
            padding: "1rem 2rem",
            border: "1px solid var(--color-gold)",
            color: "var(--color-gold)",
            fontFamily: "var(--font-heading)",
            fontSize: "0.85rem",
            letterSpacing: "0.1rem",
            textTransform: "uppercase",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "var(--color-gold)";
            e.target.style.color = "var(--color-void)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "transparent";
            e.target.style.color = "var(--color-gold)";
          }}
        >
          View All Writings
        </a>
      </div>
    </section>
  );
}
