import React from 'react';
import CartBlog from '../../components/cart-blog-place/cart-blog'
import Mosque from '../../components/Mosque/Mosque'

import './homepage.styles.scss';
import BannerComponent from "../../components/banner-section/banner-section";
import FooterComponent from '../../components/footer/footer-component'
import AnimateSlider from '../../components/carrusel/react-animated-slider/animated-slider'
import CartBlogHotel from "../../components/card-blog-hotel/cart-blog-hotel";
import ServiceComponent from '../../components/services-compoent/services-component';
import BannerImage from '../../components/banner-image/banner-imeg'
import AirkineTickets from '../../components/Airline-Tickets/Airline-Tickets'
import PlacesAdvantures from '../../components/PlacesAdvantures/PlacesAdvantures'
import GuideCart from '../../components/guideCard/guide.component'
import OurSponsors from '../../components/our-sponsors/our-sponsors'


const HomePage = () => (

    <div className="home-wrapper">

        <BannerImage/>
            <ServiceComponent/>
            <AirkineTickets/>
        <BannerComponent/>
        <CartBlog/>
            <Mosque />
        <PlacesAdvantures/>
        <GuideCart/>
        <AnimateSlider/>
        <OurSponsors/>
        <FooterComponent/>
    </div>
);

export default HomePage;
