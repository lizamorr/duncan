import React from "react";

const images = [
  {
    src: "images/rendering/vogue.webp",
    width: 900,
    height: 636,
    alt: "Vogue",
  },
  {
    src: "images/rendering/dress.webp",
    width: 400,
    height: 636,
    alt: "Women in dress",
  },
  {
    src: "images/rendering/model.webp",
    width: 400,
    height: 636,
    alt: "Woman model",
  },
  {
    src: "images/rendering/mets.webp",
    maxWidth: 300,
    width: 400,
    height: 636,
    alt: "Mets",
  },
  {
    src: "images/rendering/kobe.webp",
    maxWidth: 400,
    width: 400,
    height: 636,
    alt: "Kobe",
  },
];

export default function RenderingOne() {
  return (
    <>
      <div className="flex flex-col bg-customLightPink">
        <div className="flex flex-row space-x-2">
          <h1
            id="rendering-1"
            className="p-4 bebas-neue-regular z-10 title uppercase font-extrabold text-8xl flex float-left text-customBlue"
          >
            Rendering I
          </h1>
        </div>

        <div className="p-4 flex flex-col justify-center text-center items-center">
          <div className="flex">
            <p className="klara text-center lg:text-start justify-center text-2xl italic p-4 text-black w-full md:max-w-[50%]">
              Design Rendering is an advanced-level studio course that builds on
              the work completed in Drawing I, II and Drawing for Designers. The
              course{" "}
              <strong>
                concentrates on producing virtual product, fashion, architecture
                and interior images
              </strong>
              .
            </p>
          </div>
          <div className="flex">
            <img
              key={images[0].alt}
              src={images[0].src}
              alt={images[0].alt}
              className="z-50 p-4"
              width={images[0].width}
              height="auto"
            />
          </div>
          <div className="flex md:flex-row flex-col">
            <img
              key={images[1].alt}
              src={images[1].src}
              alt={images[1].alt}
              className="z-50 p-4"
              width={images[1].width}
              height="auto"
            />
            <img
              key={images[2].alt}
              src={images[2].src}
              alt={images[2].alt}
              className="z-50 p-4"
              width={images[2].width}
              height="auto"
            />
          </div>
          <div className="flex md:flex-row flex-col">
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
        </div>
      </div>
    </>
  );
}
