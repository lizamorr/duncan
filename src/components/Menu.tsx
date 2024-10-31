export default function Menu() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 0;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="bebas-neue-regular text-xl md:text-3xl bg-[#cc8983] flex flex-col justify-center p-4 md:p-8 flex-2 text-[#25555e] space-y-2 cursor-pointer w-full">
      <p onClick={() => handleScroll("color")} className="hover:underline">
        Color Theory
      </p>
      <p
        onClick={() => handleScroll("design-concepts-1")}
        className="hover:underline"
      >
        Design Concepts I
      </p>
      <p
        onClick={() => handleScroll("design-concepts-2")}
        className="hover:underline"
      >
        Design Concepts II
      </p>
      <p onClick={() => handleScroll("drawing-1")} className="hover:underline">
        Drawing I
      </p>
      <p
        onClick={() => handleScroll("drawing-for-designers")}
        className="hover:underline"
      >
        Drawing for Designers
      </p>
      <p
        onClick={() => handleScroll("rendering-1")}
        className="hover:underline"
      >
        Rendering I
      </p>
      <p
        onClick={() => handleScroll("2d-for-designers")}
        className="hover:underline"
      >
        2D for Designers
      </p>
      <p
        onClick={() => handleScroll("history-of-design")}
        className="hover:underline"
      >
        History of Design
      </p>
      <p
        onClick={() => handleScroll("fashion-illustrator")}
        className="hover:underline"
      >
        Fashion Illustrator
      </p>
    </div>
  );
}
