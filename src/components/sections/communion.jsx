import React, { useState } from "react";
import GoldDivider from "../ui/gold-divider";

export default function Communion() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for reaching out. We received your message and will respond soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="communion" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
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
        COMMUNION
      </h2>

      <GoldDivider />

      <div style={{ maxWidth: "600px", margin: "3rem auto" }}>
        <p
          style={{
            textAlign: "center",
            color: "var(--color-gray)",
            marginBottom: "3rem",
            fontSize: "1rem",
            lineHeight: "1.8",
            fontStyle: "italic",
          }}
        >
          We invite you to connect, share, and be part of our community.
          <br />
          Your voice and story matter.
        </p>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div>
            <label
              htmlFor="name"
              style={{
                display: "block",
                color: "#22c55e",
                fontFamily: "var(--font-heading)",
                fontSize: "0.85rem",
                letterSpacing: "0.1rem",
                marginBottom: "0.5rem",
                textTransform: "uppercase",
              }}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "0.75rem",
                background: "transparent",
                border: "1px solid #16a34a",
                color: "var(--color-light)",
                fontFamily: "var(--font-heading)",
                fontSize: "0.9rem",
                transition: "all 0.3s ease",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#22c55e";
                e.target.style.boxShadow = "0 0 20px rgba(34, 197, 94, 0.3)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#16a34a";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              style={{
                display: "block",
                color: "#22c55e",
                fontFamily: "var(--font-heading)",
                fontSize: "0.85rem",
                letterSpacing: "0.1rem",
                marginBottom: "0.5rem",
                textTransform: "uppercase",
              }}
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "0.75rem",
                background: "transparent",
                border: "1px solid #16a34a",
                color: "var(--color-light)",
                fontFamily: "var(--font-heading)",
                fontSize: "0.9rem",
                transition: "all 0.3s ease",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#22c55e";
                e.target.style.boxShadow = "0 0 20px rgba(34, 197, 94, 0.3)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#16a34a";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              style={{
                display: "block",
                color: "#22c55e",
                fontFamily: "var(--font-heading)",
                fontSize: "0.85rem",
                letterSpacing: "0.1rem",
                marginBottom: "0.5rem",
                textTransform: "uppercase",
              }}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              style={{
                width: "100%",
                padding: "0.75rem",
                background: "transparent",
                border: "1px solid #16a34a",
                color: "var(--color-light)",
                fontFamily: "var(--font-heading)",
                fontSize: "0.9rem",
                resize: "vertical",
                transition: "all 0.3s ease",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#22c55e";
                e.target.style.boxShadow = "0 0 20px rgba(34, 197, 94, 0.3)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#16a34a";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              padding: "1rem 2rem",
              background: "transparent",
              border: "2px solid #22c55e",
              color: "#22c55e",
              fontFamily: "var(--font-heading)",
              fontSize: "0.9rem",
              letterSpacing: "0.15rem",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "all 0.3s ease",
              marginTop: "1rem",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "#22c55e";
              e.target.style.color = "var(--color-void)";
              e.target.style.boxShadow = "0 0 30px rgba(34, 197, 94, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
              e.target.style.color = "#22c55e";
              e.target.style.boxShadow = "none";
            }}
          >
            Send Message
          </button>
        </form>

        <div style={{ marginTop: "4rem", textAlign: "center" }}>
          <p style={{ color: "var(--color-gray)", fontSize: "0.85rem", marginBottom: "1rem" }}>
            Connect with us:
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
            <a href="#" style={{ color: "#22c55e", fontSize: "0.85rem", letterSpacing: "0.1rem" }}>
              Instagram
            </a>
            <a href="#" style={{ color: "#22c55e", fontSize: "0.85rem", letterSpacing: "0.1rem" }}>
              Twitter
            </a>
            <a href="#" style={{ color: "#22c55e", fontSize: "0.85rem", letterSpacing: "0.1rem" }}>
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
