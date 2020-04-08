import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import personalProjectsData from "../assets/data/personal-projects.json";

class PersonalProjects extends Component {

    renderPersonalProjects() {
        const locale = this.props.locale.substring(0,2);
        return personalProjectsData[locale]["projects"].map((item, projectIndex) => {
            return (
                <div className="mb-4" key={`project-${projectIndex}`}>

                    <div className="section-title row">
                        <div className="col-10">
                            <span className="fc-primary mr-2">{item.title}</span> 
                            <a href={item.link} target="_blank">🔗</a>
                        </div>
                        <div className="col-2 text-right fc-secondary"><span>{item.date}</span></div>
                    </div>
                    
                    <ul className="list-vertical">
                        {item.tasks.map((task, taskIndex) => {
                            return(
                                <li className="list-vertical-item" key={`project-${projectIndex}-task-${taskIndex}`}>{task}</li>
                            );
                        })}
                    </ul>

                    <ul className="list-inline">
                        {item.skills.map((skill, skillIndex) => {
                            return(
                                <li className="list-inline-item" key={`project-${projectIndex}-skill-${skillIndex}`}>{skill}</li>
                            );
                        })}
                    </ul>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="mb-4">
                <h3 className="bg-primary-light section-category fc-primary p-2"><FormattedMessage id="section.personal_projects.title"/></h3>
                {this.renderPersonalProjects()}
            </div>
        );
    }
}

export default PersonalProjects;
