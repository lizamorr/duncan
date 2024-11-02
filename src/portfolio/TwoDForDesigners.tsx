import React from 'react';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

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
        <div className="flex flex-row space-x-2">
          <h1
            id="2d-for-designers"
            className="p-4 bebas-neue-regular z-10 title uppercase font-extrabold text-8xl flex float-left text-customPink"
          >
            2D For Designers
          </h1>
        </div>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          className="p-4"
        >
          <Masonry gutter="10px" columnsCount={2}>
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
