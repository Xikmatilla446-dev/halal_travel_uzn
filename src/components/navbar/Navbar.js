import React, { Component } from 'react';
import { Route, NavLink} from 'react-router-dom'
import './Navbar.css';
import Body from '../body/BodyVideo'
import About from '../about/About'
import logo from '../../static/logo1.png';
import i18n from '../../i18n';
import { withNamespaces } from 'react-i18next';

const Navbar = ({ t }) =>{

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };


    return (
            <div className='Blog'>
                <header className="main-box">
                    <div className="box box-1"><img src={logo}/></div>
                    <div className="box box-2">
                        <nav className="menu">
                            <ul className="links">
                                <li><NavLink  to='/' exact
                                              activeClassName="active"
                                              activeStyle={{
                                                  color:'#ffffd',
                                                  textDecoration: 'underline'
                                              }}
                                >{t('HOME')}</NavLink></li>
                                <li><NavLink to={{
                                    pathname: '/place',
                                    hash:'#submit',
                                    search:'?quick-sumit=true'
                                }}>{t('New Post- ')}</NavLink>
                                </li>
                                <li><a href="#">{t('SERVICES')}</a></li>
                                <li><a href="#">{t('PORTFOLIO')}</a></li>
                                <li><a href="#">{t('CARER')}</a></li>
                                <li><a href="#">{t('CONTACT')}</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="box box-3">
                        <div href="#" className="message">
                            <button type="button" className="button">
                                <span className="text-1 none"><span className="none">Quick Quote</span></span>
                            </button>
                        </div>
                        <div href="#" className="text-p"><p className="button ">
                            <span className="text-2"> Sales</span>
                            <br/>
                                <span className="text-3">+91 730 414 1777</span></p></div>

                        <button style={{backgroundColor:'red'}} onClick={() => changeLanguage('en')}>en</button>
                        <button style={{backgroundColor:'red'}} onClick={() => changeLanguage('uz')}>uz</button>


                    </div>
                    {/*<h1>{t('desTest')}</h1>*/}
                </header>

                <Route path='/' exact component={Body}/>
                <Route path='/about' component={About}/>
            </div>
        );
    };


export default withNamespaces()(Navbar);

