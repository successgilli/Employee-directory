import React from 'react';
import PropTypes from 'proptypes';

import './index.scss';

const Input = ({
  type, placeholder, changeEvent,
}) => (
  <input
    className="form-control col-sm-7 input"
    placeholder={placeholder}
    type={type}
    onChange={changeEvent}
  />
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  changeEvent: PropTypes.func.isRequired,
};

export default Input;
