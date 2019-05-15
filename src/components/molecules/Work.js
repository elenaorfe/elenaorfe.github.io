import React, { Component } from 'react';
import {FormattedMessage} from 'react-intl';
import workData from '../../assets/data/work.json';
import List from '../atoms/List.js';

class Work extends Component {
    getClassNameProjectContainer(length, index) {
        // Add 'separator' class if it's not the latest element
        return (length > index) ? 'project container separator ml-xs-0' : 'project container ml-xs-0';
    }

    renderCompanyProjects(projectList) {
        return projectList.map((project,index) => {
            return(
                <div className={this.getClassNameProjectContainer(projectList.length, index + 1)} key={`project-${index}`}>
                    <p className='d-inline'>{project.title} </p> 
                    <p className='subtitle d-inline'>| {project.duration}</p>
                    <List items={project.description} type='default'/>
                    <List items={project.skills} type='bullet'/>
                </div>
            );
        })
    }

    renderCompanyExperience() {
        return workData[this.props.locale].map((company, index) => {
            return (
                <div className='company container pl-xs-0' key={`company-${index}`}>
                    <div className='title'>
                        <h6 className='d-inline'>{company.name} </h6> 
                        <p className='subtitle d-inline'>| {company.dateStart} - {company.dateEnd}</p>
                    </div>
                    {this.renderCompanyProjects(company.projects)}
                </div>
            );
        });
    }

    render() {
        return (
            <div id="work">
                <h6 className='text-uppercase'><FormattedMessage id='work.experience.title'/></h6>
                {this.renderCompanyExperience()}
            </div>
        );
    }
}

export default Work;
