import React from 'react';
import {withRouter} from 'react-router-dom'

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import content from './content';
import './custom.scss';
import './sourceView.scss';



const toPush = () => {

};


const AnimateSlider = ({history}) => {
    return(
            <div>
                <div className="services">
                    <h2>Foods</h2>
                    <hr className="border secondary" />

                    <h4>
                        You can eat and enjoy uzbek national foods. There are a lot of delicious national foods in Uzbekistan.</h4>
                </div>

                    <Slider autoplay={2500} className="slider-wrapper">
                        {content.map((item, index) => (
                            <div
                                key={index}
                                className="slider-content"
                                style={{ background: `url('${item.image}') no-repeat center center` }}
                            >
                                <div className="inner">
                                    <h1>{item.title}</h1>
                                    <p>{item.description}</p>
                                    <button onClick={()=> {
                                        history.push('/food')}}>{item.button}</button>
                                </div>
                            </div>
                        ))}
                    </Slider>

                </div>


            );
};


export default withRouter(AnimateSlider);
