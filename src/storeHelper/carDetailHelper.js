import {get} from 'lodash';


function getCarDetail(state) {
  return get(state, 'carDetail');
}
function getCarDetail2(state) {
  return get(getCarDetail(state), 'carDetail');
}
function getData(state) {
  return get(getCarDetail2(state), 'data')
}
function getDetail(state) {
  return get(getData(state), 'vehicles')
}
function isGettingCarDetail(state) {
  return get(getCarDetail(state), 'isGetting')
}

export default function carListingHelper(state) {
  return{
    getDetail: getDetail(state),
    isGettingCarListings: isGettingCarDetail(state),
  };
}
