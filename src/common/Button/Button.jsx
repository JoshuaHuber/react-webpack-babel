import React from 'react';
import 'styles/base/common/button.sass'
import PropTypes from 'prop-types';

const Button = (props) => {
  const {className, name, handelButtonClick} = props;
  return <button className={className || ''} onClick={handelButtonClick}>{name}</button>
};
Button.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  handelButtonClick: PropTypes.func.isRequired
};


export default Button
