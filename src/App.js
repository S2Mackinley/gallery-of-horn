import React from 'react';
import Header from './header';
import Footer from './footer';
import Main from './main';
import './app.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
    <Header />
    <Main />
    <Footer />
    </header>
    </div>
  );
}

export default App;
