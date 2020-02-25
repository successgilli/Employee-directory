import React, { useState, useEffect } from 'react';
import PropTypes from 'proptypes';

import Button from '../Button';

import './index.scss';

const FormWrapper = ({ children, onNextClick }) => {
  const [divPositions, setPosition] = useState(0);
  const handleClickNext = () => {
    setPosition(divPositions + 1);
  };
  const handleClickPrev = () => {
    setPosition(divPositions - 1);
  };

  const disablePrev = (divPositions === 0) && true;
  const disableNext = (divPositions === children.length - 1) && true;

  useEffect(() => {
    onNextClick(divPositions);
  }, [divPositions]);

  return (
    <div className="formwrapper">
      <h5>Employee Details</h5>
      <div className="formwrapper_nav">
        <span>{divPositions + 1}</span>
        {' '}
        of
        {' '}
        <span>{(children.length) ? children.length : 1}</span>
      </div>
      {children}
      <div className="formwrapper_buttondiv form_inline">
        <Button text="Cancel" colorClass="light" />
        <Button text="Previous" colorClass="light" clickEvent={handleClickPrev} disabled={disablePrev} />
        <Button text="Next" colorClass="light" clickEvent={handleClickNext} disabled={disableNext} />
        <Button text="Submit" colorClass="green" />
      </div>
    </div>
  );
};

FormWrapper.propTypes = {
  children: PropTypes.shape([]).isRequired,
  onNextClick: PropTypes.func.isRequired,
};

export default FormWrapper;
