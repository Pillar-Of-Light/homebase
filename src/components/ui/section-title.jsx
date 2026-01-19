import React from "react";

export default function SectionTitle({ children }) {
  return (
    <h2 style={{
      fontSize: "2rem",
      fontWeight: "700",
      color: "var(--text-primary)",
      textAlign: "center",
      marginBottom: "var(--space-sm)"
    }}>
      {children}
    </h2>
  );
}
