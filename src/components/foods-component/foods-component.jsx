import React from 'react';


import './foods-styles.css';
import food1 from '../../static/food/IMG_2849.jpg';
import food2 from '../../static/food/gotovka-shashlyka.jpg';
import food3 from '../../static/food/IMG_4243.jpg';
import star1 from '../../static/food/icon/star1.png';
import star2 from '../../static/food/icon/star2.png';


const FoodComponent = () => {

    return(
        <div className="git-card-f">
            <div className="card1-f">
                <h1>National foods</h1><br/>
                <h3>Everything is Halal & Delicious</h3>
                <div className="icon-f">
                    <img className="srt-f" src={star1} alt=""/>
                        <img className="srt-f" src={star1} alt=""/>
                            <img className="srt-f" src={star1} alt=""/>
                                <img className="srt-f" src={star1} alt=""/>
                                    <img className="srt-f" src={star2} alt=""/>
                </div>
            </div>
            <div className="card-f">
                <div className="img_card-f">
                    <div className="img-f">
                        <div className="pic-f">
                            <div className="coast-f">
                                <h4>
                                    Name : Shashlik. <br/>
                                    Include : Meat, salt, seasoning. <br/>
                                    Coast : 10000.
                                </h4>
                            </div>
                            <img className="pic-f" src={food1}/>
                        </div>
                        <div className="pic-f">
                            <div className="coast-f">
                                <h4>
                                    Name : Palov. <br/>
                                    Include : Meat, rice, carrots, salt, seasoning. <br/>
                                    Coast : 20000.
                                </h4>
                            </div>
                            <img className="pic-f" src={food2}/>
                        </div>
                        <div className="pic-f">
                            <div className="coast-f">
                                <h4>
                                    Name : Norin. <br/>
                                    Include : Meat, dough, qazi, onions seasoning. <br/>
                                    Coast : 25000.
                                </h4>
                            </div>
                            <img className="pic-f" src={food3}/>
                        </div>
                    </div>
                </div>
                <div className="info-f">
                    <h2>Information.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolores explicabo magnam
                        praesentium
                        voluptate. Ab aspernatur blanditiis culpa cumque debitis deleniti deserunt, eaque eligendi, enim
                        esse
                        et,
                        perspiciatis temporibus ut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
                        aut eos
                        impedit quia quis, saepe sit soluta? A cum obcaecati provident repellat. Amet harum nemo
                        obcaecati
                        sapiente soluta suscipit tempore! </p>
                </div>
            </div>
        </div>

            )

};

export default FoodComponent;