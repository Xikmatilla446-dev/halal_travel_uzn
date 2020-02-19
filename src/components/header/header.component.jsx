import React, {useState}  from 'react';
import {Link, NavLink} from "react-router-dom";

import './header.styles.css';
import logo from "../../static/logo1.png";


const Header = () =>{




    const [value, setValue] = useState(false);

    const toggleClassClick = () => {

        const newValue = !value;
        setValue(newValue);

        console.log(value)
    } ;



    return(


        <div className="wrap">
            <div className="menu">
                <div className="logo">
                    <img className="logoActive" src={logo} alt=""/>
                </div>
                <ul>
                    <li><NavLink  to='/' exact
                                  activeClassName="active"
                                  activeStyle={{
                                      color:'#fffff',
                                      textDecoration: 'underline'
                                  }}
                    >Portal haqida</NavLink></li>
                    <li><NavLink
                        activeClassName="active"
                        to={{
                        pathname: '/place',
                        hash:'#submit',
                        search:'?quick-sumit=true'
                    }}>Maqolalr</NavLink></li>
                    <li><NavLink
                        activeClassName="active"
                        to='/guide'>guide haida</NavLink></li>
                    <li><a href="#">Nimadur</a></li>
                    <li><a href="#">Malumotlar</a></li>
                    <li><a href="#">Kun va Tun</a></li>
                </ul>
            </div>
        </div>


    );

};

export default Header;