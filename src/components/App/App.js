import React from 'react';
import logo from 'default.svg';
import './App.css';
import TextAnalyzer from 'components/TextAnalyzer/TextAnalyzer';

function App() {
  return (
    <div className="App">
      <header className="App-header cwidth">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main className="cwidth">
        <TextAnalyzer />
      </main>
    </div>
  );
}

export default App;
