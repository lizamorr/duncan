import React from "react";

import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "images/design-concepts-two/IMG_6173.webp",
    width: 300,
    height: 636,
    alt: "shorts",
  },
  {
    original: "images/design-concepts-two/IMG_6174.webp",
    width: 300,
    height: 636,
    alt: "angel logo",
  },
  {
    original: "images/design-concepts-two/IMG_6175.webp",
    width: 300,
    height: 636,
    alt: "sweatshirt",
  },
  {
    original: "images/design-concepts-two/IMG_6177.webp",
    width: 300,
    height: 636,
    alt: "wing sleeve",
  },
  {
    original: "images/design-concepts-two/toteae.webp",
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
  {
    original: "images/design-concepts-two/IMG_9588.webp",
    width: 300,
    height: 636,
    alt: "skirt",
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

const images1 = [
  {
    original: "images/design-concepts-one/IMG_3584.webp",
    width: 500,
    height: 636,
    alt: "yellow shirt",
  },
  {
    original: "images/design-concepts-one/IMG_3856.webp",
    width: 500,
    height: 636,
    alt: "mann front",
  },
  {
    original: "images/design-concepts-one/IMG_3857.webp",
    width: 500,
    height: 636,
    alt: "mann back",
  },
  {
    original: "images/design-concepts-one/IMG_3858.webp",
    maxWidth: 300,
    width: 500,
    height: 636,
    alt: "mann side",
  },
  {
    original: "images/design-concepts-one/IMG_7779.webp",
    maxWidth: 500,
    width: 500,
    height: 636,
    alt: "design 1",
  },
  {
    original: "images/design-concepts-one/IMG_7780.webp",
    maxWidth: 500,
    width: 500,
    height: 636,
    alt: "design 2",
  },
  {
    original: "images/design-concepts-one/IMG_7781.webp",
    maxWidth: 500,
    width: 500,
    height: 636,
    alt: "design 3",
  },
  {
    original: "images/design-concepts-one/IMG_7837.webp",
    maxWidth: 500,
    width: 500,
    height: 636,
    alt: "design 4",
  },
  {
    original: "images/design-concepts-one/IMG_7838.webp",
    maxWidth: 500,
    width: 500,
    height: 636,
    alt: "poncho",
  },
  {
    original: "images/design-concepts-one/IMG_7839.webp",
    maxWidth: 500,
    width: 500,
    height: 636,
    alt: "poncho arm",
  },
];

export default function DesignConcepts() {
  return (
    // <div className="flex flex-col bg-customBlue pb-8">
    //   <RepeatX color="text-black" />
    //   <div className="lips-blue mt-[-14px]">
    //     {/* <AnimatedTitle
    //       text="Design Concepts I"
    //       id="design-concepts-1"
    //       color="text-customRed"
    //     /> */}
    //   </div>
    //   <ResponsiveMasonry
    //     columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
    //     className="p-4 lg:p-8"
    //   >
    //     <Masonry gutter="10px" columnsCount={2}>
    //       <p className="klara text-start justify-center text-lg lg:text-xl p-2 pb-4 text-customLightPink">
    //         A detailed exploration of{" "}
    //         <strong>
    //           scale and proportion through two and three-dimensional sketch
    //           problems
    //         </strong>{" "}
    //         varying in levels of complexity and duration. Emphasis is placed on
    //         setting up proper perspective and generating a line drawing as an
    //         underlay. Color marker techniques are stressed as well as color
    //         pencil. In addition, pen and ink techniques and pastel are explored.
    //       </p>
    //       {images.map((img) => (
    //         <img
    //           key={img.alt}
    //           original={img.original}
    //           alt={img.alt}
    //           className="z-50 m-auto rounded-md"
    //           width={img.width}
    //           height="auto"
    //         />
    //       ))}
    //     </Masonry>
    //   </ResponsiveMasonry>
    // </div>
    <div className="flex flex-col pb-8 justify-center items-center text-[#25555e] karla">
      <h2
        id="design-concepts"
        className="flex items-center text-3xl lg:text-5xl font-extrabold tracking-wide pt-12 text-center"
      >
        <span className="crafty font-2xl px-4">X</span>Design Concepts
        <span className="crafty font-2xl px-4">X</span>
      </h2>

      <div className="p-4 lg:p-8 space-y-6">
        <ImageGallery items={images1} />
        <ImageGallery items={images} />
        <ImageGallery items={finalImages} />
        <ImageGallery items={presentationImages} />
        <ImageGallery items={deliverablesImages} />
        <ImageGallery items={shortImages} />
      </div>
    </div>
  );
}
