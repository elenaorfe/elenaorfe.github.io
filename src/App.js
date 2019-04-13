import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/_styles.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
