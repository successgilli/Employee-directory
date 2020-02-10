/* eslint-disable import/no-extraneous-dependencies */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const enhancers = composeWithDevTools(
  applyMiddleware(sagaMiddleware),
);
const store = createStore(rootReducer, enhancers);
sagaMiddleware.run(rootSaga);

export default store;
