import {PlaceActionTypes} from "./place-types";
import {updateObject} from '../utility';

const INITIAL_STATE = {
    places: [],
    error: null,
    loading: false
};

const getPlaceStart = (state, action) => {

    return updateObject(state, {error: null, loading: true});
};


const getPlaceSuccess = (state, action) => {

    return updateObject(state, {
        places: action.places,
        error: null,
        loading: false

    })
};

const getPlaceFail = (state, action) => {

    return updateObject(state, {
        error: action.error,
        loading: false
    })
};


const placeReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case PlaceActionTypes.GET_PLACES_START:
            return getPlaceStart(state, action);

        case PlaceActionTypes.GET_PLACES_SUCCESS:
            return getPlaceSuccess(state, action);

        case PlaceActionTypes.GET_PLACES_FAIL:
            return getPlaceFail(state, action);


        default:
            return state;

    }


};

export default placeReducer;