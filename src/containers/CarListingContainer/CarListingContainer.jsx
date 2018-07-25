import React, {Component} from 'react';
import {map} from 'lodash';
import ListingPageDetailPod from "../../components/ListingPageDetailPod/ListingPageDetailPod";
import {connect} from "react-redux";
import {getListings} from "../../actions/carListings/actions";
import carListingHelper from "../../storeHelper/carListingHelper";
import Pagination from "../../common/Pagination/Pagination";

class CarListingContainer extends Component {
  state = {
    currentPage: 1,
  };
  
  componentDidMount() {
    this.loadData()
  };
  loadData = () => {
    const {dispatch} = this.props;
    dispatch(getListings(1))
  };
  handleBackClick = () => {
    const {dispatch} = this.props;
    const {currentPage} = this.state;
    const {nextPage} = currentPage + 1;
    
    dispatch(getListings(nextPage));
    this.setState({currentPage: nextPage});
  };
  handleNextClick = () => {
    const {dispatch} = this.props;
    const {currentPage} = this.state;
    const {prevPage} = currentPage - 1;
    
    dispatch(getListings(prevPage));
    this.setState({currentPage: prevPage});
  
  };
  
  render() {
    const {carListings, pageCount} = this.props;
    const {currentPage} = this.state;
    
    const vehicaleDetailPodXml = map(carListings, (vehicle, i) => {
      return(
        <ListingPageDetailPod vehicle={vehicle} key={i}/>
      )
    });
    return(
      <div className='car-lsiting-container'>
        {vehicaleDetailPodXml}
        {/*each call of endpoint returns same json*/}
        <Pagination currentPage={currentPage} pageCount={pageCount} handleBackClick={this.handleBackClick} handleNextClick={this.handleNextClick} />
      </div>
    )
  }
}
function mapStateToProps(state) {
  console.log('state', state)
  const carListings = carListingHelper(state).getVehicles;
  const isGettingCarListings = carListingHelper(state).isGettingCarListings;
  const pageCount = carListingHelper(state).getPageCount;
  
  return {carListings, isGettingCarListings, pageCount}
}
function mapDispatchToProps(dispatch) {
  return {dispatch}
}


export default connect(mapStateToProps, mapDispatchToProps)(CarListingContainer);
