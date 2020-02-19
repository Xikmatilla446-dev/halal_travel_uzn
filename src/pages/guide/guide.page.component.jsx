import React, { useEffect } from 'react';
import { connect } from "react-redux";
import * as actions from '../../redux/guide/index';

import GuideCart from '../../components/guideCard/guide.component';


import './guide.page.styles.css';
import left from'../../static/arrow-icon/left.svg'
import right from'../../static/arrow-icon/right.svg'



const GuidePage = (props) => {

   const onChlicked = () => {
       debugger
       props.item();
    };


    return(

    <div>
        <button onClick={onChlicked}>Item</button>

        <div className="Position">
            <button className="before-btn"><img className="before-arrow"
                                                src={left} alt=""/>
            </button>
            <div className="cards">
               {
                   props.loading ? (<p>Lodinding</p>) :

                       props.guidesItem.filter((item, index) => index< 4)
                           .map((item) => (<GuideCart key={item.id} item={item}/>))

               }

        </div>
        <button className="after-btn"><img className="after-arrow"
                                           src={right}
                                           alt=""/></button>

    </div>


    </div>
);
};


const mapStateToProps = (state) => ({

    loading: state.guide.loading,
    guidesItem: state.guide.guides

});



const mapDispatchToProps  = dispatch => {

    return{
        item:() => dispatch(actions.getGuideItem())
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(GuidePage);