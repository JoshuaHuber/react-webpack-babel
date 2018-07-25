import axios from "axios";

export const ACTION_TYPES = {
  DID_BEGIN_GETTING:  'CAR_DETAILS_DID_BEGIN_GETTING',
  DID_END_GETTING: 'CAR_DETAILS_DID_END_GETTING'
}

function didBeginGetting () {
  return{
    type: ACTION_TYPES.DID_BEGIN_GETTING
  }
}
function didEndGetting (carDetails) {
  return{
    type: ACTION_TYPES.DID_END_GETTING,
    carDetails: carDetails
  }
}

export function getCarDetails(vin) {
  return function (dispatch) {
    dispatch(didBeginGetting());
    axios.request({url: `https://private-f14e4-interviewapi3.apiary-mock.com/vehicles/${vin}`})
      .then((response) => {
        dispatch(didEndGetting(response.data.data));
      })
      .catch(e => {
        console.log(e)
    })
  }
}
