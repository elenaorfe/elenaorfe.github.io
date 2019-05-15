import React, { Component } from 'react';

import './styles/_styles.scss';
import * as appConstants from './assets/Constants';
import About from './components/molecules/About';
import Contact from './components/molecules/Contact';
import Cookies from './components/pages/Cookies';
import Header from './components/molecules/Header';
import Section from './components/molecules/Section';
import Work from './components/molecules/Work';
import CookiesBanner from './components/molecules/CookiesBanner';
import Courses from './components/molecules/Courses';
import PersonalProjects from './components/molecules/PersonalProjects';

class App extends Component {
  render() {
    const url = window.location.href;

    // Render cookies page
    if(url.indexOf(appConstants.CookiesParam) > 0) {
      return (
        <Cookies />
      );
    }

    const workData = [
      <Work locale={this.props.locale} />,
      <Courses locale={this.props.locale} />,
      <PersonalProjects locale={this.props.locale} />
    ];

    const aboutData = [
      <About locale={this.props.locale} />
    ];

    const contactData = [
      <Contact locale={this.props.locale} />
    ];

    // Render application
    return (
      <div className="App">
        <Header />
        <Section type='primary' data={workData}></Section>
        <Section type='secondary' data={aboutData}></Section>
        <Section type='primary' data={contactData}></Section>
        <CookiesBanner />
      </div>
    );
  }
}

export default App;