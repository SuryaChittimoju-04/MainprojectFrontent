/*eslint-disable*/
export const FETCH_SLOTS_REQUEST = 'FETCH_SLOTS_REQUEST';
export const FETCH_SLOTS_SUCCESS = 'FETCH_SLOTS_SUCCESS';
export const FETCH_SLOTS_FAILURE = 'FETCH_SLOTS_FAILURE';

export const FETCH_AVAILABLE_SLOTS_REQUEST = 'FETCH_AVAILABLE_SLOTS_REQUEST';
export const FETCH_AVAILABLE_SLOTS_SUCCESS = 'FETCH_AVAILABLE_SLOTS_SUCCESS';
export const FETCH_AVAILABLE_SLOTS_FAILURE = 'FETCH_AVAILABLE_SLOTS_FAILURE';

export const fetchSlotsRequest = () => ({
  type: FETCH_SLOTS_REQUEST,
});

export const fetchSlotsSuccess = (slotsData) => ({
  type: FETCH_SLOTS_SUCCESS,
  payload: slotsData,
});

export const fetchSlotsFailure = (error) => ({
  type: FETCH_SLOTS_FAILURE,
  error,
});

export const fetchAvailableSlotsRequest = () => ({
  type: FETCH_AVAILABLE_SLOTS_REQUEST,
});

export const fetchAvailableSlotsSuccess = (availableSlots) => ({
  type: FETCH_AVAILABLE_SLOTS_SUCCESS,
  payload: availableSlots
});

export const fetchAvailableSlotsFailure = (error) => ({
  type: FETCH_AVAILABLE_SLOTS_FAILURE,
  error
});

// Use named exports instead of default export to prevent import issues
export default {
  FETCH_SLOTS_REQUEST,
  FETCH_SLOTS_SUCCESS,
  FETCH_SLOTS_FAILURE,
  FETCH_AVAILABLE_SLOTS_REQUEST,
  FETCH_AVAILABLE_SLOTS_SUCCESS,
  FETCH_AVAILABLE_SLOTS_FAILURE,
  fetchSlotsRequest,
  fetchSlotsSuccess,
  fetchSlotsFailure,
  fetchAvailableSlotsRequest,
  fetchAvailableSlotsSuccess,
  fetchAvailableSlotsFailure
};
