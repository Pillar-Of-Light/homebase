import React from "react";

export default function GoldButton({ children, onClick }) {
  return (
    <button className="gold-button" onClick={onClick}>
      {children}
    </button>
  );
}
