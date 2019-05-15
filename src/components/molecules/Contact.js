import React, { Component } from 'react';
import {FormattedMessage} from 'react-intl';
import Link from '../atoms/Link';

class Contact extends Component {

    render() {
        return (
            <div id="contact">
                <h6 className='text-uppercase'><FormattedMessage id='contact.title'/></h6>
                <div className='text-center'>
                    <p><FormattedMessage id='contact.subtitle'/></p>
                    <Link link='mailto:elenaorfe@gmail.com' type='far fa-envelope rounded'/>
                    <Link link='https://linkedin.com/in/elenaorfe' type='fab fa-linkedin-in rounded'/>
                    <Link link='https://github.com/elenaorfe' type='fab fa-github rounded'/>
                </div>
            </div>
        );
    }
}

export default Contact;
