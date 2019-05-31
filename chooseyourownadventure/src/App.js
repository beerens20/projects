import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import Page from './Page';
import Main from './Main';

class App extends Component {
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
