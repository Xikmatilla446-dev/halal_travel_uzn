import React from 'react';

import './banner.css';
import DataBaner from "./data-banner";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


class BannerComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {


        return (

            <div className="most-wrapper">

                <div className="Places-Advantures">
                    <div className="services">
                        <h2>Places to Explore</h2>
                        <br/>
                        <br/>
                        <hr className="border secondary"/>

                    </div>
                </div>


                <Carousel
                    arrows
                    autoPlay
                    autoPlaySpeed={5000}
                    keyBoardControl={true}
                    customTransition="all 1s"
                    transitionDuration={500}
                    centerMode={false}
                    className=""
                    containerClass=""
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    minimumTouchDrag={80}
                    renderButtonGroupOutside={false}
                    renderDotsOutside
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 1
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 1
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 1
                        }
                    }}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                >


                    {DataBaner.map((item, index) => (
                        <div
                            key={index}
                            className="most-img">
                            <div className="body-text-carusel">
                                <p className="text-carusel">{item.title}</p>
                                <button className="button-visit">Visit now</button>
                            </div>
                            <img src={item.image} alt=""/>
                        </div>
                    ))}

                </Carousel>

            </div>

        )

    }

};


export default BannerComponent;
