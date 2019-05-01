import React, { Component } from 'react';
import {FormattedMessage} from 'react-intl';

import personalProjectsData from '../assets/data/personal-projects.json';
import List from './List.js';

class PersonalProjects extends Component {
    renderPersonalProjects() {
        return personalProjectsData[this.props.locale].map(project => {
            return (
                <div className='project container'>
                    <div className='title'>
                        <h4 className='d-inline'>{project.title} </h4> 
                        <p className='subtitle d-inline'>| {project.description}</p>
                    </div>
                    <List items={project.skills} type='bullet'/>
                </div>
            );
        });
    }

    render() {
        return (
            <div className='box'>
                <div className='text-center'>
                    <h3><FormattedMessage id="main.personalprojects.title"/></h3>
                </div>
                {this.renderPersonalProjects()}
            </div>
        );
    }
}

export default PersonalProjects;
