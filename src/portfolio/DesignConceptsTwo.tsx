import React from 'react';

import ImageGallery from 'react-image-gallery';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const images = [
  {
    src: "images/design-concepts-two/IMG_6173.webp",
    width: 300,
    height: 636,
    alt: "shorts",
  },
  {
    src: "images/design-concepts-two/IMG_6174.webp",
    width: 300,
    height: 636,
    alt: "angel logo",
  },
  {
    src: "images/design-concepts-two/IMG_6175.webp",
    width: 300,
    height: 636,
    alt: "sweatshirt",
  },
  {
    src: "images/design-concepts-two/IMG_6177.webp",
    width: 300,
    height: 636,
    alt: "wing sleeve",
  },
  {
    src: "images/design-concepts-two/IMG_9588.webp",
    width: 300,
    height: 636,
    alt: "skirt",
  },
  {
    src: "images/design-concepts-two/toteae.webp",
    alt: "Tote bag design",
    width: 300,
    height: 636,
  },
];
const finalImages = [
  {
    original: "images/design-concepts-two/FINAL-1.webp",
    width: 500,
    height: 636,
    alt: "final presentation slide 1",
  },
  {
    original: "images/design-concepts-two/FINAL-2.webp",
    width: 500,
    height: 636,
    alt: "final presentation slide 2",
  },
  {
    original: "images/design-concepts-two/FINAL-3.webp",
    width: 500,
    height: 636,
    alt: "final presentation slide 3",
  },
  {
    original: "images/design-concepts-two/FINAL-4.webp",
    width: 500,
    height: 636,
    alt: "final presentation slide 4",
  },
  {
    original: "images/design-concepts-two/FINAL-5.webp",
    width: 500,
    height: 636,
    alt: "final presentation slide 5",
  },
  {
    original: "images/design-concepts-two/FINAL-6.webp",
    width: 500,
    height: 636,
    alt: "final presentation slide 6",
  },
  {
    original: "images/design-concepts-two/FINAL-7.webp",
    width: 500,
    height: 636,
    alt: "final presentation slide 7",
  },
  {
    original: "images/design-concepts-two/FINAL-8.webp",
    width: 500,
    height: 636,
    alt: "final presentation slide 8",
  },
  {
    original: "images/design-concepts-two/FINAL-9.webp",
    width: 500,
    height: 636,
    alt: "final presentation slide 9",
  },
  {
    original: "images/design-concepts-two/FINAL-10.webp",
    width: 500,
    height: 636,
    alt: "final presentation slide 10",
  },
  {
    original: "images/design-concepts-two/FINAL-11.webp",
    width: 500,
    height: 400,
    alt: "final presentation slide 11",
  },
  {
    original: "images/design-concepts-two/FINAL-12.webp",
    width: 500,
    height: 400,
    alt: "final presentation slide 12",
  },
  {
    original: "images/design-concepts-two/FINAL-13.webp",
    width: 500,
    height: 400,
    alt: "final presentation slide 12",
  },
  {
    original: "images/design-concepts-two/FINAL-14.webp",
    width: 500,
    height: 400,
    alt: "final presentation slide 12",
  },
  {
    original: "images/design-concepts-two/FINAL-15.webp",
    width: 500,
    height: 400,
    alt: "final presentation slide 12",
  },
  {
    original: "images/design-concepts-two/FINAL-16.webp",
    width: 500,
    height: 400,
    alt: "final presentation slide 12",
  },
  {
    original: "images/design-concepts-two/FINAL-17.webp",
    width: 500,
    height: 400,
    alt: "final presentation slide 12",
  },
];
const presentationImages = [
  {
    original: "images/design-concepts-two/presentation+deliverables-1.webp",
    width: 500,
    height: 636,
    alt: "presentation and deliverables slide 1",
  },
  {
    original: "images/design-concepts-two/presentation+deliverables-2.webp",
    width: 500,
    height: 636,
    alt: "presentation and deliverables slide 2",
  },
  {
    original: "images/design-concepts-two/presentation+deliverables-3.webp",
    width: 500,
    height: 636,
    alt: "presentation and deliverables slide 3",
  },
  {
    original: "images/design-concepts-two/presentation+deliverables-4.webp",
    width: 500,
    height: 636,
    alt: "presentation and deliverables slide 4",
  },
  {
    original: "images/design-concepts-two/presentation+deliverables-5.webp",
    width: 500,
    height: 636,
    alt: "presentation and deliverables slide 5",
  },
  {
    original: "images/design-concepts-two/presentation+deliverables-6.webp",
    width: 500,
    height: 636,
    alt: "presentation and deliverables slide 6",
  },
  {
    original: "images/design-concepts-two/presentation+deliverables-7.webp",
    width: 500,
    height: 636,
    alt: "presentation and deliverables slide 7",
  },
  {
    original: "images/design-concepts-two/presentation+deliverables-8.webp",
    width: 500,
    height: 636,
    alt: "presentation and deliverables slide 8",
  },
  {
    original: "images/design-concepts-two/presentation+deliverables-9.webp",
    width: 500,
    height: 636,
    alt: "presentation and deliverables slide 9",
  },
  {
    original: "images/design-concepts-two/presentation+deliverables-10.webp",
    width: 500,
    height: 636,
    alt: "presentation and deliverables slide 10",
  },
  {
    original: "images/design-concepts-two/presentation+deliverables-11.webp",
    width: 500,
    height: 400,
    alt: "presentation and deliverables slide 11",
  },
  {
    original: "images/design-concepts-two/presentation+deliverables-12.webp",
    width: 500,
    height: 400,
    alt: "presentation and deliverables slide 12",
  },
  {
    original: "images/design-concepts-two/presentation+deliverables-13.webp",
    width: 500,
    height: 400,
    alt: "presentation and deliverables slide 12",
  },
];
const deliverablesImages = [
  {
    original: "images/design-concepts-two/Project 2 whole deliverable-1.webp",
    width: 500,
    height: 636,
    alt: "project two whole deliverable slide 1",
  },
  {
    original: "images/design-concepts-two/Project 2 whole deliverable-2.webp",
    width: 500,
    height: 636,
    alt: "project two whole deliverable slide 2",
  },
  {
    original: "images/design-concepts-two/Project 2 whole deliverable-3.webp",
    width: 500,
    height: 636,
    alt: "project two whole deliverable slide 3",
  },
  {
    original: "images/design-concepts-two/Project 2 whole deliverable-4.webp",
    width: 500,
    height: 636,
    alt: "project two whole deliverable slide 4",
  },
  {
    original: "images/design-concepts-two/Project 2 whole deliverable-5.webp",
    width: 500,
    height: 636,
    alt: "project two whole deliverable slide 5",
  },
  {
    original: "images/design-concepts-two/Project 2 whole deliverable-6.webp",
    width: 500,
    height: 636,
    alt: "project two whole deliverable slide 6",
  },
  {
    original: "images/design-concepts-two/Project 2 whole deliverable-7.webp",
    width: 500,
    height: 636,
    alt: "project two whole deliverable slide 7",
  },
  {
    original: "images/design-concepts-two/Project 2 whole deliverable-8.webp",
    width: 500,
    height: 636,
    alt: "project two whole deliverable slide 8",
  },
  {
    original: "images/design-concepts-two/Project 2 whole deliverable-9.webp",
    width: 500,
    height: 636,
    alt: "project two whole deliverable slide 9",
  },
  {
    original: "images/design-concepts-two/Project 2 whole deliverable-10.webp",
    width: 500,
    height: 636,
    alt: "project two whole deliverable slide 10",
  },
  {
    original: "images/design-concepts-two/Project 2 whole deliverable-11.webp",
    width: 500,
    height: 400,
    alt: "project two whole deliverable slide 11",
  },
];
const shortImages = [
  {
    original: "images/design-concepts-two/Short Assignment 4-1.webp",
    width: 500,
    height: 636,
    alt: "short assignment slide 1",
  },
  {
    original: "images/design-concepts-two/Short Assignment 4-2.webp",
    width: 500,
    height: 636,
    alt: "short assignment slide 2",
  },
];

export default function DesignConceptsTwo() {
  return (
    <>
      {/* <div className="wave-blue w-full h-12"></div> */}
      <div className="flex flex-col bg-black pb-8">
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
        <ImageGallery items={finalImages} />;
        <ImageGallery items={presentationImages} />;
        <ImageGallery items={deliverablesImages} />;
        <ImageGallery items={shortImages} />;
      </div>
    </>
  );
}
