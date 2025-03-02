import React from "react";

import Menu from "../components/Menu";

const images = [
  {
    src: "images/chevy/title.webp",
    maxWidth: 500,
    width: 500,
    height: 636,
    alt: "pants front",
  },
  {
    src: "images/chevy/clientele.webp",
    maxWidth: 500,
    width: 500,
    height: 636,
    alt: "pants back",
  },
  {
    src: "images/chevy/ad1.webp",
    maxWidth: 500,
    width: 500,
    height: 636,
    alt: "pants front",
  },
  {
    src: "images/chevy/ad2.webp",
    maxWidth: 500,
    width: 500,
    height: 636,
    alt: "pants back",
  },
  {
    src: "images/chevy/b.webp",
    maxWidth: 500,
    width: 500,
    height: 636,
    alt: "sweater front",
  },
  {
    src: "images/chevy/bench.webp",
    maxWidth: 500,
    width: 500,
    height: 636,
    alt: "sweater back",
  },
  {
    src: "images/chevy/ext.webp",
    maxWidth: 500,
    width: 500,
    height: 636,
    alt: "sweater front",
  },
  {
    src: "images/chevy/interior.webp",
    maxWidth: 500,
    width: 500,
    height: 636,
    alt: "sweater back",
  },
];

export default function Chevy() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 p-2 lg:p-4 w-full max-w-full gap-4">
      {images.map((img, index) => (
        <img
          key={index}
          src={img.src}
          alt={img.alt}
          className="rounded-lg w-full h-auto"
          height={img.height}
        />
      ))}
      <Menu />
    </div>
  );
}
