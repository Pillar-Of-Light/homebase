import React from "react";
import GoldDivider from "../components/ui/gold-divider";
import { Link } from "react-router-dom";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

export default function MoreVisuals() {
    const visualWorks = [
        {
        title: "LIGHT IN DARKNESS",
        year: "2026",
        medium: "Generative video / live performance",
        description: "Visual exploration of spiritual awakening and illumination",
        },
        {
        title: "PRESENCE STUDIES",
        year: "2025",
        medium: "Digital installations",
        description: "Meditations on encountering the sacred in ordinary moments",
        },
        {
        title: "REDEMPTION SERIES",
        year: "2024-ongoing",
        medium: "Multimedia installations",
        description: "Visual narratives of transformation and spiritual renewal",
        },
    ];

    return (
        <div className="App">
            <Header />
            <main>
                <section id="more-visuals" style={{ paddingTop: "6rem" }}>
                    <Link to="/" style={{ color: "var(--color-gold)", fontSize: "0.9rem" }}>
                        &larr; Back to Home
                    </Link>
                    <h2 style={{
                        textAlign: "center",
                        color: "#22c55e",
                        fontFamily: "var(--font--heading)",
                        fontSize: "2.5rem",
                        letterSpacing: "0.2rem",
                        marginTop: "2rem",
                        marginBottom: "3rem",
                    }}>
                        VISUAL EXPRESSIONS
                    </h2>

                    <GoldDivider />

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginTop: "3rem" }}>
                        {visualWorks.map((work, index) => (
                        <div
                            key={index}
                            style={{
                            border: "1px solid var(--color-green-dark)",
                            overflow: "hidden",
                            transition: "all 0.3s ease",
                            cursor: "pointer",
                            }}
                            onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = "var(--color-green-primary)";
                            e.currentTarget.style.boxShadow = "0 0 30px rgba(34, 197, 94, 0.2)";
                            }}
                            onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "var(--color-green-dark)";
                            e.currentTarget.style.boxShadow = "none";
                            }}
                        >
                            <div style={{ padding: "1.5rem" }}>
                            <h3 style={{ color: "#22c55e", marginBottom: "0.5rem" }}>{work.title}</h3>
                            <div style={{ color: "var(--color-gray)", fontSize: "0.85rem", marginBottom: "1rem" }}>
                                {work.year} &mdash; {work.medium}
                            </div>
                            <p style={{ color: "var(--color-gray)", lineHeight: "1.6" }}>
                                {work.description}
                            </p>
                            </div>
                        </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}