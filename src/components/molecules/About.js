import React, { Component } from 'react';
import {FormattedMessage} from 'react-intl';
import profile from '../../assets/profile.png'; 
import aboutData from '../../assets/data/about.json';
import Button from '../atoms/Button';

class About extends Component {

    render() {
        return (
            <div id="about">
                <h6 className='text-uppercase'><FormattedMessage id='about.title'/></h6>
                <div className='text-center'>
                    <img src={profile} className={`avatar ${this.props.type} mb-2`} />
                </div>
                <div className='text-center'>
                    <h5 className='d-inline-block'>
                        <FormattedMessage id={aboutData[this.props.locale].name}/>
                        &nbsp;|&nbsp;
                        <FormattedMessage id={aboutData[this.props.locale].role}/>
                    </h5>
                    <p className='mb-0'><FormattedMessage id={aboutData[this.props.locale].description1}/></p>
                    <p className='mb-0'><FormattedMessage id={aboutData[this.props.locale].description2}/></p>
                    <p><FormattedMessage id={aboutData[this.props.locale].description3}/></p>
                </div>
                <div className='text-center'>
                    <Button text={<FormattedMessage id='about.btn.download'/>} type='btn-primary'/> 
                </div>
            </div>
        );
    }
}

export default About;
