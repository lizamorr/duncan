import { useState } from "react";

import { Menu as MenuIcon, X } from "lucide-react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 32;
      const elementTop = element.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementTop - offset,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <div className="relative">
      <button
        className="p-3 z-50 fixed top-1 right-1 text-[#25555e] lg:p-4 lg:text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={32} /> : <MenuIcon size={32} />}
      </button>

      {isOpen && (
        <div className="karla z-50 min-w-fit justify-items-end fixed top-16 right-4 bg-[#ffff] shadow-lg rounded-md p-4 w-48 space-y-2 text-[#25555e] lg:w-64 lg:p-6 lg:text-xl">
          <p
            onClick={() => handleScroll("about")}
            className="hover:underline cursor-pointer font-bold uppercase"
          >
            <span className="crafy hover:flex hidden text-[#25555e] pr-4">
              X
            </span>
            About
          </p>
          <p
            onClick={() => handleScroll("history-of-design")}
            className="hover:underline cursor-pointer font-bold uppercase"
          >
            History of Design
          </p>
          <p
            onClick={() => handleScroll("fashion-construction")}
            className="hover:underline cursor-pointer font-bold uppercase"
          >
            Fashion Construction
          </p>
          <p
            onClick={() => handleScroll("design-concepts")}
            className="hover:underline cursor-pointer font-bold uppercase"
          >
            Design Concepts
          </p>
          <p
            onClick={() => handleScroll("drawing")}
            className="hover:underline cursor-pointer font-bold uppercase"
          >
            Drawing
          </p>
          <p
            onClick={() => handleScroll("rendering")}
            className="hover:underline cursor-pointer font-bold uppercase"
          >
            Rendering
          </p>
          <p
            onClick={() => handleScroll("color")}
            className="hover:underline cursor-pointer font-bold uppercase"
          >
            Color Theory
          </p>
        </div>
      )}
    </div>
  );
}
