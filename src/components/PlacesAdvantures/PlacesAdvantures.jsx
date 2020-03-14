import React from 'react';
import BackgroundImg from '../../static/place/Samarkand-At-Night.jpg'
import logo from '../../static/logo1.png'

import './PlacesAdvantures.css';

const PlacesAdvantures = ({item}) => (


            <div>
                <div className="services">
                    <h2>Aur Advantures</h2>
                    <hr className="border secondary" />

                        <h4>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id maiores neque perferendis
                            dolorem soluta vero provident aliquam nulla aut. Hic cupiditate dolorum sit perferendis
                            optio sequi in. Adipisci, totam, expedita.
                        </h4>
                </div>

                <div className="advantures">
                    <div className="advantures-container">
                        <div className="header">
                            <h3>All</h3>
                            <h3>World Tour</h3>
                            <h3>Ocean tour</h3>
                            <h3>Summer Trip</h3>
                            <h3>Sport Tour</h3>
                        </div>
                        <div className="tours">
                            <div className="image">
                                <img src="safari.jpeg" alt="" />
                            </div>
                            <div className="image">
                                <img src="mauntain.jpeg" alt="" />
                            </div>
                            <div className="image">
                                <img src="openbus.jpg" alt="" />
                            </div>
                            <div className="image">
                                <img src="singletravel.jpeg" alt="" />
                            </div>
                            <div className="image">
                                <img src="honeymoon2.jpeg" alt="" />
                            </div>
                            <div className="image">
                                <img src="honeymoon3.jpeg" alt="" />
                            </div>
                        </div>
                        <div className="lead-more">
                            <button className="button bigger">Lead More</button>
                        </div>
                    </div>
                </div>


            </div>
);

export default PlacesAdvantures;