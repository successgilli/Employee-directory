import { all } from 'redux-saga/effects';

import { watchAsideRequests } from './modules/aside';

export default function* rootSaga() {
  yield all([
    watchAsideRequests(),
  ]);
}
