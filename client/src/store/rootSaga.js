import { all } from 'redux-saga/effects';

import { watchloginRequests } from './modules/dashBoard';
import { watchAsideRequest } from './modules/aside';

export default function* rootSaga() {
  yield all([
    watchAsideRequest(),
    watchloginRequests(),
  ]);
}
