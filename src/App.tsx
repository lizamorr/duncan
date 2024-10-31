import React from 'react';

import About from './components/About';
import Menu from './components/Menu';
import ColorTheory from './portfolio/color-theory/ColorTheory';

function App() {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <About />
        <Menu />
      </div>
      <ColorTheory />
    </>
  );
}

export default App;
