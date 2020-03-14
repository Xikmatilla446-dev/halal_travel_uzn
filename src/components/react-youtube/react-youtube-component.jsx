import React from 'react';
import ReactPlayer from 'react-player';

import './react-youtube.styles.css';

const ReactYouTube = () => {
    return (

        <div className="wrap">
            <div className="services">
                <h2>Best Tourist Attractions to Visit in Uzbekistan</h2>
                <hr className="border secondary" />
                <h4>
                    "Live life to the fullest, and focus on the positive"
                </h4>
            </div>



            <div className="row">
                <div className="col">
                    <figure>
                        <ReactPlayer
                            className='react-player'
                            url='https://youtu.be/_ZH1WsIr2Zk'
                            width='100%'
                            height='80vh'
                            controls
                        />

                        <figcaption>
                            <h4>Welcome to Uzbekistan</h4>
                            <p>Uzbekistan, where monuments of ancient cultures of different ages are concentrated, is
                                rightly called a treasury of history. Ichan-Kala complex in Khiva, historical centers of
                                Bukhara, Shakhrizabs and Samarkand are included in the UNESCO World Heritage list.</p>

                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    )
};

export default ReactYouTube;