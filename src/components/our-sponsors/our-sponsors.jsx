import React from 'react';

import client from '../../static/newimage/client.jpg';
import sponsor from '../../static/newimage/sponsor.png';
import slikroad from '../../static/newimage/slikroad.jpeg';
import touristuz from '../../static/newimage/touristuz.png';
import shaxrisabz from '../../static/newimage/shaxrisabz.jpeg';

import './our-sponsors.styles.css';

const OurSponsors = () => {


    return(
        <div className="ou-sponsor">

            <div className="services">
                <h2>Happy Clients</h2>
                <hr className="border secondary"/>

                    <h4>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id maiores neque perferendis dolorem
                        soluta vero provident aliquam nulla aut. Hic cupiditate dolorum sit perferendis optio sequi in.
                        Adipisci, totam, expedita.
                    </h4>
            </div>

            <div className="clients">
                <div className="clients-container">
                    <img src={client} alt="" />
                        <div className="comment">
                            " Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Ullam vel reprehenderit illo voluptas reiciendis neque tempore earum,
                            sapiente eveniet incidunt cum amet laboriosam provident ad libero? Ipsa quidem saepe culpa!
                            "
                        </div>
                        <div>
                            <i className="fa fa-user"></i>
                            Director of
                            <span className="link">Traveltour.com</span>
                        </div>
                </div>
            </div>

            <div className="services">
                <h2>Our Sponsors</h2>
                <hr className="border secondary" />

                    <h4>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id maiores neque perferendis dolorem
                        soluta vero provident aliquam nulla aut. Hic cupiditate dolorum sit perferendis optio sequi in.
                        Adipisci, totam, expedita.
                    </h4>
            </div>

            <div className="events ">
                <div className="events-container sponsors">
                    <div className="event-item">
                        <img src={sponsor} alt="" />
                    </div>
                    <div className="event-item">
                        <img src={slikroad} alt=""/>
                    </div>
                    <div className="event-item">
                        <img src={touristuz} alt="" />
                    </div>
                    <div className="event-item">
                        <img src={shaxrisabz} alt="" />
                    </div>
                </div>
            </div>


        </div>
    )
};
export default OurSponsors;
