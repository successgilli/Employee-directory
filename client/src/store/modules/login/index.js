import { takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { INITIATE_LOGIN, LOGIN_SUCCESS, SERVER_ERROR } from './types';
import request from './request';

const { authUser } = request;

const loginSuccessful = (payload) => ({ payload, type: LOGIN_SUCCESS });
const assertError = (payload) => ({ payload, type: SERVER_ERROR });
export const initiateLogin = (payload) => ({ payload, type: INITIATE_LOGIN });

function* loginWorker(action) {
  const response = yield call(authUser, action.payload);

  if (typeof response === 'string') {
    toast.error(response);
    yield put(assertError(response));
  } else {
    const { token, user } = response;

    toast.success(`welcome back ${user.lastName}`);
    localStorage.setItem('token', token);
    yield put(loginSuccessful(user));
  }
}

export function* watchLogin() {
  yield takeLatest(INITIATE_LOGIN, loginWorker);
}

const initialState = {
  pending: false,
  isLoggedIn: false,
  user: {},
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        pending: false,
        user: action.payload,
      };
    case INITIATE_LOGIN:
      return {
        ...state,
        pending: true,
      };
    case SERVER_ERROR:
      return initialState;
    default:
      return state;
  }
};
