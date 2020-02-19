import React, { useEffect }  from 'react';
import { connect } from "react-redux";
import * as actions from '../../redux/place/indexHelper';

import './place.page.styles.scss';
import PlaceComponent from '../../components/place/Places';




const PlacePage = (props) => {



    useEffect(() => {
        props.item();
    }, []);

        return(
            <div>
                <h1>Places</h1>

                <div className="content-wrapper">
                    <div className="portfolio-items-wrapper">

                        {
                            props.loading ? (<p>Lodinding</p>) :

                                props.places.filter((item, index)=> index < 6)
                                    .map(item => (<PlaceComponent key={item.id} item={item.title}/>))}

                    </div>
                </div>
            </div>

        )


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