import React from "react";

import ImageGallery from "react-image-gallery";

const images1 = [
  {
    original: "images/drawing-one/people1.webp",
    width: 500,
    height: 636,
    alt: "mann side",
  },
  {
    original: "images/drawing-one/people2.webp",
    width: 500,
    height: 636,
    alt: "design 1",
  },
  {
    original: "images/drawing-one/people3.webp",
    width: 500,
    height: 636,
    alt: "design 2",
  },
  {
    original: "images/drawing-one/people4.webp",
    width: 500,
    height: 636,
    alt: "design 3",
  },
  {
    original: "images/drawing-one/people5.webp",
    width: 500,
    height: 636,
    alt: "design 4",
  },
];
const images = [
  {
    src: "images/drawing-for-designers/man1.webp",
    width: 450,
    height: 636,
    alt: "man 1",
  },
  {
    src: "images/drawing-for-designers/man1Face.webp",
    width: 200,
    height: 636,
    alt: "man 1 face",
  },
  {
    src: "images/drawing-for-designers/man1Chest.webp",
    width: 200,
    height: 636,
    alt: "man 1 chest",
  },
  {
    src: "images/drawing-for-designers/man1Feet.webp",
    maxWidth: 300,
    width: 200,
    height: 636,
    alt: "man 1 feet",
  },
  {
    src: "images/drawing-for-designers/man2.webp",
    maxWidth: 500,
    width: 450,
    height: 636,
    alt: "man 2",
  },
  {
    src: "images/drawing-for-designers/man2Face.webp",
    maxWidth: 500,
    width: 200,
    height: 636,
    alt: "man 2 face",
  },
  {
    src: "images/drawing-for-designers/man2Chest.webp",
    maxWidth: 500,
    width: 200,
    height: 636,
    alt: "man 2 chest",
  },
  {
    src: "images/drawing-for-designers/man2Feet.webp",
    maxWidth: 500,
    width: 200,
    height: 636,
    alt: "man 2 feet",
  },
  {
    src: "images/drawing-for-designers/woman.webp",
    maxWidth: 500,
    width: 450,
    height: 636,
    alt: "woman",
  },
  {
    src: "images/drawing-for-designers/womanFace.webp",
    maxWidth: 500,
    width: 200,
    height: 636,
    alt: "woman face",
  },
  {
    src: "images/drawing-for-designers/womanChest.webp",
    maxWidth: 500,
    width: 200,
    height: 636,
    alt: "woman chest",
  },
  {
    src: "images/drawing-for-designers/womanPants.webp",
    maxWidth: 500,
    width: 200,
    height: 636,
    alt: "woman feet",
  },
];

export default function Drawing() {
  return (
    // <div className="flex flex-col bg-customPink pb-8">
    //   <RepeatX color="text-customBlue" />
    //   <div className="hunds-pink mt-[-14px]">
    //     <AnimatedTitle text="Drawing I" id="drawing-1" color="text-customRed" />
    //   </div>
    //   <ResponsiveMasonry
    //     columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
    //     className="p-4 lg:p-8"
    //   >
    //     <Masonry gutter="10px" columnsCount={2}>
    //       {images.map((img) => (
    //         <img
    //           key={img.alt}
    //           original={img.original}
    //           alt={img.alt}
    //           className="z-50 rounded-md m-auto"
    //           width={img.width}
    //           height="auto"
    //         />
    //       ))}
    //     </Masonry>
    //   </ResponsiveMasonry>
    // </div>   <div className="flex flex-col pb-8 justify-center items-center text-[#25555e] karla">
    <div className="flex flex-col pb-8 justify-center items-center text-[#25555e] karla">
      <h2
        id="drawing"
        className="flex items-center text-3xl lg:text-5xl font-extrabold tracking-wide pt-12 text-center"
      >
        <span className="crafty font-2xl px-4">X</span>Drawing
        <span className="crafty font-2xl px-4">X</span>
      </h2>

      <div className="p-4 lg:p-8 space-y-6 flex flex-col items-center">
        <div className="flex flex-row items-center">
          <div className="flex flex-col justify-center">
            <img
              key={images[1].alt}
              src={images[1].src}
              alt={images[1].alt}
              className="z-50 p-4 mx-auto rounded-3xl"
              width={images[1].width}
              height="auto"
            />
            <img
              key={images[2].alt}
              src={images[2].src}
              alt={images[2].alt}
              className="z-50 p-4 mx-auto rounded-3xl"
              width={images[2].width}
              height="auto"
            />
            <img
              key={images[3].alt}
              src={images[3].src}
              alt={images[3].alt}
              className="z-50 p-4 mx-auto rounded-3xl"
              width={images[3].width}
              height="auto"
            />
          </div>
          <div>
            <img
              key={images[0].alt}
              src={images[0].src}
              alt={images[0].alt}
              className="z-50 p-4 mx-auto rounded-3xl"
              width={images[0].width}
              height="auto"
            />
          </div>
        </div>
        <div className="flex flex-row items-center">
          <div className="flex flex-col justify-center">
            <img
              key={images[5].alt}
              src={images[5].src}
              alt={images[5].alt}
              className="z-50 p-4 mx-auto rounded-3xl"
              width={images[5].width}
              height="auto"
            />
            <img
              key={images[6].alt}
              src={images[6].src}
              alt={images[6].alt}
              className="z-50 p-4 mx-auto rounded-3xl"
              width={images[6].width}
              height="auto"
            />
            <img
              key={images[7].alt}
              src={images[7].src}
              alt={images[7].alt}
              className="z-50 p-4 mx-auto rounded-3xl"
              width={images[7].width}
              height="auto"
            />
          </div>
          <div>
            <img
              key={images[4].alt}
              src={images[4].src}
              alt={images[4].alt}
              className="z-50 p-4 mx-auto rounded-3xl"
              width={images[4].width}
              height="auto"
            />
          </div>
        </div>
        <div className="flex flex-row items-center">
          <div className="flex flex-col justify-center">
            <img
              key={images[9].alt}
              src={images[9].src}
              alt={images[9].alt}
              className="z-50 p-4 mx-auto rounded-3xl"
              width={images[9].width}
              height="auto"
            />
            <img
              key={images[10].alt}
              src={images[10].src}
              alt={images[10].alt}
              className="z-50 p-4 mx-auto rounded-3xl"
              width={images[10].width}
              height="auto"
            />
            <img
              key={images[11].alt}
              src={images[11].src}
              alt={images[11].alt}
              className="z-50 p-4 mx-auto rounded-3xl"
              width={images[11].width}
              height="auto"
            />
          </div>
          <div>
            <img
              key={images[8].alt}
              src={images[8].src}
              alt={images[8].alt}
              className="z-50 p-4 mx-auto rounded-3xl"
              width={images[8].width}
              height="auto"
            />
          </div>
        </div>
        <ImageGallery items={images1} />
      </div>
    </div>
  );
}
