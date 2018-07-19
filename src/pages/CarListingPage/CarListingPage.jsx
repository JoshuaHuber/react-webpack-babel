import React, {Component} from 'react';
import CarListingContainer from "../../containers/CarListingContainer/CarListingContainer";

class CarListingPage extends Component {
  
  render() {
    return(
      <div className='car-listing-page'>
        <CarListingContainer/>
      </div>
    )
  }
}

export default CarListingPage;
