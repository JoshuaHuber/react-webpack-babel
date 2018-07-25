import axios from "axios";

export const ACTION_TYPES = {
  DID_BEGIN_GETTING:  'CAR_LISTINGS_DID_BEGIN_GETTING',
  DID_END_GETTING: 'CAR_LISTINGS_DID_END_GETTING'
}

function didBeginGetting () {
  return{
    type: ACTION_TYPES.DID_BEGIN_GETTING
  }
}
function didEndGetting (carListings) {
  return{
    type: ACTION_TYPES.DID_END_GETTING,
    carListings: carListings
  }
}

export function getListings(page) {
  return function (dispatch) {
    dispatch(didBeginGetting());
    axios.request({url: `https://private-f14e4-interviewapi3.apiary-mock.com/vehicles?page=${page}`})
      .then(response => {
        dispatch(didEndGetting(response.data));
      })
      .catch(e => {
        console.log(e)
    })
  }
}
