import React from "react";

import AnimatedTitle from "../components/AnimatedTitle";

const images = [
  {
    src: "images/drawing-for-designers/mountains.webp",
    maxWidth: 500,
    width: 600,
    height: 400,
    alt: "mountains",
  },
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

export default function DrawingForDesigners() {
  return (
    <>
      {/* <div className="wave-blue w-full h-12"></div> */}
      <div className="py-4 flex flex-col bg-customBlue">
        <div className="flex flex-row space-x-2">
          <AnimatedTitle
            text="Drawing For Designers"
            id="drawing-for-designers"
            color="text-customRed"
          />
        </div>
        <div className="p-4 flex flex-col justify-center text-center items-center">
          <div className="flex lg:flex-row flex-col w-full space-y-6 lg:space-x-6">
            <p className="klara text-start justify-center text-2xl italic p-2 text-customLightPink max-w-[500px]">
              A studio course that introduces the design student to the many
              techniques of drawing required for a design professional. The
              course{" "}
              <strong>
                explores perspective, line quality and the graphic visualization
                process as well as method, materials and subject matter
              </strong>
              . Students learn to use rapid visualization skills in solving
              complex design problems.
            </p>
            <img
              key={images[0].alt}
              src={images[0].src}
              alt={images[0].alt}
              className="z-50 p-4"
              width={images[0].width}
              height="auto"
            />
          </div>
          <div className="flex lg:flex-row flex-col items-center">
            <div className="flex flex-col justify-center">
              <img
                key={images[2].alt}
                src={images[2].src}
                alt={images[2].alt}
                className="z-50 p-4"
                width={images[2].width}
                height="auto"
              />
              <img
                key={images[3].alt}
                src={images[3].src}
                alt={images[3].alt}
                className="z-50 p-4"
                width={images[3].width}
                height="auto"
              />
              <img
                key={images[4].alt}
                src={images[4].src}
                alt={images[4].alt}
                className="z-50 p-4"
                width={images[4].width}
                height="auto"
              />
            </div>
            <div>
              <img
                key={images[1].alt}
                src={images[1].src}
                alt={images[1].alt}
                className="z-50 p-4"
                width={images[1].width}
                height="auto"
              />
            </div>
          </div>
          <div className="flex lg:flex-row flex-col items-center">
            <div className="flex flex-col justify-center">
              <img
                key={images[6].alt}
                src={images[6].src}
                alt={images[6].alt}
                className="z-50 p-4"
                width={images[6].width}
                height="auto"
              />
              <img
                key={images[7].alt}
                src={images[7].src}
                alt={images[7].alt}
                className="z-50 p-4"
                width={images[7].width}
                height="auto"
              />
              <img
                key={images[8].alt}
                src={images[8].src}
                alt={images[8].alt}
                className="z-50 p-4"
                width={images[4].width}
                height="auto"
              />
            </div>
            <div>
              <img
                key={images[5].alt}
                src={images[5].src}
                alt={images[5].alt}
                className="z-50 p-4"
                width={images[5].width}
                height="auto"
              />
            </div>
          </div>
          <div className="flex lg:flex-row flex-col items-center">
            <div className="flex flex-col justify-center">
              <img
                key={images[10].alt}
                src={images[10].src}
                alt={images[10].alt}
                className="z-50 p-4"
                width={images[10].width}
                height="auto"
              />
              <img
                key={images[11].alt}
                src={images[11].src}
                alt={images[11].alt}
                className="z-50 p-4"
                width={images[11].width}
                height="auto"
              />
              <img
                key={images[12].alt}
                src={images[12].src}
                alt={images[12].alt}
                className="z-50 p-4"
                width={images[12].width}
                height="auto"
              />
            </div>
            <div>
              <img
                key={images[9].alt}
                src={images[9].src}
                alt={images[9].alt}
                className="z-50 p-4"
                width={images[9].width}
                height="auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
