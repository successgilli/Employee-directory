import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Proptypes from 'proptypes';
import { initiateLogin } from '../../store/modules/login';

import Input from '../Input';
import Button from '../Button';

import './index.scss';
import validateLogin from '../../util/validateLogin';


const { validate } = validateLogin;

const LoginForm = ({
  initiateLogin: loginUser,
  loginState: { pending },
}) => {
  const [inputObj, setInput] = useState({ email: '', password: '' });
  const [validCheck, setValid] = useState({ email: '', password: '' });
  const [buttonActive, setButtonActive] = useState(true);

  useEffect(() => {
    const validClasses = Object.values(validCheck);
    const valid = (validClasses.includes('is-invalid')
    || validClasses.includes(''));

    setButtonActive(valid);
  }, [validCheck]);

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

  const handleBtnClick = () => loginUser(inputObj);
  const handleChange = (e) => {
    const { target: { name, value } } = e;
    const valid = validate(name, value);

    setInput({
      ...inputObj,
      [name]: value,
    });
    setValid({
      ...validCheck,
      [name]: (valid) ? 'is-valid' : 'is-invalid',
    });
  };

  return (
    <div className="LoginForm">
      <div>
        <h1 className="LoginForm_head">Welcome</h1>
        <p className="LoginForm_title">Please Login to admin Dashboard</p>
      </div>
      <div className="LoginForm_inputs">
        <Input
          type="email"
          placeholder="Email"
          name="email"
          inputStyle={inputHeight}
          changeEvent={handleChange}
          valid={validCheck.email}
          invalidMessage="invalid email"
        />
        <Input
          type="password"
          placeholder="Password"
          inputStyle={inputHeight}
          name="password"
          changeEvent={handleChange}
          valid={validCheck.password}
          invalidMessage="invalid password"
        />
      </div>
      <div className="LoginForm_submit">
        <Button
          buttonStyle={buttonStyle}
          text="LOGIN"
          clickEvent={handleBtnClick}
          disabled={buttonActive || pending}
          loading={pending}
        />
      </div>
      <div className="LoginForm_forgot">
        <Link to="/armpit">FORGOTTEN YOUR PASSWORD?</Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ loginState: state.login });

LoginForm.propTypes = {
  initiateLogin: Proptypes.func.isRequired,
  loginState: Proptypes.shape({
    pending: Proptypes.bool.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, { initiateLogin })(LoginForm);
