import React from 'react';

import medician from '../../static/popular/medician.jpeg';
import honeymoon1 from '../../static/popular/honeymoon1.jpg';
import mauntain2 from '../../static/popular/mauntain2.jpeg';

import '../card-blog-hotel/cart-blog.styles.css';

const Mosque = () => {

    return (

        <div className="packages-blog">
            <div className="services">
                <h2>Mosques</h2>
                <hr className="border secondary"/>
                Mosques
                <h4>
                    There are 2043 mosques in Uzbekistan. Wihle using our services you have an opportunity to know about
                    all uzbek mosques. We offer to show you the nierest mosque from your location. And also using our
                    app give you to find easily all mosques in Uzbekistan</h4>
            </div>
            <div className="packages">
                <div className="packages-container">

                    <div className="card-blog">
                        <img src="https://www.advantour.com/img/uzbekistan/tashkent/minor-mosque2.jpg" alt=""/>
                        <div className="card-body">
                            <div className="title">
                                <p>Minor</p>

                            </div>
                            <div className="description">
							<span>

Little Ring Road, Tashkent, Uzbekistan <br/>
                                87PG+42 Tashkent, Uzbekistan <br/>
									</span>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="card-icons-corsor">
                                <i className="fa fa-map-marker"></i>
                                location
                            </div>
                        </div>
                    </div>

                    <div className="card-blog">
                        <img src="https://i.pinimg.com/564x/89/ed/3c/89ed3c3ab6d9c24b99ae6d3dbb5b4cce.jpg" alt=""/>
                        <div className="card-body">
                            <div className="title">
                                <p>Mosques</p>

                            </div>
                            <div className="description">
							<span>
								Zarkaynar Street, Tashkent, Uzbekistan <br/>
                86PR+XG Tashkent, Uzbekistan <br/>
							</span>
                            </div>
                        </div>

                        <div className="card-footer">
                            <div className="card-icons-corsor">
                                <i className="fa fa-map-marker"></i>
                                location
                            </div>
                        </div>
                    </div>


                    <div className="card-blog">
                        <img src="https://i.pinimg.com/564x/f7/5a/42/f75a42127c10e1ff733450eb5b6c7c65.jpg" alt=""/>
                        <div className="card-body">
                            <div className="title">
                                <p>Mosques</p>

                            </div>
                            <div className="description">
							<span>
							Mannon Uygur Street, Tashkent, Uzbekistan <br/>
                                86F3+4W Tashkent, Uzbekista
							</span>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="card-icons-corsor">
                                <i className="fa fa-map-marker"></i>
                                location
                            </div>
                        </div>
                    </div>


                </div>
            </div>


        </div>

    )


};


export default Mosque;