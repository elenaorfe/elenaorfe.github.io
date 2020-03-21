import React, { Component } from "react";
import { FormattedMessage } from "react-intl";

class Contact extends Component {

    render() {
        return (
            <div className="section-contact mb-4">
                <h3 className="bg-primary-light section-category fc-primary p-2"><FormattedMessage id="section.contact.title"/></h3>

                <div className="row">
                    <div className="col-6 col-sm-3 col-md-2 offset-md-2 text-center">
                        <a href="tel:+34646700259">+34 646700259</a>
                    </div>
                    <div className="col-6 col-sm-3 col-md-2 text-center">
                        <a href="mailto:elenaorfe@gmail.com">elenaorfe@gmail.com</a>
                    </div>
                    <div className="col-6 col-sm-3 col-md-2 text-center">
                        <a href="https://www.linkedin.com/in/elenaorfe" target="_blank">Linkedin</a>
                    </div>
                    <div className="col-6 col-sm-3 col-md-2 text-center">
                        <a href="https://github.com/elenaorfe" target="_blank">Github</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
