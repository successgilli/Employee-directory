/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'proptypes';

import './index.scss';

const Input = ({
  type, placeholder, changeEvent,
  label, bootStrapWidth, valid, name,
  classname, value,
}) => (
  <div className={`input form-group ${bootStrapWidth} ${classname}`}>
    {label && <label className="input_label" htmlFor="input_input">{label}</label>}
    <input
      className={`form-control input_input ${valid}`}
      placeholder={placeholder}
      type={type}
      onChange={changeEvent}
      name={name}
      defaultValue={value}
    />
    <div className="valid-feedback">
      Looks good!
    </div>
    <div className="invalid-feedback">
      Looks good!
    </div>
  </div>
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  changeEvent: PropTypes.func.isRequired,
  label: PropTypes.string,
  bootStrapWidth: PropTypes.string,
  valid: PropTypes.string,
  name: PropTypes.string.isRequired,
  classname: PropTypes.string,
  value: PropTypes.string,
};

Input.defaultProps = {
  label: false,
  bootStrapWidth: '',
  valid: '',
  classname: '',
  value: '',
};

export default Input;
