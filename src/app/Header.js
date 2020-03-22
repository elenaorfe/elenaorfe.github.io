import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import contactData from "../assets/data/contact.json";

class Header extends Component {
    render() {
        const locale = this.props.locale.substring(0,2);
        const contact = contactData[locale];
        
        return (
            <header className="bg-primary-light text-center">
                <h1><FormattedMessage id="about.name"/></h1>
                <h2><FormattedMessage id="about.role"/></h2>
                <div className="d-none d-print-block separator-vertical">
                    <a href={contact.link.mobile} target="_blank" className="print-no-link">{contact.title.mobile}</a>
                    <a href={`mailto:${contact.link.email}`} target="_blank">{contact.title.email}</a>
                    <a href={contact.link.linkedin} target="_blank">{contact.title.linkedin}</a>
                    <a href={contact.link.github} target="_blank">{contact.title.github}</a>
                </div>
            </header>
        );
    }
}

export default Header;
