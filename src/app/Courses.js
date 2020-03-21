import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import coursesData from "../assets/data/courses.json";

class Courses extends Component {
    renderCourses() {
        const locale = this.props.locale.substring(0,2);
        return coursesData[locale]["courses"].map((item, courseIndex) => {
            return (
                <div key={`course-${courseIndex}`}>
                    <div className="row">
                        <div className="col-5">
                            <span>{item.title}</span> 
                        </div>
                        <div className="col-7 text-right fc-secondary"><span>{item.description} | {item.date}</span></div>
                    </div>
                    <ul className="list-inline">
                        {item.skills.map((skill, skillIndex) => {
                            return(
                                <li className="list-inline-item" key={`course-${courseIndex}-skill-${skillIndex}`}>{skill}</li>
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
                <h3 className="bg-primary-light section-category fc-primary p-2"><FormattedMessage id="section.courses.title"/></h3>
                {this.renderCourses()}
            </div>
        );
    }
}

export default Courses;
