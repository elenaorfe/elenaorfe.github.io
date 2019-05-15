import React, { Component } from 'react';
import CV from '../../assets/CV_ElenaOrtega.pdf'

class Button extends Component {
    render() {
        return (
            <a className={`btn ${this.props.type}`} href={CV} download>{this.props.text}</a>
        );
    }
}

export default Button;
