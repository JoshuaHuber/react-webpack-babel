import {get} from 'lodash';


function getCarDetails(state) {
  return get(state, 'carDetails');
}
function getCarDetails2(state) {
  return get(getCarDetails(state), 'carDetails');
}
function getVehicleDetails(state) {
  return get(getCarDetails2(state), 'vehicle')
}

export default function carDetailHelper(state) {
  return{
    getVehicleDetails: getVehicleDetails(state),
  };
}
