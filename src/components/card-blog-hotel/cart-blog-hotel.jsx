import React from 'react';


import './cart-blog.styles.css';
import Samarkand from "../../static/place/Samarkand-Panorama-Big.jpg";


const CartBlogHotel = ({id, name, title}) => {

    return(

        <div className="you-can-visit">
            <span>You can visit</span>
            <br/>
            <br/>
            <div >
                <div className="blog-card">
                    <img src={Samarkand} alt=""/>
                    <div className="card-body">
                        <p className="card-text">
                            {name} & wines
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
        </div>
    )


};

export default CartBlogHotel;