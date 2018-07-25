import {combineReducers} from 'redux';
import carListingsReducer from "./carListingsReducer";
import carDetailsReducer from "./carDetailsReducer";


export default combineReducers({
  carListings: carListingsReducer,
  carDetails: carDetailsReducer
})
