import React, { Component } from "react";

import "./assets/styles/styles.scss";
import * as appConstants from "./assets/Constants";
import Cookies from "./app/Cookies";
import Header from "./app/Header";
import Employment from "./app/Employment";
import PersonalProjects from "./app/PersonalProjects";
import Courses from "./app/Courses";
import Education from "./app/Education";
import Language from "./app/Language";
import About from "./app/About";
import Contact from "./app/Contact";
import CookiesBanner from "./app/CookiesBanner";

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
      <div className="section-page">
        <Header locale={this.props.locale}/>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <Employment locale={this.props.locale}/>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6">
              <PersonalProjects locale={this.props.locale} />
            </div>
            <div className="col-12 col-sm-6">
              <Courses locale={this.props.locale} />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6">
              <Education locale={this.props.locale} />
            </div>
            <div className="col-12 col-sm-6">
              <Language locale={this.props.locale} />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <About locale={this.props.locale}/>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Contact locale={this.props.locale}/>
            </div>
          </div>
        </div>
        <CookiesBanner />
      </div>
    );
  }
}

export default App;