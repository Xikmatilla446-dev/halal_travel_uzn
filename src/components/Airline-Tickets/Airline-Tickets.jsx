import React from 'react';


import plane from '../../static/plane.jpg';

import './Airline-Tickets.css';


const AirkineTickets = () => {


    return(

        <div className="services-items">

            <div className="items-container">
                <div className="items-left">
                    <h3>Airline tickets</h3>
                    <p>
                        Uzbekistan Airways airline offers you to take an amazing flight to a historic palce in Central Asia.
                        There are two flight classes - business and economy. Economy class seats are equipped with tables, sliding trays and reading lights. In the business class, the armchairs have adjustable headrests and fold out flat. Passengers also receive pillows and woollen blankets.

                    </p>

                    <div class="ticket-buttons">
                        <button className="button business-class">Business Class</button>

                        <button className="button econom-class">Econom Class</button>
                    </div>
                </div>
                <div className="items-right">
                    <img src={plane} alt="" width="100%" />
                </div>
            </div>
        </div>


    )
};

export default AirkineTickets;