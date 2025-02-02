import React from "react";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import AnimatedTitle from "../components/AnimatedTitle";
import RepeatX from "../components/RepeatX";

const images = [
  {
    src: "images/fashion-construction/pants-1.webp",
    maxWidth: 500,
    width: 500,
    height: 636,
    alt: "pants front",
  },
  {
    src: "images/fashion-construction/pants-2.webp",
    maxWidth: 500,
    width: 500,
    height: 636,
    alt: "pants back",
  },
  {
    src: "images/fashion-construction/pants2-1.webp",
    maxWidth: 500,
    width: 500,
    height: 636,
    alt: "pants front",
  },
  {
    src: "images/fashion-construction/pants2-2.webp",
    maxWidth: 500,
    width: 500,
    height: 636,
    alt: "pants back",
  },
  {
    src: "images/fashion-construction/sweater-1.webp",
    maxWidth: 500,
    width: 500,
    height: 636,
    alt: "sweater front",
  },
  {
    src: "images/fashion-construction/sweater-2.webp",
    maxWidth: 500,
    width: 500,
    height: 636,
    alt: "sweater back",
  },
  {
    src: "images/fashion-construction/sweater2-1.webp",
    maxWidth: 500,
    width: 500,
    height: 636,
    alt: "sweater front",
  },
  {
    src: "images/fashion-construction/sweater2-2.webp",
    maxWidth: 500,
    width: 500,
    height: 636,
    alt: "sweater back",
  },
];

export default function FashionConstructionOne() {
  return (
    <div className="flex flex-col bg-customPink pb-8">
      <RepeatX color="text-customBlue" />
      <div className="hunds-pink mt-[-14px]">
        <AnimatedTitle
          text="Fashion Construction"
          id="fashion-construction"
          color="text-customRed"
        />
      </div>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2 }}
        className="p-4 lg:p-24"
      >
        <Masonry gutter="10px" columnsCount={2}>
          {images.map((img) => (
            <img
              key={img.alt}
              src={img.src}
              alt={img.alt}
              className="z-50 rounded-md m-auto"
              width={img.width}
              height="auto"
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}
