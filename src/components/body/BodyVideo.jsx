import React, {Component} from 'react'



import './Body.css'
import loding from '../../static/loding.jpg';
import mp4 from '../../static/uzbekiston.mp4';



const BodyVideo = () =>{



        return(


            <div>
            <div className="hello">
                <body>
                <div className="section">
                    <div className="banner-center">
                        <h1>Welcome to Uzbekiston</h1>
                        <h4>Discover our world-class hotels & resturant resort</h4>
                        <div className="banner-btns">
                            <button className="btns pink-btn">Explore the beauty</button>
                            <button className="btns normal-btn">Download</button>
                        </div>

                    </div>
                    <div className="video-container">
                        <div className="color-overlay"></div>
                        <video id="videoBG" poster={loding} autoPlay muted loop>
                            <source src={mp4} type="video/mp4"/>
                        </video>
                    </div>
                </div>
                </body>
                <span id="test"/>
            </div>

        </div>
        );

};


export default BodyVideo;