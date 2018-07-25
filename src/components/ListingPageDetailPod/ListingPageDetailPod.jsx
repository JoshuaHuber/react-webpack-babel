import React from 'react';
import 'styles/base/components/ListingPageDetailPod.sass';
import {head} from 'lodash';
import vehicleHelper from "../../model/vehicleHelper";
import Checkbox from "../../common/CheckBox/CheckBox";
import PriceSlider from "../../common/PriceSlider/PriceSlider";
import PropTypes from 'prop-types';

const ListingPageDetailPod = (props) => {
  const {vehicle, handleVehicleClick} = props;
  
  const model = vehicleHelper(vehicle).model;
  const make = vehicleHelper(vehicle).make;
  const mileage = vehicleHelper(vehicle).mileage;
  const year = vehicleHelper(vehicle).year;
  const primaryImage = vehicleHelper(vehicle).primaryImage;
  const vin = vehicleHelper(vehicle).vin;
  const condition = vehicleHelper(vehicle).condition;
  
  return(
    <div className='listing-page-detail-pod' onClick={handleVehicleClick}>
      <div className='image-container'>
        <Checkbox handleClick={()=> {}}/>
        <img src={primaryImage} alt=""/>
      </div>
      <div className="stats">
        <div className="title">{year} {make} {model}</div>
        {
          vin
          ? <div className="vin">VIN: {vin}</div>
          : null
        }
        {
          mileage
          ? <div className="mileage">MILES: {mileage}</div>
          : null
        }
        {
          condition
          ? <div className="condition">CONDITION: {condition}</div>
          : null
        }
        </div>
      <PriceSlider listPrice={15000} minPrice={12680}/>
    </div>
  )
};

ListingPageDetailPod.propTypes = {
  vehicle: PropTypes.object.isRequired,
  handleVehicleClick: PropTypes.func.isRequired
};

export default ListingPageDetailPod;
