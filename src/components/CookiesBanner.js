import React, { Component } from 'react';
import {FormattedMessage} from 'react-intl';
import Cookies from 'universal-cookie';

import * as appConstants from '../assets/Constants';

let cookies = new Cookies();
let url = window.location.href; 

class CookiesBanner extends Component {
    constructor(props){
        super(props);
        this.state = {
            hideBanner : cookies.get('hideCookieBanner') || false
        }
        this.hideCookiesBanner = this.hideCookiesBanner.bind(this);
    }

    hideCookiesBanner() {
        cookies.set('hideCookieBanner', 'true', { path: '/' });
        this.setState({ hideBanner : true });
    }

    showCookiesPage() {
        let win = window.open(url + appConstants.CookiesParam, '_blank');
        win.focus();
    }

    renderCookieBanner() {
        if(!this.state.hideBanner){
            return (
                <div className='cookiesbanner'>
                    <div className='inner'>
                        <div className='align-tr'><button onClick={this.hideCookiesBanner}>x</button></div>
                        <FormattedMessage id="cookierbanner.text"/>
                        <a onClick={this.showCookiesPage} target='_blank'><FormattedMessage id="cookierbanner.link"/></a>
                    </div>
                </div>
            );
        } else {
            return null
        }
    }

    render() {
        return (
            this.renderCookieBanner()
        );
    }
}

export default CookiesBanner;
