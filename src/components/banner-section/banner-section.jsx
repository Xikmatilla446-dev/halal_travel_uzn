import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './banner.css';
import BackgroundImg from "../../static/place/Samarkand-At-Night.jpg";
import BackgroundImg2 from "../../static/place/Samarkand-Sunset.jpg";
import BackgroundImg3 from "../../static/place/Samarkand-Panorama-Big.jpg";
import left from "../../static/arrow-icon/left.svg";
import right from "../../static/arrow-icon/right.svg";



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none"}}
            onClick={onClick}
        />
    );
}


class BannerComponent extends  React.Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    next() {

        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }

    render() {

        var settings = {
            dots: true,
            infinite: false,
            speed: 800,
            adaptiveHeight: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };


        return(


                <div >

                <div className="most-title">
                    <h1>A gorgeus place to <br/> enjoy your life</h1>
                    <span className="muted-loream">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Possimus quo amet quasi eum voluptatem distinctio, voluptates
            impedit recusandae voluptatum ullam doloribus rem ipsam facere
        </span>
                </div>
                    <div className="button-arrow">

                        <img className="arrow-left"
                             onClick={this.previous}
                             src={left} alt=""/>


                        <img className="arrow-right"
                             onClick={this.next}
                             src={right} alt=""/>

                    </div>

                <div>

                    <Slider className="carusel-slider"
                        ref={c => (this.slider = c)}  {...settings}>
                        <div className="most-title-img" >
                            <img
                                src={BackgroundImg} alt=""/>
                        </div>
                        <div className="most-title-img">
                            <img src={BackgroundImg2} alt=""/>
                        </div>

                        <div className="most-title-img">
                            <img src={BackgroundImg3} alt=""/>
                        </div>
                    </Slider>
                </div>
            </div>

        )

    }

};


export default BannerComponent;