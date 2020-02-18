import React from 'react';

import './index.scss';

const DeleteIcon = () => {
  console.log('deleteIcon');
  const handleClick = () => alert('clicked delete');

  return (
    <button className="deleteIcon_btn" type="button" onClick={handleClick}>
      <i className="material-icons deleteIcon">
        delete
      </i>
    </button>
  );
};

export default DeleteIcon;
