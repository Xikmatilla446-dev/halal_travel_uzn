import React from 'react';

import Member1 from '../../static/testiomonial/Member1.png'
import Member2 from '../../static/testiomonial/Member2.png'
import Member4 from '../../static/testiomonial/Member4.png'

import './footer-styles.css';


const FooterComponent = () => {

    return (


        <div>

            <div className="footer">
                <div className="footer-menus">
                    <ul>
                        <li>About us</li>
                        <li>Terms & Condisions</li>
                        <li>Privacy Policy</li>
                        <li>Help</li>
                        <li>Rooms</li>
                    </ul>
                    <ul>
                        <li>Our location</li>
                        <li>The hosts</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Restaurant</li>
                    </ul>
                    <ul>
                        <li><i>Adress</i></li>
                        <li>98 West 2th Street, Suite 721 <br/> New York 10016</li>
                        <li><i>Phone</i>: <br/> +(1) 435 35 33</li>
                        <li><i>Email</i> <br/> info@yourdomain.com</li>
                    </ul>
                    <form action="">
                        <label htmlFor="">Sign up for newsletter</label>
                        <input type="text" placeholder="Your email..."/>
                    </form>
                </div>
                <div className="copyright">
            <span>
                Copyright 2020 All rights recieved | This webside is made by IVAT
            </span>
                    <div>
                        <i className="fa fa-facebook"></i>
                        <i className="fa fa-twitter"></i>
                        <i className="fa fa-telegram"></i>
                    </div>

                </div>


            </div>
        </div>

    )


};

export default FooterComponent;