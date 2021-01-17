import React from 'react';
import image from '../../static/place/Samarkand-At-Night.jpg'
import './banner-styles.css';


const BannerImage = () => {

    return (
        <div>
            <div

                className="banner"
                style={{ background: `url('${image}') no-repeat`, backgroundSize: "cover" }}

            >

                <div className="centered">
                    <div className="vertical">
                        <h1>Welcome to Uzbekistan!</h1>
                        <hr className="border"/>
                        <h4>
                            Life is short to not explore the world!
                        </h4>
                        <button className="button bigger">Explore more</button>
                    </div>
                </div>
            </div>

        </div>

    )

};

export default BannerImage;