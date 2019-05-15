import React, { Component } from 'react';

class Link extends Component {

    render() {
        return (
            <a href={this.props.link} target='_blank' rel='noopener noreferrer'>
                <i className={`icon ${this.props.type}`} />
            </a>
        );
    }
}

export default Link;
