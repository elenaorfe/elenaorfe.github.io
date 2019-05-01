import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './styles/_styles.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main locale={this.props.locale}/>
        <Footer />
      </div>
    );
  }
}

export default App;
