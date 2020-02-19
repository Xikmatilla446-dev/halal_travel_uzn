import { TypesGuide } from "./guide-types";
import axios from 'axios';

export const getGuideStart = () => {

    return {
        type: TypesGuide.GET_GUIDE_START,
        loading: true
    }
};

export const getGuideSuccess = (payload) => {
 debugger
    return{
        type: TypesGuide.GET_GUIDE_SUCCESS,
        guides: payload,
        loading: false
    }
};

export const getGuideFail = (error) => {

    return{
        type: TypesGuide.GET_GUIDE_FAIL,
        error: error,
        loading: false
    }
};



export const getGuideItem = () => {
    debugger

    return dispatch =>{
        dispatch(getGuideStart())
        let url = 'https://jsonplaceholder.typicode.com/posts';
        debugger
        axios.get(url)
            .then(response => {
                console.log(response.data);

                dispatch(getGuideSuccess(response.data));


            })
            .catch( error => {
                debugger
                if (navigator.onLine){

                    dispatch(getGuideFail(error.response.data.error));}
            });

    }
};