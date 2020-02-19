import React from 'react';
import CartBlog from '../../components/cart-blog-place/cart-blog'

import './homepage.styles.scss';
import BannerComponent from "../../components/banner-section/banner-section";
import  FooterComponent from '../../components/footer/footer-component'
import SliderComponent from '../../components/carrusel/Slider/slider'
import AnimateSlider from '../../components/carrusel/react-animated-slider/animated-slider'

const HomePage = () => (

    <div>
        <BannerComponent/>
        <CartBlog/>
        <SliderComponent/>
        <AnimateSlider/>
        <br/>
        <FooterComponent/>
    </div>
);

export default HomePage;