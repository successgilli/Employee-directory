import React from 'react';

import './index.scss';

const EditIcon = () => {
  const handleClick = () => ('clicked Edit');

  return (
    <button className="editIcon_btn" type="button" onClick={handleClick}>
      <i className="material-icons editIcon">
        edit
      </i>
    </button>
  );
};

export default EditIcon;
