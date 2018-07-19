import React, {Component} from 'react';
import axios from 'axios';
import {map} from 'lodash';
import ListingPageDetailPod from "../../components/ListingPageDetailPod/ListingPageDetailPod";


class CarListingContainer extends Component {
  state = {
    currentPage: null,
    filteredCount: null,
    pageCount: null,
    qualifyingCount: null,
    vehicles: []
  };
  
  componentDidMount() {
    this.loadData(1)
  };
  loadData = (page) => {
    axios.get(`https://private-f14e4-interviewapi3.apiary-mock.com/vehicles?page=${page}`)
      .then(res => {
        const data = res.data.data;
        this.setState({ currentPage: data.current_page, filteredCount: data.filtered_count, pageCount: data.page_count, qualifyingCount: data.qualifying_count, vehicles: data.vehicles});
      }).catch(e => {
      console.log(e)
    })
  };
  
  
  render() {
    const {vehicles, currentPage, filteredCount, pageCount, qualifyingCount  } = this.state;
    const vehicaleDetailPodXml = map(vehicles, (vehicle) => {
      return(
        <ListingPageDetailPod vehicle={vehicle} />
      )
    });
    return(
      <div className='car-lsiting-container'>
        {vehicaleDetailPodXml}
      </div>
    )
  }
}

export default CarListingContainer;
