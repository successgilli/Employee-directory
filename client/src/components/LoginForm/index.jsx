import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../Input';
import Button from '../Button';

import './index.scss';

const LoginForm = () => {
  const inputHeight = {
    height: '3rem',
    fontWeight: 'bold',
  };
  const buttonStyle = {
    backgroundColor: '#fc3057',
    display: 'inline-block',
    maxWidth: '500px',
    width: '40%',
    height: '3rem',
  };

  return (
    <div className="LoginForm">
      <div>
        <h1 className="LoginForm_head">Welcome</h1>
        <p className="LoginForm_title">Please Login to admin Dashboard</p>
      </div>
      <div className="LoginForm_inputs">
        <Input type="email" placeholder="Email" name="email" inputStyle={inputHeight} />
        <Input type="password" placeholder="Password" inputStyle={inputHeight} name="password" />
      </div>
      <div className="LoginForm_submit">
        <Button buttonStyle={buttonStyle} text="LOGIN" />
      </div>
      <div className="LoginForm_forgot">
        <Link to="/armpit">FORGOTTEN YOUR PASSWORD?</Link>
      </div>
    </div>
  );
};

export default LoginForm;
