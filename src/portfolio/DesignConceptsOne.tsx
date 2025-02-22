import React from "react";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import RepeatX from "../components/RepeatX";

const images = [
  {
    src: "images/design-concepts-one/IMG_3584.webp",
    width: 500,
    height: 636,
    alt: "yellow shirt",
  },
  {
    src: "images/design-concepts-one/IMG_3856.webp",
    width: 500,
    height: 636,
    alt: "mann front",
  },
  {
    src: "images/design-concepts-one/IMG_3857.webp",
    width: 500,
    height: 636,
    alt: "mann back",
  },
  {
    src: "images/design-concepts-one/IMG_3858.webp",
    maxWidth: 300,
    width: 500,
    height: 636,
    alt: "mann side",
  },
  {
    src: "images/design-concepts-one/IMG_7779.webp",
    maxWidth: 500,
    width: 500,
    height: 636,
    alt: "design 1",
  },
  {
    src: "images/design-concepts-one/IMG_7780.webp",
    maxWidth: 500,
    width: 500,
    height: 636,
    alt: "design 2",
  },
  {
    src: "images/design-concepts-one/IMG_7781.webp",
    maxWidth: 500,
    width: 500,
    height: 636,
    alt: "design 3",
  },
  {
    src: "images/design-concepts-one/IMG_7837.webp",
    maxWidth: 500,
    width: 500,
    height: 636,
    alt: "design 4",
  },
  {
    src: "images/design-concepts-one/IMG_7838.webp",
    maxWidth: 500,
    width: 500,
    height: 636,
    alt: "poncho",
  },
  {
    src: "images/design-concepts-one/IMG_7839.webp",
    maxWidth: 500,
    width: 500,
    height: 636,
    alt: "poncho arm",
  },
];

export default function DesignConceptsOne() {
  return (
    <div className="flex flex-col bg-customBlue pb-8">
      <RepeatX color="text-black" />
      <div className="lips-blue mt-[-14px]">
        {/* <AnimatedTitle
          text="Design Concepts I"
          id="design-concepts-1"
          color="text-customRed"
        /> */}
      </div>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        className="p-4 lg:p-8"
      >
        <Masonry gutter="10px" columnsCount={2}>
          <p className="klara text-start justify-center text-lg lg:text-xl p-2 pb-4 text-customLightPink">
            A detailed exploration of{" "}
            <strong>
              scale and proportion through two and three-dimensional sketch
              problems
            </strong>{" "}
            varying in levels of complexity and duration. Emphasis is placed on
            setting up proper perspective and generating a line drawing as an
            underlay. Color marker techniques are stressed as well as color
            pencil. In addition, pen and ink techniques and pastel are explored.
          </p>
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
  );
}
