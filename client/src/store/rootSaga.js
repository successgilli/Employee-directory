import { all } from 'redux-saga/effects';

import { watchloginRequests } from './modules/dashBoard';
import { watchAsideRequest } from './modules/aside';
import { watchEmployeeTable } from './modules/employeeTable';
import { watchEmployeeFormRequest } from './modules/employeeForm';
import { watchLogin } from './modules/login';

export default function* rootSaga() {
  yield all([
    watchAsideRequest(),
    watchloginRequests(),
    watchEmployeeTable(),
    watchEmployeeFormRequest(),
    watchLogin(),
  ]);
}
