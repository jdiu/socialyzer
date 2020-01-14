import React from 'react';
import logo from 'imgs/default.svg';
import './App.css';
import TextAnalyzer from 'components/TextAnalyzer/TextAnalyzer';
import SocialOAuthList from 'components/SocialOAuthList/SocialOAuthList';

function App() {
  return (
    <div className="App">
      <header className="App-header cwidth">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main className="cwidth">
        <SocialOAuthList />
        <br /><br />
        <TextAnalyzer />
      </main>
      <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a></div>
    </div>
  );
}

export default App;
