/*eslint-disable*/
// src/store/auth/authActions.js
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const OTP_VERIFICATION_REQUEST = 'OTP_VERIFICATION_REQUEST';
export const OTP_VERIFICATION_SUCCESS = 'OTP_VERIFICATION_SUCCESS';
export const OTP_VERIFICATION_FAILURE = 'OTP_VERIFICATION_FAILURE';
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const loginRequest = payload => ({
  type: LOGIN_REQUEST,
  payload,
});

export const loginSuccess = (userData) => ({
  type: LOGIN_SUCCESS,
  payload: userData,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const otpVerificationRequest = payload => ({
  type: OTP_VERIFICATION_REQUEST,
  payload,
});

export const otpVerificationSuccess = payload => ({
  type: OTP_VERIFICATION_SUCCESS,
  payload,
});

export const otpVerificationFailure = (error) => ({
  type: OTP_VERIFICATION_FAILURE,
  payload: error,
});

export const signupRequest = (data) => ({
  type: SIGNUP_REQUEST,
  payload: data,
});

export const signupSuccess = (userData) => ({
  type: SIGNUP_SUCCESS,
  payload: userData,
});

export const signupFailure = (error) => ({
  type: SIGNUP_FAILURE,
  payload: error,
});

export default {
  loginRequest,
  loginSuccess,
  loginFailure,

  otpVerificationRequest,
  otpVerificationSuccess,
  otpVerificationFailure,

  signupRequest,
  signupSuccess,
  signupFailure
}