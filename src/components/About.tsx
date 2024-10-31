import {
  useEffect,
  useState,
} from 'react';

import duncan from '../assets/duncan.webp';

export default function About() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1224);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`flex flex-col lg:flex-row p-8 md:p-12 justify-center align-center bg-black ${
        isDesktop ? "circular" : ""
      }`}
    >
      <div className="karla text-base md:text-lg py-4 md:py-8 flex flex-col lg:flex-row justify-center items-center px-4 md:px-6">
        <div className="flex flex-col justify-center items-center">
          <img
            src={duncan}
            className="rounded-full h-40 w-40 md:h-52 md:w-52 border border-[#eacfcc]"
            alt="logo"
          />
          <p className="header pt-2 md:pt-8 text-[#eacfcc] leading-[50px]">
            Duncan Morrison
          </p>
          <p className="bebas-neue-regular text-4xl md:text-5xl pt-6 text-[#e20000]">
            Fashion Design
          </p>
        </div>
        <div className="flex flex-col flex-1 p-8">
          <p className="pt-4 text-[#eacfcc] text-start">
            Duncan is a <strong>Creative Fashion Designer</strong> that is
            business oriented with a gender-neutral streetwear approach.
            Aspiring fashion designer creates <strong>imaginative</strong>,{" "}
            <strong>spirited</strong>, and <strong>high-polished</strong>{" "}
            designs surrounded by his lifestyle taste and passion for nature,
            family & love, sports, and culture. Duncan's designs represent the
            tasteful things he enjoys in life and that others may enjoy or find
            a liking to as well.
          </p>
          <p className="italic text-[#eacfcc] pt-2 text-end">
            He hopes each of his designs are full of life and that each clothing
            garment gives confidence to the individual wearing it while sparking
            conversation wherever they go.
          </p>
        </div>
      </div>
    </div>
  );
}
