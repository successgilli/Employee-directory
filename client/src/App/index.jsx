import React from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Routes from '../components/Routes';

import './index.scss';

const App = () => (
  <>
    <Routes />
    <ToastContainer />
  </>
);

export default App;
