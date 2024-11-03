import React from "react";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import AnimatedTitle from "../components/AnimatedTitle";
import RepeatX from "../components/RepeatX";

const images = [
  {
    src: "images/drawing-one/horse.webp",
    width: 400,
    height: 636,
    alt: "yellow shirt",
  },
  {
    src: "images/drawing-one/man.webp",
    width: 400,
    height: 636,
    alt: "mann front",
  },
  {
    src: "images/drawing-one/woman.webp",
    width: 400,
    height: 636,
    alt: "mann back",
  },
  {
    src: "images/drawing-one/people1.webp",
    maxWidth: 500,
    width: 500,
    height: 636,
    alt: "mann side",
  },
  {
    src: "images/drawing-one/people2.webp",
    maxWidth: 500,
    width: 500,
    height: 636,
    alt: "design 1",
  },
  {
    src: "images/drawing-one/people3.webp",
    maxWidth: 500,
    width: 500,
    height: 636,
    alt: "design 2",
  },
  {
    src: "images/drawing-one/people4.webp",
    maxWidth: 500,
    width: 500,
    height: 636,
    alt: "design 3",
  },
  {
    src: "images/drawing-one/people5.webp",
    maxWidth: 500,
    width: 500,
    height: 636,
    alt: "design 4",
  },
  {
    src: "images/drawing-one/still1.webp",
    maxWidth: 500,
    width: 500,
    height: 636,
    alt: "poncho",
  },
  {
    src: "images/drawing-one/still2.webp",
    maxWidth: 500,
    width: 500,
    height: 636,
    alt: "poncho arm",
  },
  {
    src: "images/drawing-one/still3.webp",
    maxWidth: 500,
    width: 500,
    height: 400,
    alt: "man1",
  },
  {
    src: "images/drawing-one/still4.webp",
    maxWidth: 500,
    width: 500,
    height: 400,
    alt: "man2",
  },
];

export default function DrawingOne() {
  return (
    <div className="flex flex-col bg-customPink pb-8">
      <RepeatX color="text-customBlue" />
      <div className="hunds-pink">
        <AnimatedTitle text="Drawing I" id="drawing-1" color="text-customRed" />
      </div>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        className="p-4 lg:p-8"
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
