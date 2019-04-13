import React, { Component } from 'react';
import icono from '../assets/Icono.png';

class Header extends Component {
    render() {
        return (
            <header className='header'>
                <div className='container'>
                    <div className="row">
                        <div className="col-4">
                            <h1>Elena Ortega</h1>
                            <h2>Frontend Developer</h2>
                        </div>
                        <div className="col-8">
                            <img src={icono} />
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
