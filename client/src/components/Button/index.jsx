import React from 'react';
import PropTypes from 'proptypes';

import './index.scss';

const Button = ({
  text,
  clickEvent,
  colorClass,
  disabled,
  buttonStyle,
  loading,
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
      { !loading && text}
      { loading && <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" />}
      { loading && 'Loading...'}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  clickEvent: PropTypes.func.isRequired,
  colorClass: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  buttonStyle: PropTypes.shape({}),
  loading: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
  buttonStyle: {},
  loading: false,
};

export default Button;
