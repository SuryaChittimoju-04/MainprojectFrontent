// src/sagas/index.js
import { all } from 'redux-saga/effects';
import authSaga from './authSaga';
import bookingSaga from './bookingSaga';
import slotSaga from './slotSaga';

export default function* rootSaga() {
  yield all([
    authSaga(),
    bookingSaga(),
    slotSaga(),
  ]);
}
