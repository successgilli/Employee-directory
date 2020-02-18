import { all } from 'redux-saga/effects';

import { watchloginRequests } from './modules/dashBoard';
import { watchAsideRequest } from './modules/aside';
import { watchEmployeeTable } from './modules/employeeTable';

export default function* rootSaga() {
  yield all([
    watchAsideRequest(),
    watchloginRequests(),
    watchEmployeeTable(),
  ]);
}
