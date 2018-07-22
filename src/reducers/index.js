import {combineReducers} from 'redux';
import carListingsReducer from "./carListingsReducer";


export default combineReducers({
  carListings: carListingsReducer
})
