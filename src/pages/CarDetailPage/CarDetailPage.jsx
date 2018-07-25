import React, {Component} from 'react';
import {connect} from "react-redux";
import {get} from "lodash";
import {getCarDetails} from "../../actions/carDetails/actions";
import BasicLoadingView from "../../common/BasicLoadingView/BasicLoadingView";
import ListingPageDetailPod from "../../components/ListingPageDetailPod/ListingPageDetailPod";

class CarDetailPage extends Component {
  state = {
    loading: false
  }
  componentDidMount (){
    this.loadData();
  };
  loadData = async () => {
    const {dispatch, vin} = this.props;
    
    this.setState({loading: true});
    await dispatch(getCarDetails(vin));
    this.setState({loading: false});
  };
  
  render() {
    const {vin, vehicle} = this.props;
    const {loading} = this.state;
    
    if(loading) return <BasicLoadingView/>
    return(
      <div className='car-detail-page'>
        <div>{vin}</div>
        <ListingPageDetailPod vehicle={vehicle}/>
      </div>
    )
  }
}
function mapStateToProps(state, ownProps) {
  const vin = get(ownProps, "match.params.vin");
  console.log('CarDetailPage', state);
  
  
  return {vin}
}
function mapDispatchToProps(dispatch) {
  return {dispatch}
}

export default connect(mapStateToProps, mapDispatchToProps)(CarDetailPage);