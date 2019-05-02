import React, { Component } from 'react';
import {FormattedMessage} from 'react-intl';
import Cookies from 'universal-cookie';

let cookies = new Cookies();

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

    renderCookieBanner() {
        if(!this.state.hideBanner){
            return (
                <div className='cookiesbanner'>
                    <div className='inner'>
                        <div className='align-tr'><button onClick={this.hideCookiesBanner}>x</button></div>
                        <FormattedMessage id="cookierbanner.text"/>
                        <a href='/cookies'><FormattedMessage id="cookierbanner.link"/></a>
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
