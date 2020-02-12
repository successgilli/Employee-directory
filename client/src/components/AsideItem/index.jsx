import React from 'react';
import Proptypes from 'proptypes';
import { connect } from 'react-redux';

import { togglePage } from '../../store/modules/dashBoard';

import './index.scss';

const AsideItem = ({
  text,
  iconName,
  togglePage: setPage,
  page,
}) => {
  const handleClick = () => setPage(page);

  return (
    <button type="button" className="asideItem" onClick={handleClick}>
      <i className="material-icons">
        {iconName}
      </i>
      <span>{text}</span>
    </button>
  );
};

AsideItem.propTypes = {
  text: Proptypes.string.isRequired,
  iconName: Proptypes.string.isRequired,
  togglePage: Proptypes.shape({
    setPage: Proptypes.string.isRequired,
  }).isRequired,
  page: Proptypes.string.isRequired,
};

export default connect((state) => state, { togglePage })(AsideItem);
