import React from 'react';
import BackgroundImg from '../../static/place/Samarkand-At-Night.jpg'
import logo from '../../static/logo1.png'
import safari from '../../static/newimage/safari.jpeg'
import mauntain from '../../static/newimage/mauntain.jpeg'
import openbus from '../../static/newimage/openbus.jpg'
import singletravel from '../../static/newimage/singletravel.jpeg'
import honeymoon2 from '../../static/newimage/honeymoon2.jpeg'
import honeymoon3 from '../../static/newimage/honeymoon3.jpeg'


import dataItem from './placesAdvantureData'
import './PlacesAdvantures.css';
import CartBlogHotel from "../card-blog-hotel/cart-blog-hotel";
import Carousel from "react-multi-carousel";
import {withRouter} from "react-router";

const PlacesAdvantures = ({history}) => (


            <div className="Places-Advantures">
                <div className="services">
                    <h2>Our Advantures</h2>
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
                        <div className="wrap-palces">
                            <div className="image-place">


                                {dataItem.map((item, index) => (
                                    <div
                                        key={index}
                                        className="col-place">
                                        <div className="figure-place">
                                            <img src={item.image} alt=""/>
                                            <div className="tex-palce">
                                                <h3>WELOCME TO  {item.title}</h3>
                                                <br/>
                                                <p>{item.description}</p>
                                                <button className="place-button">{item.button}</button>
                                            </div>

                                        </div>
                                    </div>


                                        ))}




                            </div>
                        </div>

                                <div className="lead-more">
                            <button
                                onClick={()=> {
                                    history.push('/place')}}


                                className="button bigger">Lead More</button>
                        </div>
                    </div>
                </div>


            </div>
);

export default withRouter(PlacesAdvantures);