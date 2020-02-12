import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'proptypes';

import { toggleAsideBar } from '../../store/modules/aside/index';

import './index.scss';

const Handbugger = ({ toggleAsideBar: changeAside }) => {
  const [icon, setIcon] = useState('close');
  const [asideOpen, setAsideOpen] = useState(true);

  const handleClick = () => {
    setIcon((icon === 'apps') ? 'close' : 'apps');
  };

  useEffect(() => {
    setAsideOpen((icon === 'close'));
  }, [icon]);

  useEffect(() => {
    changeAside(asideOpen);
  }, [asideOpen]);

  return (
    <button className="handbugger_button" onClick={handleClick} type="button">
      <i className="material-icons handbugger">
        {icon}
      </i>
    </button>
  );
};

Handbugger.propTypes = {
  toggleAsideBar: PropTypes.func.isRequired,
};


export default connect((state) => state, { toggleAsideBar })(Handbugger);
