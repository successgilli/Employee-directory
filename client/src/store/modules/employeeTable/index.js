import { takeLatest, call, put } from 'redux-saga/effects';

import { FETCH_EMPLOYEES, GET_EMPLOYEES } from './types';
import api from './request';

export const fetchEmployees = (payload) => ({ type: FETCH_EMPLOYEES, payload });
const updateEmployeeState = (payload) => ({ type: GET_EMPLOYEES, payload });

function* fetchUsers() {
  const res = yield call(api.fetchApi);
  yield put(updateEmployeeState(res));
}

export function* watchEmployeeTable() {
  yield takeLatest(FETCH_EMPLOYEES, fetchUsers);
}

const initialState = {
  users: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_EMPLOYEES:
      return {
        ...initialState,
        users: action.payload,
      };
    default:
      return state;
  }
};
