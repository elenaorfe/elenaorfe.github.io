import React, { Component } from "react";
import {FormattedMessage} from "react-intl";
import educationData from "../assets/data/education.json";

class Education extends Component {
    renderEducation() {
        const locale = this.props.locale.substring(0,2);
        return educationData[locale]["education"].map((item, index) => {
            return (
                <div key={`education-${index}`}>
                    <p className="mb-1">{item.title}</p> 
                    <p className="fc-secondary">{item.description} | {item.date}</p>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="mb-4">
                <h3 className="bg-primary-light section-category fc-primary p-2"><FormattedMessage id="section.education.title"/></h3>
                {this.renderEducation()}
            </div>
        );
    }
}

export default Education;
