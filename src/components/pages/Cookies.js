import React, { Component } from 'react';
import {FormattedMessage} from 'react-intl';

class Cookies extends Component {
  render() {
    return (
      <div className='container'>
        <h1><FormattedMessage id="cookierbanner.title"/></h1>
        <p><FormattedMessage id="cookierbanner.text1"/></p>
        <p><FormattedMessage id="cookierbanner.text2"/></p>
        <p><FormattedMessage id="cookierbanner.text.type"/></p>
        <p><FormattedMessage id="cookierbanner.text.type.item1"/></p>
        <p><FormattedMessage id="cookierbanner.text.type.item2"/></p>
        <p><FormattedMessage id="cookierbanner.text.type.item3"/></p>
        <p><FormattedMessage id="cookierbanner.text.type.item4"/></p>
        <p><FormattedMessage id="cookierbanner.text.type.item5"/></p>
        <p><FormattedMessage id="cookierbanner.text.type.item6"/></p>
        <p><FormattedMessage id="cookierbanner.text.type.item7"/></p>
      </div>
    );
  }
}

export default Cookies;
