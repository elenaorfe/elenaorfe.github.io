import React, { Component } from "react";
import { FormattedMessage } from "react-intl";

import profile from "../assets/images/profile.png";
import CV_EN from "../assets/files/CV_ElenaOrtegaFernandez_EN.pdf";
import CV_ES from "../assets/files/CV_ElenaOrtegaFernandez_ES.pdf";

class About extends Component {

    render() {
        let file = this.props.locale === "es-ES" ? CV_ES : CV_EN;

        return (
            <div className="mb-4 d-print-none">
                <h3 className="bg-primary-light section-category fc-primary p-2"><FormattedMessage id="section.about.title"/></h3>
                <div className="row">
                    <div className="col-12 col-sm-2 my-auto text-center">
                        <img src={profile} className="avatar mb-2"/>
                    </div>
                    <div className="col-12 col-sm-10 my-auto">
                        <h5 className="d-inline-block">
                            <FormattedMessage id="about.name"/>
                            &nbsp;|&nbsp;
                            <FormattedMessage id="about.role"/>
                        </h5>
                        <p className="mb-0"><FormattedMessage id="about.description1"/></p>
                        <p><FormattedMessage id="about.description2"/></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        <a className="btn btn-primary" href={file} download><FormattedMessage id="about.btn.download"/></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
