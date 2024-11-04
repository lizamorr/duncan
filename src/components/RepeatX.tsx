import React, {
  useEffect,
  useState,
} from 'react';

interface RepeatXProps {
  color: string;
}

export default function RepeatX({ color }: RepeatXProps) {
  const [repeatCount, setRepeatCount] = useState<number>(0);

  const calculateXCount = () => {
    const characterWidth = 15;
    const xCount = Math.ceil(window.innerWidth / characterWidth);
    setRepeatCount(xCount);
  };

  useEffect(() => {
    calculateXCount();

    window.addEventListener("resize", calculateXCount);
    return () => {
      window.removeEventListener("resize", calculateXCount);
    };
  }, []);

  return (
    <div
      className={`flex justify-evenly items-center bg-transparent crafty repeat z-10 relative mt-[-14px] w-full whitespace-nowrap text-2xl ${color} overflow-x-hidden`}
    >
      {Array.from({ length: repeatCount }, (_, index) => (
        <span key={index}>X</span>
      ))}
    </div>
  );
}
