import React, { useState } from "react";
import GoldDivider from "../ui/gold-divider";
import SectionTitle from "../ui/section-title";
import Input from "../ui/input";
import Textarea from "../ui/textarea";
import GoldButton from "../ui/gold-button";

export default function Communion() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message received:", formData);
    alert("Message received. Thank you.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="communion-section" id="communion">
      <SectionTitle>CONTACT</SectionTitle>
      <GoldDivider />
      
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <p style={{
          textAlign: "center",
          color: "var(--text-secondary)",
          marginBottom: "var(--space-xl)",
          fontSize: "1.1rem",
          lineHeight: "1.8",
          fontStyle: "italic"
        }}>
          Get in touch. All messages are read.
        </p>
        
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
          <div>
            <label htmlFor="name" style={{
              display: "block",
              color: "var(--gold)",
              marginBottom: "var(--space-xs)",
              fontSize: "0.9rem",
              letterSpacing: "0.05em",
              textTransform: "uppercase"
            }}>
              Name
            </label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" style={{
              display: "block",
              color: "var(--gold)",
              marginBottom: "var(--space-xs)",
              fontSize: "0.9rem",
              letterSpacing: "0.05em",
              textTransform: "uppercase"
            }}>
              Email
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
            />
          </div>
          
          <div>
            <label htmlFor="message" style={{
              display: "block",
              color: "var(--gold)",
              marginBottom: "var(--space-xs)",
              fontSize: "0.9rem",
              letterSpacing: "0.05em",
              textTransform: "uppercase"
            }}>
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your message..."
            />
          </div>
          
          <GoldButton type="submit" style={{ marginTop: "var(--space-md)" }}>
            SEND MESSAGE
          </GoldButton>
        </form>
        
        <div style={{ marginTop: "var(--space-xl)", textAlign: "center" }}>
          <p style={{ color: "var(--text-dim)", fontSize: "0.9rem", marginBottom: "var(--space-md)" }}>
            Find me elsewhere:
          </p>
          <div style={{ display: "flex", gap: "var(--space-md)", justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { name: "BANDCAMP", url: "#" },
              { name: "INSTAGRAM", url: "#" },
              { name: "SOUNDCLOUD", url: "#" },
              { name: "EMAIL", url: "mailto:contact@zonkleberg.void" }
            ].map(link => (
              <a key={link.name} href={link.url} style={{
                color: "var(--gold)",
                fontSize: "0.85rem",
                textDecoration: "none",
                letterSpacing: "0.05em"
              }}>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
