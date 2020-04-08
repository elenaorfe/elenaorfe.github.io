import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import contactData from "../assets/data/contact.json";

class Contact extends Component {

    render() {
        const locale = this.props.locale.substring(0,2);
        const contact = contactData[locale];

        return (
            <div className="section-contact mb-4 d-print-none">
                <h3 className="bg-primary-light section-category fc-primary p-2"><FormattedMessage id="section.contact.title"/></h3>

                <div className="row">
                    <div className="col-6 col-sm-3 col-md-2 offset-md-2 text-center">
                        <a href={contact.link.mobile} target="_blank" className="print-no-link">{contact.title.mobile}</a>
                    </div>
                    <div className="col-6 col-sm-3 col-md-2 text-center">
                        <a href={`mailto:${contact.link.email}`} target="_blank">{contact.title.email}</a>
                    </div>
                    <div className="col-6 col-sm-3 col-md-2 text-center">
                        <a href={contact.link.linkedin} target="_blank">{contact.title.linkedin}</a>
                    </div>
                    <div className="col-6 col-sm-3 col-md-2 text-center">
                        <a href={contact.link.github} target="_blank">{contact.title.github}</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
