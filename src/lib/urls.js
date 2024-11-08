const BASE_URL = process.env.BACKEND_BASE_URL || "http://localhost:5000/api/v1/HCS";
export const apiLogin = `${BASE_URL}/auth/login`;
export const verifyOTP = `${BASE_URL}/auth/otpVerification`;
export const apiFetchSlots = `${BASE_URL}/slot/booked`;
export const apiFetchAvailableSlots =(doctorId)=> `${BASE_URL}/slot/available?doctorId=${doctorId}`;
export const apiFetchSpecializations = `${BASE_URL}/specialist/specializations`;
export const apiFetchDoctors =(specialization)=> `${BASE_URL}/specialist/doctors?specialization=${specialization}`;
export const apiBookSlot = `${BASE_URL}/slot/book`;
export const apiHistoryList = `${BASE_URL}/slot/history`;
