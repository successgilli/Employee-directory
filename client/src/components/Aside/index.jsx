import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'proptypes';

import AsideItem from '../AsideItem/index';
import UserAsideCard from '../UserAsiderCard/index';

import './index.scss';

const Aside = ({ aside: { open } }) => {
  let asideElem = [{ text: 'Home', iconName: 'home', page: 'Dashboard' }, { text: 'Employee', iconName: 'people', page: 'Employee' }];

  asideElem = asideElem.map(({ text, iconName, page }) => (
    <AsideItem text={text} iconName={iconName} page={page} />
  ));

  return (
    <div className="aside" style={open ? { left: '0%' } : { left: '-16%' }}>
      <div className="aside_title">
        <p>HRM</p>
      </div>
      <UserAsideCard />
      {asideElem}
    </div>
  );
};

Aside.propTypes = {
  aside: PropTypes.shape({
    open: PropTypes.bool.isRequired,
  }).isRequired,
};

export default connect((state) => state)(Aside);
