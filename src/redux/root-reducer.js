import { combineReducers } from 'redux';


import placeReducer from './place/place-reducer';
import guideReducer from './guide/guide-reducer'


const rootReducer = combineReducers({

   place: placeReducer,
   guide: guideReducer

});

export default rootReducer;