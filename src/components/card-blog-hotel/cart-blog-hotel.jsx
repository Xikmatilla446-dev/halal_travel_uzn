import React from 'react';


import './cart-blog.styles.css';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import DataHotel from './dataHoleFace';


const CartBlogHotel = () => {

    return(



        <div class="you-can-visit">
            <span >You can visit</span>
            <br/>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={2000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 3,
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                    }
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={2}
                swipeable
            >
                {DataHotel.map((item, index) => (
                    <div
                        key={index}>
                        <div className="blog-card">

                            <img src={item.image} alt=""/>
                            <div className="card-body">
                                <p className="card-text">
                                    {item.title}
                                </p>
                                <div className="cart-footer">
                                    <div className="stars">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-o"></i>
                                        <i className="fa fa-star-o"></i>
                                    </div>
                                    <div className="reviews text-muted">
                                        4.921 rewiews
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                ))}
           </Carousel>



        </div>
    )


};

export default CartBlogHotel;