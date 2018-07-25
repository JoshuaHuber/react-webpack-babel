import React from 'react';
import 'styles/base/common/button.sass'
import PropTypes from 'prop-types';

const Button = (props) => {
  const {className, name, handleButtonClick} = props;
  return <button className={className || ''} onClick={handleButtonClick}>{name}</button>
};
Button.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  handleButtonClick: PropTypes.func.isRequired
};


export default Button
