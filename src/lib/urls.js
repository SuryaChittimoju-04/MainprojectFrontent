const BASE_URL = process.env.BACKEND_BASE_URL || "http://localhost:5000/api/v1/HCS";
export const apiLogin = `${BASE_URL}/auth/login`;
export const verifyOTP = `${BASE_URL}/auth/otpVerification`;
export const apiFetchSlots = `${BASE_URL}/slot/booked`;
export const apiFetchAvailableSlots = `${BASE_URL}/slot/available`;
