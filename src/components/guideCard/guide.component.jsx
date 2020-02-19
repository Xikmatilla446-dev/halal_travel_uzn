import React from 'react'
import Img from '../../static/guides/McCosker.jpg'

import './guide.styles.css'

const GuideCart = ({item}) => {

    const { id, userId, title, body} =item;

        return(

                    <div className="card">
                        <img className="card-image" src={Img} alt="guide"/>

                            <div className="card-text">
                                <span className="date"> {title}</span>

                                <p>{
                                    body
                                }
                                </p>
                            </div>
                            <div className="card-stats">
                                <div className="stat">
                                    <div className="value">4m</div>
                                    <div className="type">read</div>
                                </div>
                                <div className="stat border">
                                    <div className="value">5123</div>
                                    <div className="type">views</div>
                                </div>
                                <div className="stat">
                                    <div className="value">32</div>
                                    <div className="type">comments</div>
                                </div>
                            </div>
                    </div>

        )

    };


export default GuideCart;