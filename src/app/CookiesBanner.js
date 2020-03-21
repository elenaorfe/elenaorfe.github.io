import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import Cookies from "universal-cookie";

import * as appConstants from "../assets/Constants";

let cookies = new Cookies();
let url = window.location.href; 

class CookiesBanner extends Component {
    constructor(props){
        super(props);
        this.state = {
            hideBanner : cookies.get("hideCookieBanner") || false
        }
        this.hideCookiesBanner = this.hideCookiesBanner.bind(this);
    }

    hideCookiesBanner() {
        cookies.set("hideCookieBanner", "true", { path: "/" });
        this.setState({ hideBanner : true });
    }

    showCookiesPage() {
        let win = window.open(url + appConstants.CookiesParam, "_blank");
        win.focus();
    }

    renderCookieBanner() {
        if(!this.state.hideBanner){
            return (
                <div className="cookiesbanner">
                    <div className="inner">
                        <span className="pull-right"><button onClick={this.hideCookiesBanner}>x</button></span>
                        <FormattedMessage id="cookiesbanner.text"/>
                        <a href={url + appConstants.CookiesParam} target="_blank"><FormattedMessage id="cookiesbanner.link"/></a>
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
