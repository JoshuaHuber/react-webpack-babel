import {get} from 'lodash';


function getCarListings(state) {
  return get(state, 'carListings');
}
function getCarListings2(state) {
  return get(getCarListings(state), 'carListings');
}
function getData(state) {
  return get(getCarListings2(state), 'data')
}
function getVehicles(state) {
  return get(getData(state), 'vehicles')
}
function isGettingCarListings(state) {
  return get(getCarListings(state), 'isGetting')
}
function getPageCount(state) {
  return get(getData(state), 'page_count')
}

export default function carListingHelper(state) {
  return{
    getVehicles: getVehicles(state),
    isGettingCarListings: isGettingCarListings(state),
    getPageCount: getPageCount(state)
  };
}
