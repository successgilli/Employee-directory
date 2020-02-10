/* eslint-disable linebreak-style */
import React from 'react';
import { Provider } from 'react-redux';
import reactDom from 'react-dom';

import store from './store';
import App from './App/index';

reactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
