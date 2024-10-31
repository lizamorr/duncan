import React from 'react';

import About from './components/About';
import Menu from './components/Menu';
import ColorTheory from './portfolio/ColorTheory';
import DesignConceptsOne from './portfolio/DesignConceptsOne';

function App() {
  return (
    <>
      <div className="flex flex-col md:flex-row text-center bg-customPink">
        <About />
        <Menu />
      </div>
      <ColorTheory />
      <DesignConceptsOne />
      <div className="paperOverlay"></div>
    </>
  );
}

export default App;
