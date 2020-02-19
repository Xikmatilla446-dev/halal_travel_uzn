import React from 'react';

import Samarkand from '../../static/place/Samarkand-Panorama-Big.jpg';

import './cart-blog-styles.css';

const CartBlog =  () => {

    return(

        <div>
            <div class="blog-post">
                <h1>Reacent  blog post</h1>
                <span class="muted-loream">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Autem molestiae ipsa nam aperiam veritatis deserunt non eos
            nulla doloribus vitae voluptates temporibus odio mollitia omnis
            nobis est illo, quod minus!
        </span>
            </div>

            <div class="blog-post-cards">
                <div class="blog-card">
                    <img src={Samarkand} alt=""/>
                        <div class="card-body">
                <span class = "card-date">
                    February 16.18
                </span>
                            <p class="card-text">

                                Five Reasons to stay villa resort
                            </p>
                        </div>
                </div>
                <div class="blog-card">
                    <img src={Samarkand} alt=""/>
                        <div class="card-body">
                <span class = "card-date">
                    February 16.18
                </span>
                            <p class="card-text">
                                Five Reasons to stay villa resort
                            </p>
                        </div>

                </div>
                <div class="blog-card">
                    <img src={Samarkand} alt=""/>
                        <div class="card-body">
                <span class = "card-date">
                    February 16.18
                </span >
                            <p class="card-text">
                                Five Reasons to stay villa resort
                            </p>
                        </div>
                </div>
            </div>



        </div>

    )


};


export default CartBlog;