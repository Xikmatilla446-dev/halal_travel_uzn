import React, { Component } from 'react';
import { Route, NavLink} from 'react-router-dom'
import './Navbar.css';
import logo from '../../static/halaltourismi-logo2.png';


const Navbar = () => {


    return (
        <div className="content">
                <div className="navbar">
                    <div className="navbar-container">
                        <img className="logo-image" src={logo} alt=""/>
                            <ul>
                                <li className="active">
                                    <NavLink  to='/' exact
                                              activeClassName="active"
                                              activeStyle={{
                                                  color:'#fffff',
                                                  textDecoration: 'underline'
                                              }}
                                    >
                                        Home</NavLink></li>
                                <li>Our services</li>
                                <li>Our Advantages</li>
                                <li>Our Events</li>
                                <li>Our Guides</li>
                                <li>Tesmonials</li>
                                <li>Contact us</li>
                            </ul>
                            <button className="button yellow">Take a tour</button>

                </div>

            </div>

        </div>
    )
};

export default Navbar;

