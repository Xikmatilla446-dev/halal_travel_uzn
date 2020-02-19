import {PlaceActionTypes} from "./place-types";
import axios from 'axios';

export const getPlaceStart = () => {
    return {
        type: PlaceActionTypes.GET_PLACES_START,
        loading: true
    };
};

export const getPlaceSuccess = (payload) => {

    return {
        type: PlaceActionTypes.GET_PLACES_SUCCESS,
        places: payload,
        loading: false

    }

};


export const getPlaceFail = (error) => {

    return {
        type: PlaceActionTypes.GET_PLACES_FAIL,
        error: error,
        loading: false
    }
};


export const getPlaceItem = () => {



    debugger
    return dispatch => {
        dispatch(getPlaceStart());
        let url = 'https://jsonplaceholder.typicode.com/posts';
        debugger
        axios.get(url)
            .then(response => {
                console.log(response.data);

                debugger
                if (navigator.onLine) {
                    dispatch(getPlaceSuccess(response.data));
                }
            })
            .catch( error => {
                 debugger
                if (navigator.onLine){

                    dispatch(getPlaceFail(error.response.data.error));}
            });

    }


};