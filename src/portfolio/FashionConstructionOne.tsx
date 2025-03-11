import React from "react";

import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "images/fashion-construction/pants-1.webp",
    width: 500,
    height: 636,
    alt: "pants front",
  },
  {
    original: "images/fashion-construction/pants-2.webp",
    width: 500,
    height: 636,
    alt: "pants back",
  },
  {
    original: "images/fashion-construction/pants2-1.webp",
    width: 500,
    height: 636,
    alt: "pants front",
  },
  {
    original: "images/fashion-construction/pants2-2.webp",
    width: 500,
    height: 636,
    alt: "pants back",
  },
  {
    original: "images/fashion-construction/sweater-1.webp",
    width: 500,
    height: 636,
    alt: "sweater front",
  },
  {
    original: "images/fashion-construction/sweater-2.webp",
    width: 500,
    height: 636,
    alt: "sweater back",
  },
  {
    original: "images/fashion-construction/sweater2-1.webp",
    width: 500,
    height: 636,
    alt: "sweater front",
  },
  {
    original: "images/fashion-construction/sweater2-2.webp",
    width: 500,
    height: 636,
    alt: "sweater back",
  },
];

export default function FashionConstructionOne() {
  return (
    <div className="flex flex-col pb-8 justify-center items-center text-[#25555e] karla">
      <h2
        id="fashion-construction"
        className="flex items-center text-3xl lg:text-5xl font-extrabold tracking-wide pt-12 text-center"
      >
        <span className="crafty font-xl px-4">X</span>
        <span className="bebas-neue-regular uppercase">
          Fashion Construction
        </span>
        <span className="crafty font-xl px-4">X</span>
      </h2>

      <div className="p-4 lg:p-8">
        <ImageGallery items={images} />
      </div>
    </div>

    // <ResponsiveMasonry
    //   columnsCountBreakPoints={{ 350: 1, 750: 2 }}
    //   className="p-4 lg:p-24"
    // >
    //   <Masonry gutter="10px" columnsCount={2}>
    //     {images.map((img) => (
    //       <img
    //         key={img.alt}
    //         original={img.original}
    //         alt={img.alt}
    //         className="z-50 rounded-md m-auto"
    //         width={img.width}
    //         height="auto"
    //       />
    //     ))}
    //   </Masonry>
    // </ResponsiveMasonry>
  );
}
