import React from 'react';
import PropTypes from 'proptypes';

import DropOption from '../DropOption';

import './index.scss';

const DropDown = ({ options, defaultOption, changeEvent }) => {
  const optionElems = options.map((item) => <DropOption text={item} select={false} key={item} />);

  return (
    <select className="col-sm-2 form-control selectDropDown" onChange={changeEvent}>
      <DropOption text={defaultOption} select key="selected" />
      {optionElems}
    </select>
  );
};

DropDown.propTypes = {
  options: PropTypes.shape([]).isRequired,
  defaultOption: PropTypes.string.isRequired,
  changeEvent: PropTypes.func.isRequired,
};

export default DropDown;
