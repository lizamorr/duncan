import React from "react";

import About from "./components/About";
import Menu from "./components/Menu";
import ScrollToTopButton from "./components/ScrollToTop";
import { Title } from "./components/Title";
import Chevy from "./portfolio/Chevy";
import HistoryOfDesign from "./portfolio/HistoryOfDesign";

function App() {
  return (
    <>
      <Title />

      <Menu />
      <About />
      <Chevy />

      <HistoryOfDesign />
      {/*  
      <FashionConstructionOne />
      <ColorTheory />
      <DesignConceptsOne />
      <DesignConceptsTwo />
      <DrawingOne />
      <DrawingForDesigners />
      <RenderingOne />
       */}
      <ScrollToTopButton />
      <div className="paperOverlay"></div>
    </>
  );
}

export default App;
