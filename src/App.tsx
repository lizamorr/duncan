import React from "react";

import About from "./components/About";
import Menu from "./components/Menu";
import ColorTheory from "./portfolio/ColorTheory";
import DesignConceptsOne from "./portfolio/DesignConceptsOne";
import DesignConceptsTwo from "./portfolio/DesignConceptsTwo";
import DrawingForDesigners from "./portfolio/DrawingForDesigners";
import RenderingOne from "./portfolio/RenderingOne";

function App() {
  return (
    <>
      <div className="flex flex-col md:flex-row text-center bg-customPink">
        <About />
        <Menu />
      </div>
      <ColorTheory />
      <DesignConceptsOne />
      <DesignConceptsTwo />
      <DrawingForDesigners />
      <RenderingOne />
      <div className="paperOverlay"></div>
    </>
  );
}

export default App;
