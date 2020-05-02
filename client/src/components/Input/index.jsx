import React from 'react';
import PropTypes from 'proptypes';

import './index.scss';

const Input = ({
  type, placeholder, changeEvent,
  label, bootStrapWidth, valid, name,
  classname, value, inputStyle,
  validMessage, invalidMessage,
}) => (
  <div className={`input form-group ${bootStrapWidth} ${classname}`}>
    {label && <label className="input_label" htmlFor="input_input">{label}</label>}
    <input
      className={`form-control input_input ${valid}`}
      style={{ ...inputStyle }}
      placeholder={placeholder}
      type={type}
      onChange={changeEvent}
      name={name}
      defaultValue={value}
    />
    <div className="valid-feedback">
      {validMessage}
    </div>
    <div className="invalid-feedback">
      {invalidMessage}
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
  inputStyle: PropTypes.shape({}),
  validMessage: PropTypes.string,
  invalidMessage: PropTypes.string,
};

Input.defaultProps = {
  label: '',
  bootStrapWidth: '',
  valid: '',
  classname: '',
  value: '',
  inputStyle: {},
  validMessage: '',
  invalidMessage: '',
};

export default Input;
