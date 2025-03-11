import React from "react";

import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "images/color-theory/paint.webp",
    width: 400,
    height: 522,
    alt: "Paint smears",
  },
  {
    original: "images/color-theory/walter.webp",
    width: 800,
    height: 636,
    alt: "Walter White",
  },
  {
    original: "images/color-theory/denmark.webp",
    width: 800,
    height: 612,
    alt: "Copenhagen",
  },
  {
    original: "images/color-theory/nike.webp",
    maxWidth: 300,
    width: 400,
    height: 544,
    alt: "Nike sneaker",
  },
  {
    original: "images/color-theory/pig.webp",
    maxWidth: 500,
    width: 400,
    height: 537,
    alt: "Pig",
  },
];

export default function ColorTheory() {
  return (
    <div className="flex flex-col pb-8 justify-center items-center text-[#25555e] karla">
      <h2
        id="color"
        className="flex items-center text-3xl lg:text-5xl font-extrabold tracking-wide pt-12 text-center"
      >
        <span className="crafty font-xl px-4">X</span>
        <span className="bebas-neue-regular uppercase">Color Theory</span>
        <span className="crafty font-xl px-4">X</span>
      </h2>

      <div className="p-4 lg:p-8">
        <ImageGallery items={images} />
      </div>
    </div>
    // <div className="flex flex-col bg-customBlue pb-8">
    //   <RepeatX color="text-black" />
    //   <div className="squares-blue mt-[-14px]">
    //     {/* <AnimatedTitle text="Color Theory" id="color" color="text-customRed" /> */}
    //   </div>
    //   <ResponsiveMasonry
    //     columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
    //     className="p-4 lg:p-8"
    //   >
    //     <Masonry gutter="10px" columnsCount={2}>
    //       <p className="klara text-start justify-center text-lg lg:text-xl p-2 pb-4 text-black">
    //         A course that teaches students how{" "}
    //         <strong>color affects the human mind, body, eye, and spirit</strong>
    //         . Students use a variety of art mediums to create artwork that
    //         demonstrates their understanding of color theory and how to apply it
    //         in the visual arts.
    //       </p>
    //       {images.map((img) => (
    //         <img
    //           key={img.alt}
    //           original={img.original}
    //           alt={img.alt}
    //           className="z-50 rounded-md"
    //           width={img.width}
    //           height={img.height}
    //         />
    //       ))}
    //     </Masonry>
    //   </ResponsiveMasonry>
    // </div>
  );
}
