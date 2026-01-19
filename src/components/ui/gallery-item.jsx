import React from "react";

export default function GalleryItem({ src, alt, title }) {
  return (
    <div className="gallery-item">
      <img src={src} alt={alt} />
      {title && <p>{title}</p>}
    </div>
  );
}
