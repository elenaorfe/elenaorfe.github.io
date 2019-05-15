import React, { Component } from 'react';
import {FormattedMessage} from 'react-intl';
import Navbar from '../atoms/Navbar';

class Header extends Component {
    render() {
        return (
            <header className='header'>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <h1 className='font-weight-light'><FormattedMessage id='header.name'/></h1>
                            <h2 className='font-weight-light'><FormattedMessage id='header.role'/></h2>
                        </div>
                        <div className='col'>
                            <Navbar />
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
