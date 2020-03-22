import React, { Component } from "react";
import {FormattedMessage} from "react-intl";

class Header extends Component {
    render() {
        return (
            <header className="bg-primary-light text-center">
                <h1><FormattedMessage id="about.name"/></h1>
                <h2><FormattedMessage id="about.role"/></h2>
                <div className="d-none d-print-block separator-vertical">
                    <a href="tel:+34646700259" target="_blank" className="print-no-link">+34 646700259</a>
                    <a href="mailto:elenaorfe@gmail.com" target="_blank">elenaorfe@gmail.com</a>
                    <a href="https://www.linkedin.com/in/elenaorfe" target="_blank">Linkedin</a>
                    <a href="https://github.com/elenaorfe" target="_blank">Github</a>
                </div>
            </header>
        );
    }
}

export default Header;
