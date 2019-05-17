import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <a className={`btn ${this.props.type}`} href={this.props.file} download>{this.props.text}</a>
        );
    }
}

export default Button;
