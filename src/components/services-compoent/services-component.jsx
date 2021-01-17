import React from 'react';

import './services.styles.css';

const ServiceComponent = () => {

    return(
        <div className="services-person-class">
            <div className="services">
                <h2>Our great services</h2>
                <hr className="border secondary"/>

                    <h4>
                        we would give everyone to travel in an easy, safe way, we worry about all the organizational stuff. You shall just enjoy your journey
                    </h4>
            </div>

            <div className="services-items">
                <div className="services-container">
                    <div  className="active-service">
                        <i className="fa fa-plane"></i>
                        <span>Airline Tickets</span>
                    </div>
                    <div>
                        <i className="fa fa-globe"></i>
                        <span>International Support</span>
                    </div>
                    <div>
                        <i className="fa fa-heartbeat"></i>
                        <span>Healthcare And Safety</span>
                    </div>
                    <div>
                        <i className="fa fa-credit-card"></i>
                        <span>Easy Payment Services</span>
                    </div>
                </div>
            </div>

        </div>
    )



}

export default ServiceComponent;