import React from "react";

export default function GoldDivider() {
  return (
    <div
      style={{
        width: "100%",
        height: "2px",
        background: `linear-gradient(90deg, transparent 0%, var(--color-gold) 50%, transparent 100%)`,
        boxShadow: "0 0 10px var(--color-gold)",
        margin: "2rem 0",
      }}
    />
  );
}
