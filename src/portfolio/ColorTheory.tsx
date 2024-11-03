import React from "react";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import AnimatedTitle from "../components/AnimatedTitle";
import RepeatX from "../components/RepeatX";

const images = [
  {
    src: "images/color-theory/walter.webp",
    width: 800,
    height: 636,
    alt: "Walter White",
  },
  {
    src: "images/color-theory/paint.webp",
    width: 400,
    height: 522,
    alt: "Paint smears",
  },
  {
    src: "images/color-theory/denmark.webp",
    width: 800,
    height: 612,
    alt: "Copenhagen",
  },
  {
    src: "images/color-theory/nike.webp",
    maxWidth: 300,
    width: 400,
    height: 544,
    alt: "Nike sneaker",
  },
  {
    src: "images/color-theory/pig.webp",
    maxWidth: 500,
    width: 400,
    height: 537,
    alt: "Pig",
  },
];

export default function ColorTheory() {
  return (
    <div className="flex flex-col bg-customPink pb-8">
      <RepeatX color="text-customBlue" />
      <div className="stripe-pink mt-[-14px]">
        <AnimatedTitle text="Color Theory" id="color" color="text-customRed" />
      </div>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        className="p-4 lg:p-8"
      >
        <Masonry gutter="10px" columnsCount={2}>
          <p className="klara text-start justify-center text-lg lg:text-xl p-2 pb-4 text-black">
            A course that teaches students how{" "}
            <strong>color affects the human mind, body, eye, and spirit</strong>
            . Students use a variety of art mediums to create artwork that
            demonstrates their understanding of color theory and how to apply it
            in the visual arts.
          </p>
          {images.map((img) => (
            <img
              key={img.alt}
              src={img.src}
              alt={img.alt}
              className="z-50 rounded-md"
              width={img.width}
              height={img.height}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}
