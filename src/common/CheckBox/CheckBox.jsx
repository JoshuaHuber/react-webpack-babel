import React from 'react';
import PropTypes from 'prop-types';
import 'styles/base/common/checkbox.sass'

const Checkbox = (props) => {
  const {handleClick} = props
  return(
    <div onClick={handleClick} className='checkbox'>
      <input type="checkbox"/>
      <span className="checkmark"></span>
    </div>
  )
}
Checkbox.propTypes = {
  handleClick: PropTypes.func.isRequired
};

export default Checkbox;
