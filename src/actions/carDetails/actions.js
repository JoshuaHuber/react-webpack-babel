import axios from "axios";

export const ACTION_TYPES = {
  DID_BEGIN_GETTING:  'CAR_DETAILS_DID_BEGIN_GETTING',
  DID_END_GETTING: 'CAR_DETAILS_DID_END_GETTING'
}

function didBeginGetting () {
  console.log(ACTION_TYPES.DID_BEGIN_GETTING)
  return{
    type: ACTION_TYPES.DID_BEGIN_GETTING
  }
}
function didEndGetting (carDetail) {
  console.log(ACTION_TYPES.DID_END_GETTING)
  
  return{
    type: ACTION_TYPES.DID_END_GETTING,
    carDetail: carDetail
  }
}

export function getCarDetails(vin) {
  return function (dispatch) {
    dispatch(didBeginGetting());
    axios.request({url: `https://private-f14e4-interviewapi3.apiary-mock.com/vehicles/${vin}`})
      .then(response => {
        dispatch(didEndGetting(response.data));
      })
      .catch(e => {
        console.log(e)
    })
  }
}
