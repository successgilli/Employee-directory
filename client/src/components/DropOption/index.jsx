import React from 'react';
import PropTypes from 'proptypes';

const DropOption = ({ text, select }) => (
  <option value={(select) ? '' : text} selected={select}>{text}</option>
);

DropOption.propTypes = {
  text: PropTypes.string.isRequired,
  select: PropTypes.bool.isRequired,
};

export default DropOption;
