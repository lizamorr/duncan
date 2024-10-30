import './App.css';

import React from 'react';

import duncan from './duncan.webp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={duncan} className="rounded-full h-48 w-48" alt="logo" />
        <p className="header">Duncan Morrison</p>
        <button className="karla p-4 rounded-3xl text-2xl bg-white text-black">
          Portfolio
        </button>
      </header>
    </div>
  );
}

export default App;
