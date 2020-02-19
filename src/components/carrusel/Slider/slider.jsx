import React, { Component } from "react";
import Slider from "react-slick";
import CartBlogHotel from '../../card-blog-hotel/cart-blog-hotel'
import left from "../../../static/arrow-icon/left.svg";
import right from "../../../static/arrow-icon/right.svg";
import './SliderComponent.styles.css'


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

export default class SliderComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {

            items:[
            {id:1, name: "Place Hotel", title:"lormamemaekdfcbajsdcvasghdvcfasd"},
            {id:2, name: "Place Hotel", title:"lormamemaekdfcbajsdcvasghdvcfasd"},
            {id:3, name: "Place Hotel", title:"lormamemaekdfcbajsdcvasghdvcfasd"},
            {id:4, name: "Place Hotel", title:"lormamemaekdfcbajsdcvasghdvcfasd"},
            {id:5, name: "Place Hotel", title:"lormamemaekdfcbajsdcvasghdvcfasd"},
            {id:6, name: "Place Hotel", title:"lormamemaekdfcbajsdcvasghdvcfasd"},
            {id:7, name: "Place Hotel", title:"lormamemaekdfcbajsdcvasghdvcfasd"},
            {id:8, name: "Place Hotel", title:"lormamemaekdfcbajsdcvasghdvcfasd"},
        ]};

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
            dots: false,
            infinite: false,
            speed: 500,
            adaptiveHeight: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 3,
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
                        slidesToShow: 2,
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

        const cards = this.state.items.map(p => (
            <div className="visit-cards" key = {p.id}>{
                 <CartBlogHotel  project = {p} />
            }
            </div>
        ));

        return (
            <div>
                <div className="button-arrow">

                    <img className="arrow-left"
                         onClick={this.previous}
                         src={left} alt=""/>


                    <img className="arrow-right"
                         onClick={this.next}
                         src={right} alt=""/>

                </div>


                <Slider className="carusel-slider"   ref={c => (this.slider = c)}  {...settings}>
                    {cards}
                     </Slider>
            </div>
        );
    }
}