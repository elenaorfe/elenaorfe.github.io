import React, { Component } from 'react';
import Work from './Work';
import PersonalProjects from './PersonalProjects';
import Courses from './Courses';

class Main extends Component {
    render() {
        return (
            <div className='main'>
                <div className='intro'></div>
                <div className='container'>
                    <Work locale={this.props.locale} />
                    <Courses locale={this.props.locale} />
                    <PersonalProjects locale={this.props.locale} />
                </div>
            </div>
        );
    }
}

export default Main;
