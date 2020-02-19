import React from 'react';
import BackgroundImg from '../../static/place/Samarkand-At-Night.jpg'
import logo from '../../static/logo1.png'

import './Places.css';

const PlaceComponent = ({item}) => (


            <div className="portfolio-item-wrapper">
                <div className="portfolio-img-background"
                     style={{backgroundImage:`url(${BackgroundImg})`}} ></div>
                <div className="img-text-wrapper">
                    <div className="logo-wrapper">
                        <img src={logo}/>
                    </div>
                    <div className="subtitle">
                        {item}
                    </div>
                </div>


    </div>
);

export default PlaceComponent;