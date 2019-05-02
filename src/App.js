import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import CookiesBanner from './components/CookiesBanner';
import * as appConstants from './assets/Constants';

import './styles/_styles.scss';
import Cookies from './components/pages/Cookies';

class App extends Component {
  render() {
    const url = window.location.href;

    // Render cookies page
    if(url.indexOf(appConstants.CookiesParam) > 0) {
      return (
        <Cookies />
      );
    }

    // Render application
    return (
      <div className="App">
        <Header />
        <Main locale={this.props.locale}/>
        <CookiesBanner />
        <Footer />
      </div>
    );
  }
}

export default App;
