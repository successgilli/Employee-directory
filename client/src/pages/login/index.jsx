import React from 'react';

import LoginForm from '../../components/LoginForm';
import logo from '../../assets/images/vlogo.png';

import './index.scss';

const Home = () => (
  <div className="home">
    <div className="home_content">
      <div className="home_left">
        <div className="home_leftcontent">
          <img className="home_logo" src={logo} alt="logo" />
          <span>Viisaus Directory</span>
        </div>
      </div>
      <div className="home_right">
        <LoginForm />
      </div>
    </div>
  </div>
);

export default Home;
