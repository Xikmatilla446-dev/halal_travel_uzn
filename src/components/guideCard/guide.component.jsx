import React from 'react';


import {withRouter} from 'react-router-dom'

import guide1 from '../../static/newimage/guide1.jpg'
import guide2 from '../../static/newimage/guide2.jpg'
import guide3 from '../../static/newimage/guide3.jpg'

import './guide.styles.css'

const GuideCart = ({history}) => {


        return(

            <div className="guides-page-container">

                <div className="services">
                    <h2>Our Best Events</h2>
                    <hr className="border secondary" />

                        <h4>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id maiores neque perferendis dolorem soluta vero provident aliquam nulla aut. Hic cupiditate dolorum sit perferendis optio sequi in. Adipisci, totam, expedita.
                        </h4>
                </div>

                <div className="events">
                    <div className="events-container">
                        <div className="event-item">
                            <i className="fa fa-globe"></i>
                            <p>Worls Tours</p>
                        </div>
                        <div className="event-item">
                            <i className="fa fa-plane"></i>
                            <p>Airline Tickets</p>
                        </div>
                        <div className="event-item">
                            <i className="fa fa-university"></i>
                            <p>Hotel REservation</p>
                        </div>
                        <div className="event-item">
                            <i className="fa fa-safari"></i>
                            <p>Advanture Tours</p>
                        </div>
                    </div>
                </div>


                <div className="services">
                    <h2>Tour Guides</h2>
                    <hr className="border secondary" />

                        <h4>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id maiores neque perferendis dolorem soluta vero provident aliquam nulla aut. Hic cupiditate dolorum sit perferendis optio sequi in. Adipisci, totam, expedita.
                        </h4>
                </div>

                <div className="packages">
                    <div className="packages-container guides">


                        <div className="card-guide">
                            <img src={guide1} alt=""/>
                                <div className="card-body">
                                    <div className="title">
                                        <p >Guide</p>
                                        <div
                                            onClick={()=> {
                                                history.push('/guide')}}
                                            className="stars">
                                            Ocean Guide
                                        </div>
                                    </div>
                                    <div className="description">
							<span>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Ratione, adipisci ipsum perspiciatis vel odio reiciendis
							</span>
                                    </div>
                                </div>

                        </div>

                        <div className="card-guide">
                            <img src={guide2} alt="" />
                                <div className="card-body">
                                    <div className="title">
                                        <p >Guide</p>
                                        <div
                                            onClick={()=> {
                                                history.push('/guide')}}
                                            className="stars">
                                            Ocean Guide
                                        </div>
                                    </div>
                                    <div className="description">
							<span>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Ratione, adipisci ipsum perspiciatis vel odio reiciendis
							</span>
                                    </div>
                                </div>

                        </div>

                        <div className="card-guide">
                            <img src={guide3} alt="" />
                                <div className="card-body">
                                    <div className="title">
                                        <p >Guide</p>
                                        <div
                                            onClick={()=> {
                                                history.push('/guide')}}
                                            className="stars">
                                            Ocean Guide
                                        </div>
                                    </div>
                                    <div className="description">
							<span>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Ratione, adipisci ipsum perspiciatis vel odio reiciendis
							</span>
                                    </div>

                                </div>


                        </div>
                    </div>
                </div>

            </div>


        )

    };


export default withRouter(GuideCart);