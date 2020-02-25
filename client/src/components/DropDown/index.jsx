import React from 'react';
import PropTypes from 'proptypes';

import DropOption from '../DropOption';

import './index.scss';

const DropDown = ({
  options, defaultOption, changeEvent, bootStrapWidth,
  classname, label,
}) => {
  const optionElems = options.map((item) => <DropOption text={item} select={false} key={item} />);

  return (
    <div className={`form-group selectDropDown ${bootStrapWidth}`}>
      {label && <label className="selectDropDown_label" htmlFor="selectDropDown_select">{label}</label>}
      <select className={`form-control selectDropDown_select ${classname}`} onChange={changeEvent}>
        <DropOption text={defaultOption} select key="selected" />
        {optionElems}
      </select>
    </div>
  );
};

DropDown.propTypes = {
  options: PropTypes.shape([]).isRequired,
  defaultOption: PropTypes.string.isRequired,
  changeEvent: PropTypes.func.isRequired,
  bootStrapWidth: PropTypes.string.isRequired,
  classname: PropTypes.string,
  label: PropTypes.string,
};

DropDown.defaultProps = {
  classname: '',
  label: false,
};

export default DropDown;
