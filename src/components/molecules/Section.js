import React, { Component } from 'react';
import Card from '../atoms/Card';

class Section extends Component {
    renderCard() {
        return this.props.data.map((item, index) => {
            return <Card data={item} type={this.props.type} key={'card-' + index}/>
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
