import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src="https://s7d2.scene7.com/is/image/TWCNews/rain_showers_jpg" />
        
        <p>
          This is Anujan's Website
        </p>
        <a
          className="App-link"
          href="https://rainymood.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click for some ASMR
        </a>
      </header>
    </div>
  );
}

export default App;
