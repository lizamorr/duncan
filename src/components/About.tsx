import {
  useEffect,
  useState,
} from 'react';

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
      className={`flex flex-col lg:flex-row p-8 lg:p-20 justify-center align-center bg-black ${
        isDesktop ? "circular" : ""
      }`}
    >
      <div className="karla text-base lg:text-lg flex flex-col lg:flex-row justify-center items-center">
        <div className="flex flex-col justify-center items-center min-w-fit">
          <img
            src="images/about/duncan.webp"
            className="rounded-full h-40 w-40 lg:h-52 lg:w-52 border border-customPink"
            alt="logo"
          />

          <p className="header pt-2 lg:pt-8 text-customPink leading-[50px]">
            Duncan Morrison
          </p>
          <p className="bebas-neue-regular text-4xl lg:text-5xl pt-6 text-customRed">
            Fashion Design
          </p>
        </div>
        <div className="flex flex-col p-2 lg:p-6 min-w-fit]">
          <p className="pt-4 text-customLightPink text-start">
            Duncan is a{" "}
            <strong className="text-customPink">
              Creative Fashion Designer
            </strong>{" "}
            that is business oriented with a gender-neutral streetwear approach.
            Aspiring fashion designer creates{" "}
            <strong className="text-customPink">imaginative</strong>,{" "}
            <strong className="text-customPink">spirited</strong>, and{" "}
            <strong className="text-customPink">high-polished</strong> designs
            surrounded by his lifestyle taste and passion for nature, family &
            love, sports, and culture. Duncan's designs represent the tasteful
            things he enjoys in life and that others may enjoy or find a liking
            to as well.
          </p>
          <p className="italic text-customLightPink pt-3 text-end">
            He hopes each of his designs are full of life and that each clothing
            garment gives confidence to the individual wearing it while sparking
            conversation wherever they go.
          </p>
        </div>
      </div>
    </div>
  );
}
