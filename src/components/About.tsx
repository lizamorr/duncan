import duncan from '../assets/duncan.webp';

export default function About() {
  return (
    <div className="flex flex-col md:flex-row p-8 md:p-12 justify-center align-center bg-black">
      <div className="karla text-base md:text-lg py-4 md:py-8 flex flex-col justify-center items-center px-4 md:px-6">
        <img
          src={duncan}
          className="rounded-full h-40 w-40 md:h-52 md:w-52 border border-[#eacfcc]"
          alt="logo"
        />
        <p className="header pt-2 md:pt-8 text-[#eacfcc] leading-[50px]">
          Duncan Morrison
        </p>
        <p className="bebas-neue-regular text-2xl md:text-3xl pt-6 text-[#e20000]">
          Fashion Design
        </p>
        <p className="pt-6 text-[#eacfcc]">
          Duncan is a Creative Fashion Designer that is business oriented with a
          gender-neutral streetwear approach. Aspiring fashion designer creates
          imaginative, spirited, high-polished designs surrounded by his
          lifestyle taste and passion for nature, family & love, sports, and
          culture. Duncan's designs represent the tasteful things he enjoys in
          life and that others may enjoy or find a liking to as well. He hopes
          each of his designs are full of life and that each clothing garment
          gives confidence to the individual wearing it while sparking
          conversation wherever they go.
        </p>
      </div>
    </div>
  );
}
