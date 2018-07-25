import React, {Component} from 'react';
import {map} from 'lodash';
import ListingPageDetailPod from "../../components/ListingPageDetailPod/ListingPageDetailPod";
import {connect} from "react-redux";
import {getListings} from "../../actions/carListings/actions";
import carListingHelper from "../../storeHelper/carListingHelper";
import Pagination from "../../common/Pagination/Pagination";
import RoutesService from "../../RoutesService";
import {push} from "react-router-redux"
import { withRouter } from 'react-router-dom'

class CarListingContainer extends Component {
  state = {
    currentPage: 1
  }
  
  componentDidMount() {
    this.loadData()
  };
  loadData = () => {
    const {dispatch} = this.props;
    dispatch(getListings(1))
  };
  handleNextClick = () => {
    const {dispatch} = this.props;
    const {currentPage} = this.state;
    const nextPage = currentPage + 1;
    this.setState({currentPage: nextPage}, () => dispatch(getListings(nextPage)));
  };
  handleBackClick = () => {
    const {currentPage} = this.state;
    const prevPage = currentPage - 1;
    
    this.setState({currentPage: prevPage});
  };
  handleVehicleClick = (vin) => {
    this.props.history.push(RoutesService.vinPath(vin))
  };
  render() {
    const {carListings, pageCount} = this.props;
    const {currentPage} = this.state;
    
    const vehicaleDetailPodXml = map(carListings, (vehicle, i) => {
      return(
        <ListingPageDetailPod vehicle={vehicle} key={i} handleVehicleClick={this.handleVehicleClick}/>
      )
    });
    return(
      <div className='car-lsiting-container'>
        {vehicaleDetailPodXml}
        {/*each call returns same json*/}
        <Pagination currentPage={currentPage} pageCount={pageCount} handleBackClick={this.handleBackClick} handleNextClick={this.handleNextClick} />
      </div>
    )
  }
}
function mapStateToProps(state) {
  const carListings = carListingHelper(state).getVehicles;
  const isGettingCarListings = carListingHelper(state).isGettingCarListings;
  const pageCount = carListingHelper(state).getPageCount;
  
  return {carListings, isGettingCarListings, pageCount}
}
function mapDispatchToProps(dispatch) {
  return {dispatch}
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CarListingContainer));
