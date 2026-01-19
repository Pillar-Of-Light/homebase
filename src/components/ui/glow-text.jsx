import React from "react";

export default function GlowText({ children, size = "1rem" }) {
  return (
    <span
      className="glow-text"
      style={{
        fontSize: size,
      }}
    >
      {children}
    </span>
  );
}