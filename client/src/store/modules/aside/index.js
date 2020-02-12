import { takeLatest, put } from 'redux-saga/effects';

import { TOGGLE_ASIDE, SET_ASIDE } from './types';

export const toggleAsideBar = (payload) => ({ type: SET_ASIDE, payload });
const changeAsideState = (payload) => {
  return { type: TOGGLE_ASIDE, payload };
};

function* setAsideState(action) {
  yield put(changeAsideState(action.payload));
}

export function* watchAsideRequest() {
  yield takeLatest(SET_ASIDE, setAsideState);
}

const initialState = {
  open: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ASIDE:
      return {
        ...initialState,
        open: action.payload,
      };
    default:
      return state;
  }
};
