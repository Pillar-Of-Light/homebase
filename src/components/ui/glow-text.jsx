import React from "react";

export default function GlowText({ children, size = "2rem" }) {
  return (
    <h1 style={{
      fontSize: size,
      color: "var(--accent)",
      fontWeight: "700",
      margin: 0
    }}>
      {children}
    </h1>
  );
}