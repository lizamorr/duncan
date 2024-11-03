import React from "react";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import AnimatedTitle from "../components/AnimatedTitle";

const images = [
  {
    src: "images/two-d-for-designers/abstract.webp",
    width: 400,
    height: 636,
    alt: "abstract design",
  },
  {
    src: "images/two-d-for-designers/nike.webp",
    width: 400,
    height: 636,
    alt: "nike sneakers design",
  },
  {
    src: "images/two-d-for-designers/lion.webp",
    width: 400,
    height: 636,
    alt: "lion flag design",
  },
];

export default function TwoDForDesigners() {
  return (
    <>
      <div className="flex flex-col bg-customBlue">
        <div className="stars-blue">
          <AnimatedTitle
            text="2D For Designers"
            id="2d-for-designers"
            color="text-customPink"
          />
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
                className="z-50 m-auto rounded-md"
                width={img.width}
                height="auto"
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
}
