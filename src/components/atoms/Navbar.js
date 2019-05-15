import React from 'react';
import { FormattedMessage } from 'react-intl';

function Navbar (props) {
    return (
        <ul class="nav justify-content-end">
            <li class="nav-item">
                <a class="nav-link active" href="#work">
                    <FormattedMessage id='work.experience.title'/>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#about">
                    <FormattedMessage id='about.title'/
                ></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#contact">
                    <FormattedMessage id='contact.title'/>
                </a>
            </li>
        </ul>
      ); 
}

export default Navbar;
