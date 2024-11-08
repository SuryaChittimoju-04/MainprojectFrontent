// src/store/auth/authSaga.js
import { call, put, takeEvery } from 'redux-saga/effects';
import { LOGIN_REQUEST, loginSuccess, loginFailure, OTP_VERIFICATION_REQUEST, otpVerificationSuccess, otpVerificationFailure } from './actions';
import { apiLogin, verifyOTP } from '../../lib/urls';

function* loginSaga({ apiClient }, { payload }) {
  try {
    const userData = yield call([apiClient, apiClient.makeRequest], apiLogin, 'POST', {
      aadharNumber: payload,
    });
    const response = userData.data;
    if(response.statusCode === 200){
      const res = {"statusCode":response.statusCode,"email":response.data,"aadharNumber":payload};
      yield put(loginSuccess(res));
    }else{
      yield put(loginFailure(response.message));
    }
  } catch (error) {
    console.error("Login Error:", error); // Log error details
    yield put(loginFailure(error.message));
  }
}

function* otpVerification({apiClient},{payload}){
  try{
    const userData = yield call([apiClient, apiClient.makeRequest], verifyOTP, 'POST', {
      email: payload.email,
      otp: payload.otp,
      aadharNumber: payload.aadharNumber,
    });
    const response = userData.data;
    if(response.statusCode === 200){
      yield put(otpVerificationSuccess(response.data));
      apiClient.setBearerToken(response.data.access_token);
      window.localStorage.setItem("userName",response.data.name);
      window.localStorage.setItem("refresh_token",response.data.refresh_token);
    }else{
      yield put(otpVerificationFailure(response.message));
    }
  } catch (error) {
    yield put(otpVerificationFailure(error.message));
  }
}


function* authSaga(apiClient) {
  yield takeEvery(LOGIN_REQUEST, loginSaga, apiClient);
  yield takeEvery(OTP_VERIFICATION_REQUEST, otpVerification, apiClient);
}

export default authSaga;