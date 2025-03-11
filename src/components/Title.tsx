export const Title = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <h1
      className="cursor paperOverlay2 fixed top-0 left-0 w-full bg-white py-4 text-2xl lg:text-4xl z-50 cursive text-center transition-all duration-300 text-[#25555e] cursor-pointer"
      onClick={scrollToTop}
    >
      Duncan Morrison
    </h1>
  );
};
