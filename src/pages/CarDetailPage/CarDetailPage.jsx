import React, {Component} from 'react';
import {connect} from "react-redux";
import {get} from "lodash";
import {getCarDetails} from "../../actions/carDetails/actions";
import BasicLoadingView from "../../common/BasicLoadingView/BasicLoadingView";
import ListingPageDetailPod from "../../components/ListingPageDetailPod/ListingPageDetailPod";
import carDetailHelper from "../../storeHelper/carDetailHelper";

class CarDetailPage extends Component {
  state = {
    loading: true
  }
  componentDidMount (){
    this.loadData();
  };
  loadData = async () => {
    const {dispatch, vin} = this.props;
    
    await dispatch(getCarDetails(vin));
    this.setState({loading: false});
  };
  
  render() {
    const {vin, vehicle} = this.props;
    const {loading} = this.state;
    
    if(loading) return <BasicLoadingView/>
    
    if(!vehicle) return <div className='none-found'>no vehicle found</div>
    //TODO code Detail component
    
    return(
      <div className='car-detail-page'>
        <ListingPageDetailPod vehicle={vehicle}/>
      </div>
    )
  }
}
function mapStateToProps(state, ownProps) {
  const vin = get(ownProps, "match.params.vin");
  const vehicle = carDetailHelper(state).getVehicleDetails;
  return {vin, vehicle}
}
function mapDispatchToProps(dispatch) {
  return {dispatch}
}

export default connect(mapStateToProps, mapDispatchToProps)(CarDetailPage);
