// src/store/auth/authSaga.js
import { call, put, takeEvery } from 'redux-saga/effects';
import { LOGIN_REQUEST, loginSuccess, loginFailure, OTP_VERIFICATION_REQUEST, otpVerificationSuccess, otpVerificationFailure, SIGNUP_REQUEST, signupFailure, signupSuccess, REFRESH_TOKEN_REQUEST, refreshTokenFailure, refreshTokenSuccess } from './actions';
import { apiLogin, apiSignUp, refreshTokenApi, verifyOTP } from '../../lib/urls';

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
      window.localStorage.setItem("aadharNumber",payload.aadharNumber);
      window.localStorage.setItem("userName",response.data.name);
      window.localStorage.setItem("refresh_token",response.data.refresh_token);
    }else{
      yield put(otpVerificationFailure(response.message));
    }
  } catch (error) {
    yield put(otpVerificationFailure(error.message));
  }
}

function* signupRequestSaga({apiClient},{payload}){
  function age(dateOfBirth) {
    const dob = new Date(dateOfBirth);
    const today = new Date();
  
    let age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();
    const dayDifference = today.getDate() - dob.getDate();
  
    // Adjust if the birth date hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      age--;
    }
  
    return age;
  }
  
  try{
    const response = yield call([apiClient,apiClient.makeRequest], apiSignUp, 'POST', {
      aadharNumber: payload.aadhar,
      patientPhNumber: payload.phone,
      patientEmail: payload.email,
      patientName: payload.name,
      patientAge: age(payload.dob),
      patientGender: payload.gender,
    });
    if(response.ok){
      const res = {"statusCode":response.data?.statusCode,"email":response.data?.data,"aadharNumber":payload.aadhar};
      yield put(signupSuccess(res));
    }else{
      yield put(signupFailure(response.message));
    }
  }catch(error){
    yield put(signupFailure(error.message));
  }
}

function* refreshTokenSaga({apiClient}){
  try{
    const rt = window.localStorage.getItem("refresh_token");
    const aadhar = window.localStorage.getItem("aadharNumber");
    const response = yield call([apiClient,apiClient.makeRequest],refreshTokenApi,'POST',{
      refreshToken: rt,
      aadharNumber: aadhar,
    });
    if(response.ok){
      yield put(refreshTokenSuccess(response.data));
      apiClient.setBearerToken(response.data.access_token);
      window.localStorage.setItem("refresh_token",response.data.refresh_token); 
    }else{
      window.localStorage.removeItem("refresh_token");
      window.localStorage.removeItem("api_token");
      window.localStorage.removeItem("aadharNumber");
      window.localStorage.removeItem("userName");
    }
  }catch(error){
    yield put(refreshTokenFailure(error.message));
  }
}

function* authSaga(apiClient) {
  yield takeEvery(LOGIN_REQUEST, loginSaga, apiClient);
  yield takeEvery(OTP_VERIFICATION_REQUEST, otpVerification, apiClient);
  yield takeEvery(SIGNUP_REQUEST, signupRequestSaga, apiClient);
  yield takeEvery(REFRESH_TOKEN_REQUEST, refreshTokenSaga, apiClient);
}

export default authSaga;