import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import employmentData from "../assets/data/employment.json";

class Employment extends Component {
    renderEmployment() {
        const locale = this.props.locale.substring(0,2);
        return employmentData[locale]["employment"].map((company, companyIndex) => {
            return (
                <div key={`company-${companyIndex}`}>
                    <div className="row">
                        <div className="col-8">
                            <p className="section-title fc-primary mb-0">{company.name}</p>
                            <p>{company.description}</p>
                        </div>
                        <div className="col-4 text-right fc-primary">{company.dateStart} - {company.dateEnd}</div>
                    </div>
                    {company.projects.map((project, projectIndex) => {
                        return(
                            <div className="border-bottom--secondary" key={`company-${companyIndex}-project-${projectIndex}`}>
                                <div className="row">
                                    <div className="col-6">
                                        <span>{project.title}</span>
                                    </div>
                                    <div className="col-6 text-right">
                                        <span className="fc-secondary">{project.location} | {project.duration}</span>
                                    </div>
                                </div>
                                <ul className="list-vertical">
                                    {project.description.map((description, descriptionIndex) => {
                                        return(
                                            <li className="list-vertical-item" key={`company-${companyIndex}-project-${projectIndex}-description-${descriptionIndex}`}>{description}</li>
                                        );
                                    })}
                                </ul>
                                <ul className="list-inline">
                                    {project.skills.map((skill, skillIndex) => {
                                        return(
                                            <li className="list-inline-item" key={`company-${companyIndex}-project-${projectIndex}-skill-${skill}`}>{skill}</li>
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            );
        });
    }

    render() {
        return (
            <div className="mb-4">
                <h3 className="bg-primary-light section-category fc-primary p-2"><FormattedMessage id="section.employment.title"/></h3>
                {this.renderEmployment()}
            </div>
        );
    }
}

export default Employment;
