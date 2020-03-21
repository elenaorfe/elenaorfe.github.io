import React, { Component } from "react";
import {FormattedMessage} from "react-intl";

class Header extends Component {
    render() {
        return (
            <header className="bg-primary-light text-center">
                <h1><FormattedMessage id="about.name"/></h1>
                <h2><FormattedMessage id="about.role"/></h2>
            </header>
        );
    }
}

export default Header;
