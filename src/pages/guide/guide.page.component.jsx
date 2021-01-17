import React, { useEffect } from 'react';
import { connect } from "react-redux";
import * as actions from '../../redux/guide/index';

import GuideCart from '../../components/guideCard/guide.component';


import './guide.page.styles.css';
import left from'../../static/arrow-icon/left.svg'
import right from'../../static/arrow-icon/right.svg'
import GuideDescription from '../../components/description-guides/description-guide-component';


const GuidePage = (props) => {



    return(

    <div>
        <GuideDescription/>

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