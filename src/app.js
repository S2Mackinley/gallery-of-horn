import React from 'react';
import Main from './main.js';
import Header from './header.js'
import Footer from './footer.js'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
