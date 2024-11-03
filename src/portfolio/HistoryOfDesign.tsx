import "react-image-gallery/styles/css/image-gallery.css";

import React from "react";

import ImageGallery from "react-image-gallery";

import AnimatedTitle from "../components/AnimatedTitle";
import RepeatX from "../components/RepeatX";

const images = [
  {
    original: "images/history-of-design/slide1.webp",
    width: 500,
    height: 636,
    alt: "slide 1",
  },
  {
    original: "images/history-of-design/slide2.webp",
    width: 500,
    height: 636,
    alt: "slide 2",
  },
  {
    original: "images/history-of-design/slide3.webp",
    width: 500,
    height: 636,
    alt: "slide 3",
  },
  {
    original: "images/history-of-design/slide4.webp",
    width: 500,
    height: 636,
    alt: "slide 4",
  },
  {
    original: "images/history-of-design/slide5.webp",
    width: 500,
    height: 636,
    alt: "slide 5",
  },
  {
    original: "images/history-of-design/slide6.webp",
    width: 500,
    height: 636,
    alt: "slide 6",
  },
  {
    original: "images/history-of-design/slide7.webp",
    width: 500,
    height: 636,
    alt: "slide 7",
  },
  {
    original: "images/history-of-design/slide8.webp",
    width: 500,
    height: 636,
    alt: "slide 8",
  },
  {
    original: "images/history-of-design/slide9.webp",
    width: 500,
    height: 636,
    alt: "slide 9",
  },
  {
    original: "images/history-of-design/slide10.webp",
    width: 500,
    height: 636,
    alt: "slide 10",
  },
  {
    original: "images/history-of-design/slide11.webp",
    width: 500,
    height: 400,
    alt: "slide 11",
  },
  {
    original: "images/history-of-design/slide12.webp",
    width: 500,
    height: 400,
    alt: "slide 12",
  },
];

export default function HistoryOfDesign() {
  return (
    <div className="flex flex-col bg-customPink pb-8">
      <RepeatX color="text-customRed" />
      <div className="diamonds-pink mt-[-14px]">
        <AnimatedTitle
          text="History of Design"
          id="history-of-design"
          color="text-customBlue"
        />
      </div>
      <div className="p-4 lg:p-8">
        <ImageGallery items={images} />
      </div>
    </div>
  );
}
