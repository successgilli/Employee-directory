import React from 'react';
import Proptypes from 'proptypes';

import './index.scss';

const AsideItem = ({ text, iconName }) => (
  <div className="asideItem">
    <i className="material-icons">
      {iconName}
    </i>
    <span>{text}</span>
  </div>
);

AsideItem.propTypes = {
  text: Proptypes.string.isRequired,
  iconName: Proptypes.string.isRequired,
};

export default AsideItem;
