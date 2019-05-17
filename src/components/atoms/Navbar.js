import React from 'react';
import { FormattedMessage } from 'react-intl';

function Navbar (props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light justify-content-end pr-0">
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#work">
                            <FormattedMessage id='work.experience.title'/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">
                            <FormattedMessage id='about.title'/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">
                            <FormattedMessage id='contact.title'/>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
      ); 
}

export default Navbar;
