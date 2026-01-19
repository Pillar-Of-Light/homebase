import React from "react";
import GoldDivider from "../ui/gold-divider";

export default function Writings() {
  const writings = [
    {
      title: "The Sacred in Silence",
      date: "Jan 2026",
      excerpt: "Exploring how silence becomes a language of its own. The spaces between words carry weight—the presence of God in the absence of noise...",
      readTime: "5 min",
    },
    {
      title: "Art as Witness",
      date: "Dec 2025",
      excerpt: "We create not to escape reality, but to bear witness to it. Through art, we testify to what we've seen, experienced, and learned...",
      readTime: "8 min",
    },
    {
      title: "Finding God in Broken Things",
      date: "Nov 2025",
      excerpt: "Brokenness is not failure. It is often where grace enters. A reflection on restoration, redemption, and the beauty found in repair...",
      readTime: "12 min",
    },
  ];

  return (
    <section id="writings" style={{ paddingTop: "6rem" }}>
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
        REFLECTIONS & WRITINGS
      </h2>

      <GoldDivider />

      <div style={{ maxWidth: "800px", margin: "3rem auto" }}>
        {writings.map((writing, index) => (
          <article
            key={index}
            style={{
              marginBottom: "3rem",
              padding: "2rem",
              border: "1px solid var(--color-green-dark)",
              background: "rgba(34, 197, 94, 0.02)",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--color-green-primary)";
              e.currentTarget.style.background = "rgba(34, 197, 94, 0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--color-green-dark)";
              e.currentTarget.style.background = "rgba(34, 197, 94, 0.02)";
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "1rem" }}>
              <h3
                style={{
                  color: "var(--color-green-primary)",
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
