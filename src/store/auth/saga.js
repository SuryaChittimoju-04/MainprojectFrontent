// src/sagas/authSaga.js
import { call, put, takeLatest } from 'redux-saga/effects';
import { LOGIN_REQUEST, loginSuccess, loginFailure } from './actions';
import { apiLogin } from '../../lib/urls';

function* loginSaga(action) {
  try {
    const userData = yield call(apiLogin, action.payload); // apiLogin is your login API call function
    yield put(loginSuccess(userData));
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

export default function* authSaga() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
}
