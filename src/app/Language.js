import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import languagesData from "../assets/data/languages.json";

class Language extends Component {
    renderLanguages() {
        const locale = this.props.locale.substring(0,2);
        return languagesData[locale]["languages"].map((item, index) => {
            return (
                <div key={`language-${index}`}>
                    <p className="mb-1">{item.name}</p> 
                    <p className="fc-secondary">{item.level}</p>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="mb-4">
                <h3 className="bg-primary-light section-category fc-primary p-2"><FormattedMessage id="section.languages.title"/></h3>
                {this.renderLanguages()}
            </div>
        );
    }
}

export default Language;
