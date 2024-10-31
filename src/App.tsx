import React from 'react';

import About from './components/About';
import Menu from './components/Menu';
import ColorTheory from './portfolio/ColorTheory';

function App() {
  return (
    <>
      <div className="flex flex-col md:flex-row text-center">
        <About />
        <Menu />
      </div>
      <ColorTheory />
      <div className="paperOverlay"></div>
    </>
  );
}

export default App;
