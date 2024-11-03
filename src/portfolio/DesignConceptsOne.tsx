import React from "react";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import AnimatedTitle from "../components/AnimatedTitle";

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
  {
    src: "images/design-concepts-one/IMG_7840.webp",
    maxWidth: 500,
    width: 300,
    height: 400,
    alt: "man1",
  },
  {
    src: "images/design-concepts-one/IMG_7841.webp",
    maxWidth: 500,
    width: 300,
    height: 400,
    alt: "man2",
  },
];

export default function DesignConceptsOne() {
  return (
    <>
      {/* <div className="wave-blue w-full h-12"></div> */}
      <div className="py-4 flex flex-col bg-customBlue">
        <div className="flex flex-row space-x-2">
          <AnimatedTitle
            text="Design Concepts I"
            id="design-concepts-1"
            color="text-customRed"
          />
        </div>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          className="p-2"
        >
          <Masonry gutter="10px" columnsCount={2}>
            <p className="klara text-start justify-center text-2xl italic p-2 text-customLightPink">
              A detailed exploration of{" "}
              <strong>
                scale and proportion through two and three-dimensional sketch
                problems
              </strong>{" "}
              varying in levels of complexity and duration. Emphasis is placed
              on setting up proper perspective and generating a line drawing as
              an underlay. Color marker techniques are stressed as well as color
              pencil. In addition, pen and ink techniques and pastel are
              explored.
            </p>
            {images.map((img) => (
              <img
                key={img.alt}
                src={img.src}
                alt={img.alt}
                className="z-50 m-auto"
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
