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
    <div className="bebas-neue-regular text-xl lg:text-3xl flex flex-col justify-center p-1 flex-2 text-[#25555e] space-y-2 cursor-pointer w-full text-center lg:text-right">
      <h2 className="py-1 lg:py-6 text-3xl lg:text-6xl font-extrabold bebas-neue-regular tracking-wide">
        Fashion Design
      </h2>
      <p
        onClick={() => handleScroll("fashion-construction")}
        className="hover:underline"
      >
        Fashion Construction
      </p>
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
        onClick={() => handleScroll("history-of-design")}
        className="hover:underline"
      >
        History of Design
      </p>
    </div>
  );
}
