import React from 'react';
import PropTypes from 'proptypes';

import './index.scss';

const Button = ({
  text,
  clickEvent,
  colorClass,
  disabled,
  buttonStyle,
}) => {
  const classname = `col-sm-2 btn button button_${colorClass}`;

  return (
    <button
      type="button"
      className={classname}
      disabled={disabled}
      onClick={clickEvent}
      style={{ ...buttonStyle }}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  clickEvent: PropTypes.func.isRequired,
  colorClass: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  buttonStyle: PropTypes.shape({}),
};

Button.defaultProps = {
  disabled: false,
  buttonStyle: {},
};

export default Button;
