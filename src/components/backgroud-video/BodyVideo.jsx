import React, {Component} from 'react'



import './Body.css'
import loding from '../../static/loding.jpg';
import mp4 from '../../static/uzbekiston.mp4';



const BodyVideo = () =>{



        return(


            <div>
                <div className="section">

                        <div className="vertical">
                            <h1>Welcome to Uzbekistan!</h1>
                            <hr className="border"/>
                            <h4>
                                Life is short to not explore the world!
                            </h4>
                            <button className="button bigger">Explore more</button>
                        </div>
                    <div className="video-container">
                        <div className="color-overlay"></div>

                        <video id="videoBG" poster={loding} autoPlay muted loop>
                            <source src={mp4} type="video/mp4"/>
                        </video>
                    </div>
                </div>

        </div>
        );

};


export default BodyVideo;
