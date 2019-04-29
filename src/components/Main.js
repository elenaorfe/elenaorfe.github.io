import React, { Component } from 'react';
import {FormattedMessage} from 'react-intl';

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
                                    <h3><FormattedMessage id="main.experience.title"/></h3>
                                </div>
                                <div>
                                    <p><FormattedMessage id="main.experience.description"/></p>
                                </div>
                                <div className='row'>
                                    <div className='col-6'>
                                        <p className='title'><FormattedMessage id="main.experience.category1.title"/></p>
                                        <p className='item'><FormattedMessage id="main.experience.category1.item1"/></p>
                                        <p className='item'><FormattedMessage id="main.experience.category1.item2"/></p>
                                        <p className='item'><FormattedMessage id="main.experience.category1.item3"/></p>
                                    </div>
                                    <div className='col-6'>
                                        <p className='title'><FormattedMessage id="main.experience.category2.title"/></p>
                                        <p className='item'><FormattedMessage id="main.experience.category2.item1"/></p>
                                        <p className='item'><FormattedMessage id="main.experience.category2.item2"/></p>
                                        <p className='item'><FormattedMessage id="main.experience.category2.item3"/></p>
                                        <p className='item'><FormattedMessage id="main.experience.category2.item4"/></p>
                                        <p className='item'><FormattedMessage id="main.experience.category2.item5"/></p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-6'>
                                        <p className='title'><FormattedMessage id="main.experience.category3.title"/></p>
                                        <p className='item'><FormattedMessage id="main.experience.category3.item1"/></p>
                                        <p className='item'><FormattedMessage id="main.experience.category3.item2"/></p>
                                        <p className='item'><FormattedMessage id="main.experience.category3.item3"/></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-sm-6'>
                            <div className='box'>
                                <div className='text-center'>
                                    <h3><FormattedMessage id="main.learning.title"/></h3>
                                </div>
                                <div>
                                    <p><FormattedMessage id="main.learning.description1"/></p>
                                    <p><FormattedMessage id="main.learning.description2"/></p>
                                    <p><FormattedMessage id="main.learning.description3"/></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='box margin-none'>
                                <div className='text-center'>
                                    <h3><FormattedMessage id="main.personalprojects.title"/></h3>
                                </div>
                                <div className='project'>
                                    <span className='title'><FormattedMessage id="main.personalprojects.item1.title"/></span>
                                    <a href='https://www.amigurum.is' target='_blank'><FormattedMessage id="main.personalprojects.item1.link"/></a>
                                </div>
                                <div className='project'>
                                    <span className='title'><FormattedMessage id="main.personalprojects.item2.title"/></span>
                                    <span><FormattedMessage id="main.personalprojects.item2.description"/></span>
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
