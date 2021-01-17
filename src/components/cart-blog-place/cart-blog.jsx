import React from 'react';

import medician from '../../static/popular/medician.jpeg';
import honeymoon1 from '../../static/popular/honeymoon1.jpg';
import mauntain2 from '../../static/popular/mauntain2.jpeg';

import './cart-blog-styles.css';

const CartBlog = () => {

    return (

        <div className="packages-blog">
            <div className="services">
                <h2>Most popular packages</h2>
                <hr className="border secondary"/>
                <h4>
                    we provide variety of packages in different prices so that you can choose one of them according to
                    your needs and enjoy fully integrated platform of us</h4>
            </div>

            <div className="packages">
                <div className="packages-container">

                    <div className="card-blog">
                        <img src="https://images.unsplash.com/photo-1580217442567-daaff0cf13ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                        <div className="card-body">
                            <div className="title">
                                <p>Mountain tour</p>
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
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFQuP2rLHibm0HE9MMwuUuJx20BUPG_LSD3CDZjVUJqaHvott1" alt=""/>
                        <div className="card-body">
                            <div className="title">
                                <p>Historical tour</p>
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
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbH0qAkSverEcp-rpFuNn8coHb6uPyyJXYgLH77gTPK1wFht2L" alt=""/>
                        <div className="card-body">
                            <div className="title">
                                <p>Culture tour</p>
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


export default CartBlog;