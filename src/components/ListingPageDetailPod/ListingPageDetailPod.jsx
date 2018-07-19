import React from 'react';
import 'styles/base/components/ListingPageDetailPod.sass';
import {head} from 'lodash';

const ListingPageDetailPod = (props) => {
  
  const {image_location_list, model, make, mileage} = props.vehicle;
  const primaryImage = head(image_location_list);
  
  return(
    <div className='listing-page-detail-pod'>
      <input type="checkbox"/>
      <img src={primaryImage} alt=""/>
      <div className="model">{model}</div>
      <div className="make">{make}</div>
      <div className="mileage">{mileage}</div>
    </div>
  )
};

export default ListingPageDetailPod;
