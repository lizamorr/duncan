import React, {
  useEffect,
  useState,
} from 'react';

import { AiOutlineArrowUp } from 'react-icons/ai';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3 bg-[#eeee] text-black rounded-full shadow-md hover:bg-customLightPink focus:outline-none transition duration-300 ease-in-out"
        >
          <AiOutlineArrowUp size={24} />
        </button>
      )}
    </div>
  );
}
