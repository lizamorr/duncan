import { useEffect, useState } from "react";

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

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (isOpen && !event.target.closest(".menu-container")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative">
      <button
        className="p-3 z-50 fixed top-1 right-1 text-[#25555e] lg:p-4 lg:text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={32} /> : <MenuIcon size={32} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
      )}

      <div
        className={`menu-container z-50 min-w-fit h-screen right-0 justify-items-end fixed top-16 text-[#ffff] shadow-lg p-6 w-48 space-y-4 bg-[#25555e] lg:w-64 lg:p-6 lg:text-xl transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {[
          "about",
          "history-of-design",
          "fashion-construction",
          "design-concepts",
          "drawing",
          "rendering",
          "color",
        ].map((section) => (
          <div
            key={section}
            onClick={() => handleScroll(section)}
            className="hover:underline cursor-pointer font-bold uppercase items-end justify-end"
          >
            <span className="group relative inline-block">
              <span className="text-[#ffff] crafty font-2xl px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                X
              </span>
              {section.replace(/-/g, " ")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
