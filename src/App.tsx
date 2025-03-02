import React from 'react';

import About from './components/About';
import ScrollToTopButton from './components/ScrollToTop';
import Chevy from './portfolio/Chevy';

function App() {
  return (
    <>
      {/* <div
        className="oi text-xl lg:text-6xl md:text-5xl sm:text-4xl text-center absolute top-40 px-6"
        style={{
          background:
            "linear-gradient(120deg, #8B4000 10%, #7A1818 30%, #4A1F4A 50%, #0A1F44 70%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundSize: "200% 200%",
          animation: "waveGradient 6s infinite linear",
        }}
      >
        Duncan Morrison
      </div> */}
      {/* <div>Duncan Morrison</div> */}
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
