import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
                <div className='container text-center'>
                    <a href='mailto:elenaorfe@gmail.com'>
                        <i className='far fa-envelope' />
                    </a>
                    <a href='https://linkedin.com/in/elenaorfe' className='not-light' target='_blank'>
                        <i className='fab fa-linkedin-in' />
                    </a>
                    <a href='https://github.com/elenaorfe' className='not-light' target='_blank'>
                        <i className='fab fa-github' />
                    </a>
                </div>
            </footer>
        );
    }
}

export default Footer;
