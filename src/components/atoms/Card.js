import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className={`card container ${this.props.type}`}>
                {this.props.data}
            </div>
        );
    }
}

export default Card;
