import React from 'react';

import './index.scss';

const userAsideCard = () => (
  <div className="userAsideCard">
    <div className="userAsideCard_imageOuter">
      <img
        className="userAsideCard_image"
        src="https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg"
        alt=""
      />
    </div>
    <p className="userAsideCard_name">Sabrina Okoh</p>
    <p className="userAsideCard_type">Admin</p>
  </div>
);

export default userAsideCard;
