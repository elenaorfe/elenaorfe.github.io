import React, { Component } from 'react';
import Card from '../atoms/Card';

class Section extends Component {
    renderCard() {
        console.log(this.props.data)
        return this.props.data.map(item => {
            return <Card data={item} type={this.props.type}/>
        })
    }

    render() {
        return (
            <div className={`section ${this.props.type}`}>
                {this.renderCard()}
            </div>
        );
    }
}

export default Section;
