import React, { Component } from 'react';
import {FormattedMessage} from 'react-intl';

import icono from '../assets/Icono.png';

class Header extends Component {
    render() {
        return (
            <header className='header'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-8 col-sm-4'>
                            <h1><FormattedMessage id='header.name'/></h1>
                            <h2><FormattedMessage id='header.role'/></h2>
                        </div>
                        <div className='col-4 col-sm-8'>
                            <img src={icono} alt='icon' />
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
