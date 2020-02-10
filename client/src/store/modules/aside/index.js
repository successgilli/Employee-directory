// third-party libraries
import { takeLatest } from 'redux-saga/effects';
// import API from './requests';

// types
import {
  SELECT_PAGE,
  TOGGLE_PAGE,
} from './types';

// actions
// export const requestLogin = (payload) => ({ type: USER_LOGIN, payload });
// export const closeToast = () => ({ type: CLOSE_TOAST });

// const responseMeassage = (payload) => ({ type: USER_MESSAGE, payload });
// const requestReturned = () => ({ type: REQUEST_RETURNED });
// const insertUser = (payload) => ({ type: LOGIN_USER, payload });

// eslint-disable-next-line require-yield
export function* asideWorker(action) {
  console.log(action);
}

export function* watchAsideRequests() {
  yield takeLatest(TOGGLE_PAGE, asideWorker);
}

const initialState = {
  page: 'Dashboard',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PAGE:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
