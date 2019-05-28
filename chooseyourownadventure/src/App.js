import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import Page from './Page';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Page />
        <Footer />
        </div>
    );
  }
}

export default App;
