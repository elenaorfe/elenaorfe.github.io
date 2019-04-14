import React, { Component } from 'react';

class Main extends Component {
    render() {
        return (
            <div className='skills'>
                <div className='intro'></div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-sm-6'>
                            <div className='box'>
                                <div className='text-center'>
                                    <h3>Frontend Developer</h3>
                                </div>
                                <div>
                                    <p>+4 year experience working in different projects</p>
                                </div>
                                <div className='row'>
                                    <div className='col-6'>
                                        <p className='title'>Basics</p>
                                        <p className='item'>HTML</p>
                                        <p className='item'>CSS</p>
                                        <p className='item'>Javascript</p>
                                    </div>
                                    <div className='col-6'>
                                        <p className='title'>Styles</p>
                                        <p className='item'>Sass</p>
                                        <p className='item'>Bootstrap</p>
                                        <p className='item'>Material Design</p>
                                        <p className='item'>Fontawesome</p>
                                        <p className='item'>Responsive Design</p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-6'>
                                        <p className='title'>Frameworks</p>
                                        <p className='item'>AngularJS</p>
                                        <p className='item'>Angular</p>
                                        <p className='item'>ReactJS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-sm-6'>
                            <div className='box'>
                                <div className='text-center'>
                                    <h3>Learning</h3>
                                </div>
                                <div>
                                    <p>I like to learn and be update with the latest technologies</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='box margin-none'>
                                <div className='text-center'>
                                    <h3>Personal Projects</h3>
                                </div>
                                <div className='project'>
                                    <span className='title'>UX/UI Design and Web development - </span>
                                    <a href='https://www.amigurum.is' target='_blank'>www.amigurum.is</a>
                                </div>
                                <div className='project'>
                                    <span className='title'>UX/UI Design and iOS development - </span>
                                    <span>Prototyping of a business app</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
