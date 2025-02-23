import React from "react";

import About from "./components/About";
import ScrollToTopButton from "./components/ScrollToTop";
import Chevy from "./portfolio/Chevy";

function App() {
  return (
    <>
      <div
        className="oi text-7xl font-extrabold leading-[6rem] text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9999] px-6 max-w-full w-full"
        style={{
          background:
            "linear-gradient(120deg, #8B4000 10%, #7A1818 30%, #4A1F4A 50%, #0A1F44 70%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundSize: "200% 200%",
          animation: "waveGradient 6s infinite linear",
          WebkitTextStroke: "0.1px #e9e7d8",
        }}
      >
        Duncan Morrison
      </div>

      <Chevy />
      <About />

      {/*  
      <FashionConstructionOne />
      <ColorTheory />
      <DesignConceptsOne />
      <DesignConceptsTwo />
      <DrawingOne />
      <DrawingForDesigners />
      <RenderingOne />
      <HistoryOfDesign />  */}
      <ScrollToTopButton />
      <div className="paperOverlay"></div>
    </>
  );
}

export default App;
