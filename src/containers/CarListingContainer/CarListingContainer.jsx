import React, {Component} from 'react';
import {map} from 'lodash';
import ListingPageDetailPod from "../../components/ListingPageDetailPod/ListingPageDetailPod";
import {connect} from "react-redux";
import {getListings} from "../../actions/carListings/actions";

class CarListingContainer extends Component {
  state = {
    currentPage: 1,
  };
  
  componentDidMount() {
    this.loadData()
  };
  loadData = () => {
    const {dispatch} = this.props;
    const {currentPage} = this.state;
    dispatch(getListings(1))
  };
  
  
  render() {
    const {carListings} = this.props;
    const vehicaleDetailPodXml = map(carListings, (vehicle, i) => {
      return(
        <ListingPageDetailPod vehicle={vehicle} key={i}/>
      )
    });
    return(
      <div className='car-lsiting-container'>
        {vehicaleDetailPodXml}
      </div>
    )
  }
}
function mapStateToProps(state) {
  const carListings = state.carListings.carListings.data.vehicles;
  const isGettingCarListings = state.carListings.isGetting;
  console.log('==> ', carListings);
  return {carListings, isGettingCarListings}
}
function mapDispatchToProps(dispatch) {
  return {dispatch}
}


export default connect(mapStateToProps, mapDispatchToProps)(CarListingContainer);
