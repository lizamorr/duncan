import React from 'react';

import About from './components/About';
import Menu from './components/Menu';
import ScrollToTopButton from './components/ScrollToTop';
import Chevy from './portfolio/Chevy';

function App() {
  return (
    <>
      <Menu />
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
