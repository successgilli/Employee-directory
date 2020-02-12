// third-party libraries
import { takeLatest, put } from 'redux-saga/effects';
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
const setPage = (payload) => ({ type: SELECT_PAGE, payload });
export const togglePage = (payload) => ({ type: TOGGLE_PAGE, payload });
// eslint-disable-next-line require-yield
export function* asideWorker(action) {
  console.log(action, ' here');
  yield put(setPage(action.payload));
}

export function* watchloginRequests() {
  yield takeLatest(TOGGLE_PAGE, asideWorker);
}

const initialState = {
  page: 'Dashboard',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PAGE:
      console.log(action, ' here2');
      return {
        ...initialState,
        page: action.payload,
      };
    default:
      return state;
  }
};
