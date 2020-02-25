import React from 'react';

import Input from '../Input';
import avartar from '../../assets/images/avartar2.jpg';

import './index.scss';

const Image = () => {
  const imageRef = React.createRef();
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (e.target.files && file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const { target: { result } } = event;
        const { current } = imageRef;
        current.setAttribute('src', result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="image">
      <img ref={imageRef} className="image_avartar" src={avartar} alt="avartar" />
      <div className="image_inputDiv">
        <Input type="file" name="employeeAvartar" classname="input_invincible" changeEvent={handleImage} />
        <button className="image_button" type="button">Add Image</button>
      </div>
    </div>
  );
};

export default Image;
