import React from "react";
import GoldDivider from "../ui/gold-divider";

export default function Footer() {
  return (
    <footer className="footer">
      <GoldDivider />
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} zonkleberg — gospel in music and faith</p>
      </div>
    </footer>
  );
}