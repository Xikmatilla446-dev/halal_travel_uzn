import React from 'react';

import './description-guide-styles.css';
import star1 from "../../static/food/icon/star1.png";
import star2 from "../../static/food/icon/star2.png";
import guide from '../../static/guides/guide3.jpg';
import mp3 from '../../static/guides/mp3/7.mp3';


const GuideDescription = () => {


    return(
        <div className="git-card-e">

            <div className="card1-e">
                <h1>SADIO MANE</h1><br/>

                <div className="icon-e">
                    <img className="srt-e" src={star1} alt=""/>
                    <img className="srt-e" src={star1} alt=""/>
                    <img className="srt-e" src={star1} alt=""/>
                    <img className="srt-e" src={star1} alt=""/>
                    <img className="srt-e" src={star2} alt=""/>
                </div>

            </div>
            <div className="card-guide-e">
                <div className="card2-e">
                    <div className="img-guide-e">
                        <img src={guide} />
                    </div>
                    <div className="info-e">
                        <div className="greet-e">
                            <h4>Assalomu Alaykum & Welcome</h4>
                        </div>
                        <br/>
                            <h2><span>I'M</span> SADIO MANE</h2>
                            <hr/>
                                <table>

                                    <tr>
                                        <th>Gender :</th>
                                        <td>Male</td>
                                    </tr>
                                    <tr>
                                        <th>Age :</th>
                                        <td>27</td>
                                    </tr>
                                    <tr>
                                        <th>Nationality :</th>
                                        <td>Uzbek</td>
                                    </tr>
                                    <tr>
                                        <th>Language :</th>
                                        <td> Arabian, English, French</td>
                                    </tr>
                                </table>
                                <div className="footer-e">
                                    <audio src={mp3} controls></audio>
                                </div>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default GuideDescription;