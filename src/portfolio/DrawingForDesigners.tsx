import React from "react";

import RepeatX from "../components/RepeatX";

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

export default function DrawingForDesigners() {
  return (
    <div className="flex flex-col bg-customBlue pb-8">
      <RepeatX color="text-black" />
      <div className="squares-blue mt-[-14px]">
        {/* <AnimatedTitle
          text="Drawing For Designers"
          id="drawing-for-designers"
          color="text-customRed"
        /> */}
      </div>
      <div className="p-4 lg:p-8 flex flex-col justify-center text-center items-center">
        <div className="flex lg:flex-row flex-col w-full space-y-6 lg:space-x-6">
          <p className="klara text-start justify-center text-lg lg:text-xl p-2 pb-4 text-customLightPink max-w-[500px]">
            A studio course that introduces the design student to the many
            techniques of drawing required for a design professional. The course{" "}
            <strong>
              explores perspective, line quality and the graphic visualization
              process as well as method, materials and subject matter
            </strong>
            . Students learn to use rapid visualization skills in solving
            complex design problems.
          </p>
        </div>
        <div className="flex lg:flex-row flex-col items-center">
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
        <div className="flex lg:flex-row flex-col items-center">
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
        <div className="flex lg:flex-row flex-col items-center">
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
      </div>
    </div>
  );
}
