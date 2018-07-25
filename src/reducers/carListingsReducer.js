import {ACTION_TYPES as actionTypes} from "../actions/carListings/actions";

function carListingsInitialState() {
  return {
    isGetting: false,
    carListings: []
  }
}

export default function carListingsReducer(state = carListingsInitialState(), action) {
  switch (action.type){
    case actionTypes.DID_BEGIN_GETTING:
      return Object.assign({}, state, {
        isGetting: true
      })
    case actionTypes.DID_END_GETTING:
      return Object.assign({}, state, {
        isGetting: false,
        carListings: action.carListings
      })
    default:
      return state
  }
}
