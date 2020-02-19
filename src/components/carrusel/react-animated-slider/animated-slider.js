import React from 'react';

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import content from './content';
import './custom.scss';
import './sourceView.scss'
const AnimateSlider = () => {
    return(
        <Slider autoplay={2000}>
            {content.map((item, index) => (
                <div className="animateSlide"
                    key={index}
                    style={{ background: `url('${item.image}') no-repeat center center`, backgroundSize:'cover', height:'99%    ' }}
                >
                    <div className="center">
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <button >{item.button}</button>
                    </div>
                </div>
            ))}
        </Slider>

        );
};


export default AnimateSlider;
