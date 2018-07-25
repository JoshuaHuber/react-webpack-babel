import {ACTION_TYPES as actionTypes} from "../actions/carDetails/actions";

function carDetailsInitialState() {
  return {
    isGetting: false,
    carDetails: {}
  }
}

export default function carDetailsReducer(state = carDetailsInitialState(), action) {
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
      case actionTypes.DID_NOT_FIND_DETAILS:
      return Object.assign({}, state, {
        isGetting: false,
        carDetails: {}
      });
    default:
      return state
  }
}
