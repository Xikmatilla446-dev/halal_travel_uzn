import React from 'react';

import medician from '../../static/popular/medician.jpeg';
import honeymoon1 from '../../static/popular/honeymoon1.jpg';
import mauntain2 from '../../static/popular/mauntain2.jpeg';

import './cart-blog-styles.css';

const   Mosque =  () => {

    return(

        <div className="packages-blog">
            <div className="services">
                <h2>Most popular packages</h2>
                <hr className="border secondary" />
                Mosques
                <h4>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id maiores neque perferendis dolorem
                    soluta vero provident aliquam nulla aut. Hic cupiditate dolorum sit perferendis optio sequi in.
                    Adipisci, totam, expedita.
                </h4>
            </div>

            <div className="packages">
                <div className="packages-container">

                    <div className="card-blog">
                        <img src={honeymoon1} alt="" />
                        <div className="card-body">
                            <div className="title">
                                <p>Honeymoon</p>
                                <div className="stars">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                            </div>
                            <div className="description">
							<span>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Ratione, adipisci ipsum perspiciatis vel odio reiciendis
							</span>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div>
                                <i className="fa fa-map-marker"></i>
                                World Wide
                            </div>
                            <div>
                                <i className="fa fa-clock-o"></i>
                                7 Days
                            </div>
                            <div>
                                <i className="fa fa-dollar"></i>
                                2600
                            </div>
                        </div>
                    </div>

                    <div className="card-blog">
                        <img src={mauntain2} alt="" />
                        <div className="card-body">
                            <div className="title">
                                <p>Mauntain tour</p>
                                <div className="stars">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                            </div>
                            <div className="description">
							<span>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Ratione, adipisci ipsum perspiciatis vel odio reiciendis
							</span>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div>
                                <i className="fa fa-map-marker"></i>
                                World Wide
                            </div>
                            <div>
                                <i className="fa fa-clock-o"></i>
                                7 Days
                            </div>
                            <div>
                                <i className="fa fa-dollar"></i>
                                2600
                            </div>
                        </div>
                    </div>


                    <div className="card-blog">
                        <img src={medician} alt="" />
                        <div className="card-body">
                            <div className="title">
                                <p>Honeymoon</p>
                                <div className="stars">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                            </div>
                            <div className="description">
							<span>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Ratione, adipisci ipsum perspiciatis vel odio reiciendis
							</span>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div>
                                <i className="fa fa-map-marker"></i>
                                World Wide
                            </div>
                            <div>
                                <i className="fa fa-clock-o"></i>
                                7 Days
                            </div>
                            <div>
                                <i className="fa fa-dollar"></i>
                                2600
                            </div>
                        </div>
                    </div>


                </div>
            </div>


        </div>

    )


};


export default Mosque;