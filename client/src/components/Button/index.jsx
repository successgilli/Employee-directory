import React from 'react';
import PropTypes from 'proptypes';

import './index.scss';

const Button = ({
  text,
  clickEvent,
  colorClass,
}) => {
  const classname = `col-sm-2 btn button button_${colorClass}`;

  return (
    <button type="button" className={classname} onClick={clickEvent}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  clickEvent: PropTypes.func.isRequired,
  colorClass: PropTypes.string.isRequired,
};

export default Button;
