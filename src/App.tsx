import React from "react";

import About from "./components/About";
import Menu from "./components/Menu";
import ScrollToTopButton from "./components/ScrollToTop";
import { Title } from "./components/Title";
import Chevy from "./portfolio/Chevy";
import ColorTheory from "./portfolio/ColorTheory";
import DesignConcepts from "./portfolio/DesignConcepts";
import FashionConstructionOne from "./portfolio/FashionConstructionOne";
import HistoryOfDesign from "./portfolio/HistoryOfDesign";
import Rendering from "./portfolio/Rendering";

function App() {
  return (
    <>
      <Title />

      <Menu />
      <About />
      <Chevy />

      <HistoryOfDesign />
      <FashionConstructionOne />
      <DesignConcepts />
      <ColorTheory />
      <Rendering />
      {/*  
    

      <DrawingOne />
      <DrawingForDesigners />
 
       */}
      <ScrollToTopButton />
      <div className="paperOverlay"></div>
    </>
  );
}

export default App;
