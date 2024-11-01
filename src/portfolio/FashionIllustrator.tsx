import React from 'react';

const images = [
  {
    original: "images/fashion-illustrator/name.webp",
    width: 600,
    height: 636,
    alt: "duncan scott",
  },
  {
    original: "images/fashion-illustrator/mood.webp",
    width: 800,
    height: 636,
    alt: "70s",
  },
  {
    original: "images/fashion-illustrator/Delb.webp",
    width: 800,
    height: 636,
    alt: "delbarton wrestling",
  },
];

export default function FashionIllustrator() {
  return (
    <>
      <div className="flex flex-col bg-black pb-8">
        <div className="flex flex-row space-x-2">
          <h1
            id="fashion-illustrator"
            className="p-4 bebas-neue-regular z-10 title uppercase font-extrabold text-8xl flex float-left text-customRed"
          >
            Fashion Illustrator
          </h1>
        </div>
        <div className="p-4 flex flex-col justify-center text-center items-center">
          <div className="flex">
            <p className="klara text-center lg:text-start justify-center text-2xl italic p-4 text-customLightPink w-full md:max-w-[50%]">
              Fashion Design and Fashion Merchandising students learn to{" "}
              <strong>
                design fashion garments and generate fashion promotional
                utilizing the computer and advanced digital imaging software
              </strong>
              . Adobe Illustrator and Photoshop are utilized along with other
              modeling programs. portion.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            {images.map((img) => (
              <img
                key={img.alt}
                src={img.original}
                alt={img.alt}
                className="z-50 p-4"
                width={img.width}
                height="auto"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
