import React from 'react';
import 'styles/base/common/pagination.sass'
import Button from "../Button/Button";
import PropTypes from 'prop-types';



const Pagination = (props) => {
  const {className, handleNextClick, handleBackClick, currentPage, pageCount} = props;
  return(
    <div className={`pagination ${className || ''}`}>
      {
        currentPage === 1
        ? <span>&nbsp;</span>
        : <Button handleButtonClick={handleBackClick} name={'back'} className='orange'/>
      }
      <span>Page: {currentPage}</span>
      {
        currentPage === pageCount
          ? <span>&nbsp;</span>
          : <Button handleButtonClick={handleNextClick} name={'next'} className='orange'/>
      }
    </div>
  )
};

Button.propTypes = {
  className: PropTypes.string,
  handleBackClick: PropTypes.func.isRequired,
  handleNextClick: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired
};
export default Pagination;
