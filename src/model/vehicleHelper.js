import {get, head} from 'lodash';


function getYear(vehicle) {
  return get(vehicle, 'model_year')
}
function getModel(vehicle) {
  return get(vehicle, 'model')
}
function getImages(vehicle) {
  return get(vehicle, 'image_location_list')
}
function getPrimaryImage(vehicle) {
  return head(getImages(vehicle))
}
function getMake(vehicle) {
  return get(vehicle, 'make')
}
function getMileage(vehicle) {
  return get(vehicle, 'mileage')
}
function getVin(vehicle) {
  return get(vehicle, 'id')
}
function getCondition(vehicle) {
  return get(vehicle, 'new_used_flag')
}


export default function vehicleHelper(vehicle) {
  return {
    year: getYear(vehicle),
    model: getModel(vehicle),
    images: getImages(vehicle),
    primaryImage: getPrimaryImage(vehicle),
    make: getMake(vehicle),
    mileage: getMileage(vehicle),
    vin: getVin(vehicle),
    condition: getCondition(vehicle)
  }
  
}

