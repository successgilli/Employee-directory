import React from 'react';

import AsideItem from '../AsideItem/index';
import UserAsideCard from '../UserAsiderCard/index';

import './index.scss';

const Aside = () => {
  let asideElem = [{ text: 'Home', iconName: 'home' }, { text: 'Employee', iconName: 'people' }];

  asideElem = asideElem.map(({ text, iconName }) => <AsideItem text={text} iconName={iconName} />);

  return (
    <div className="aside">
      <div className="aside_title">
        <p>HRM</p>
      </div>
      <UserAsideCard />
      {asideElem}
    </div>
  );
};

export default Aside;
