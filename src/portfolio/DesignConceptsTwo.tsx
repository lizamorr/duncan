import React from "react";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

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

export default function DesignConceptsTwo() {
  return (
    <>
      {/* <div className="wave-blue w-full h-12"></div> */}
      <div className="flex flex-col bg-black">
        <div className="flex flex-row space-x-2">
          <h1
            id="design-concepts-2"
            className="p-4 bebas-neue-regular z-10 title uppercase font-extrabold text-8xl flex float-left text-customPink"
          >
            Design Concepts II
          </h1>
        </div>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          className="p-4"
        >
          <Masonry gutter="10px" columnsCount={2}>
            <p className="klara text-center lg:text-start justify-center text-2xl italic p-4 text-customLightPink">
              Continuation of Design Concepts I through projects focusing on the
              design methodology of problem solving. Projects explore design
              problems through sketches and three-dimensional scaled models of
              products and spaces.
            </p>
            <p className="text-customLightPink">COMING SOON</p>
            {/* {images.map((img) => (
              <img
                key={img.alt}
                src={img.src}
                alt={img.alt}
                className="z-50"
                width={img.width}
                height="auto"
              />
            ))} */}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
}
