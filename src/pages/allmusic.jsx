import React from "react";
import GoldDivider from "../components/ui/gold-divider";
import { Link } from "react-router-dom";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

export default function AllMusic() {
    const releases = [
        {
            title: "AVALANCHES",
            year: "2026",
            description: "A reflection on overwhelming forces and spiritual journeys",
            link: "#",
            tracks: 1,
            duration: "3:00",
        },
        {
            title: "HYMNS FOR OUR TIME",
            year: "2026",
            description: "Contemporary songs exploring faith, doubt, and spiritual seeking",
            link: "#",
            tracks: 8,
            duration: "32:45",
        },
        {
            title: "GRACE IN THE MARGINS",
            year: "2025",
            description: "Experimental audio meditations on divine presence",
            link: "#",
            tracks: 5,
            duration: "20:15",
        },
        {
            title: "SOUND OF REDEMPTION",
            year: "2024",
            description: "Instrumental works reflecting transformation and renewal",
            link: "#",
            tracks: 7,
            duration: "28:30",
        },
    ];

    return (
        <div className="App">
            <Header />
            <main>
                <section id="all-music" style={{ paddingTop: "6rem" }}>
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
                        ALL MUSIC
                    </h2>

                    <GoldDivider />

                    {/* Display all your music with full details */}
                    <div style={{ display: "grid", gap: "2rem", marginTop: "3rem" }}>
                      {releases.map((release, index) => (
                        <div key={index}>
                          {/* Your expanded music card */}
                        </div>
                      ))}
                    </div>
                  </section>
                </main>
                <Footer />
              </div>
            );
}