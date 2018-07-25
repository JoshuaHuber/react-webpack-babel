import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import 'styles/base/common/priceSlider.sass'


class PriceSlider extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 10
    }
  }
  componentDidMount() {
    const {listPrice} = this.props;
  
    this.setState({value: listPrice})
}
  
  handleChangeStart = () => {
  };
  
  handleChange = value => {
    this.setState({
      value: value
    })
  };
  
  handleChangeComplete = () => {
  };
  
  render () {
    const {value} = this.state;
    const {minPrice, listPrice} = this.props;
    
    //TODO Fix Stubbed data
    
    return (
      <div className='slider'>
        <div className='price-container'>
          <div className='title'>Min Price</div>
          {/*stubbed data not included*/}
          <div className='price'>${minPrice}</div>
        </div>
        <div className='slider-container'>
          <Slider
            min={minPrice}
            max={listPrice}
            value={value}
            onChangeStart={this.handleChangeStart}
            onChange={this.handleChange}
            onChangeComplete={this.handleChangeComplete}
            tooltip={false}
          />
        </div>
        <div className='list-container'>
          <div className='title'>List Price</div>
          {/*stubbed data not included*/}
          <div className='price'>${listPrice}</div>
        </div>
        <div className='fair-container'>
          <div className='title'>Fair Program Max</div>
          <div className='value'>${value}</div>
        </div>
      </div>
    )
  }
}
PropTypes.propTypes = {
  listPrice: PropTypes.number.isRequired,
  minPrice: PropTypes.number.isRequired
};

export default PriceSlider
