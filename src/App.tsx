import React from "react";

import About from "./components/About";
import ScrollToTopButton from "./components/ScrollToTop";
import Chevy from "./portfolio/Chevy";

function App() {
  return (
    <>
      <div className="nabla text-7xl leading-[120px] text-center absolute top-1/3 lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9999] p-2 max-w-full">
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
