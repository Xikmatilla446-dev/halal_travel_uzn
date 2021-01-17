import React, { useEffect }  from 'react';
import { connect } from "react-redux";
import * as actions from '../../redux/place/indexHelper';

import './place.page.styles.scss';
import BodyVideo from '../../components/backgroud-video/BodyVideo';
import ReactYouTube from '../../components/react-youtube/react-youtube-component'
import FooterComponent from "../../components/footer/footer-component";
import OurSponsors from "../../components/our-sponsors/our-sponsors";




class PlacePage extends React.Component {
    constructor() {
        super();

        this.state = {
            intervalId: 0
        };
    }

    componentDidMount() {
        this.scrollToTop();
    }

    scrollStep() {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - 50);
    }

    scrollToTop() {
        let intervalId = setInterval(this.scrollStep.bind(this), 16.66);
        this.setState({intervalId: intervalId});
    }

    render() {

        return(
            <div className="home-wrapper">
                <BodyVideo/>
                <ReactYouTube/>
                <OurSponsors/>
                <FooterComponent/>

            </div>

        )
    }


};






const mapStateToProps = (state) => ({

    loading: state.place.loading,
    places: state.place.places

});



const mapDispatchToProps  = dispatch => {

    return{
        item:() => dispatch(actions.getPlaceItem())
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(PlacePage);