import React, { Component } from 'react';
import {FormattedMessage} from 'react-intl';

import personalProjectsData from '../../assets/data/personal-projects.json';
import List from '../atoms/List.js';
import Link from '../atoms/Link.js';

class PersonalProjects extends Component {
    getClassNameCourseContainer(length, index) {
        // Add 'separator' class if it's not the latest element
        return (length > index) ? 'personal-project container separator pl-xs-0' : 'personal-project container pl-xs-0';
    }

    renderPersonalProjects() {
        const locale = this.props.locale.substring(0,2);
        return personalProjectsData[locale]['projects'].map((project,index) => {
            return (
                <div className={this.getClassNameCourseContainer(personalProjectsData[locale]['projects'].length, index + 1)} key={`personal-project-${index}`}>
                    <div className='title'>
                        <div className='row'>
                            <div className='col col-xs-12 col-ms-8 pr-0'>
                                <h6 className='d-inline'>{project.title} </h6>
                                {project.link ? <Link link={project.link} type='fas fa-external-link-square-alt external'/> : ''}
                            </div>
                            <div className='col col-xs-12 col-ms-4 pr-0'>
                                <p className='subtitle d-inline float-right'>{project.description}</p>
                            </div>
                        </div>
                    </div>
                    <List items={project.skills} type='bullet'/>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <h6 className='text-uppercase'><FormattedMessage id='work.personalprojects.title'/></h6>
                {this.renderPersonalProjects()}
            </div>
        );
    }
}

export default PersonalProjects;
