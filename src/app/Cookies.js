import React, { Component } from "react";
import { FormattedMessage } from "react-intl";

class Cookies extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="font-weight-light"><FormattedMessage id="cookiesbanner.title"/></h1>
        <p><FormattedMessage id="cookiesbanner.text1"/></p>
        <p><FormattedMessage id="cookiesbanner.text2"/></p>
        <p><FormattedMessage id="cookiesbanner.text.type"/></p>
        <p><FormattedMessage id="cookiesbanner.text.type.item1"/></p>
        <p><FormattedMessage id="cookiesbanner.text.type.item2"/></p>
        <p><FormattedMessage id="cookiesbanner.text.type.item3"/></p>
        <p><FormattedMessage id="cookiesbanner.text.type.item4"/></p>
        <p><FormattedMessage id="cookiesbanner.text.type.item5"/></p>
        <p><FormattedMessage id="cookiesbanner.text.type.item6"/></p>
        <p><FormattedMessage id="cookiesbanner.text.type.item7"/></p>
      </div>
    );
  }
}

export default Cookies;
