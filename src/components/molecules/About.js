import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import Button from '../atoms/Button';
import aboutData from '../../assets/data/about.json';
import profile from '../../assets/profile.png';
import CV_EN from '../../assets/CV_ElenaOrtegaFernandez_EN.pdf';
import CV_ES from '../../assets/CV_ElenaOrtegaFernandez_ES.pdf';

class About extends Component {

    render() {
        let file = this.props.locale === 'es-ES' ? CV_ES : CV_EN;

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
                    <Button text={<FormattedMessage id='about.btn.download'/>} type='btn-primary' file={file}/>
                </div>
            </div>
        );
    }
}

export default About;
