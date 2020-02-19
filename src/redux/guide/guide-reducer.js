import { TypesGuide } from "./guide-types";
import { updateObject } from '../utility';

const INITIAL_STATE = {
    guides: [],
    error: null,
    loading: false
};

const getGuideStart = (state, action) => {

    return updateObject(state, {error: null, loading: true});
};


const getGuideSuccess = (state, action) => {
debugger
    return updateObject(state, {
        guides: action.guides,
        error: null,
        loading: action.loading

    });
};

const getGuideFail = (state, action) => {

    return updateObject(state, {
        error: action.error,
        loading: false
    })
};


const guideReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case TypesGuide.GET_GUIDE_START:
            return getGuideStart(state, action);

        case TypesGuide.GET_GUIDE_SUCCESS:
            return getGuideSuccess(state, action);

        case TypesGuide.GET_GUIDE_FAIL:
            return getGuideFail(state, action);


        default:
            return state;

    }


};

export default guideReducer;