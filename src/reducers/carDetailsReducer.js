import {ACTION_TYPES as actionTypes} from "../actions/carListings/actions";

function carDetailInitialState() {
  return {
    isGetting: false,
    carListings: {}
  }
}

export default function carDetailsReducer(state = carDetailInitialState(), action) {
  switch (action.type){
    case actionTypes.DID_BEGIN_GETTING:
      return Object.assign({}, state, {
        isGetting: true
      });
    case actionTypes.DID_END_GETTING:
      return Object.assign({}, state, {
        isGetting: false,
        carDetails: action.carDetails
      });
    default:
      return state
  }
}
