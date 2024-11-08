import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_SLOTS_REQUEST, fetchSlotsSuccess, fetchSlotsFailure, FETCH_AVAILABLE_SLOTS_REQUEST, fetchAvailableSlotsSuccess, fetchAvailableSlotsFailure } from './actions';
import { apiFetchAvailableSlots, apiFetchSlots } from '../../lib/urls';

// Define fetchSlotsSaga as a generator function with apiClient passed as an argument
function* fetchSlotsSaga({ apiClient }) {
  try {
    // Make the API call using the apiClient
    const response = yield call([apiClient, apiClient.makeRequest], apiFetchSlots);

    if (response.ok) {  // Check if the response is successful
      yield put(fetchSlotsSuccess(response.data));
    } else {
      throw new Error(response.problem || 'Failed to fetch slots data');
    }
  } catch (error) {
    console.error("Error occurred while fetching slots:", error.message);
    yield put(fetchSlotsFailure(error.message));
  }
}

function* fetchAvailableSlots({apiClient}){
  try{
    const response = yield call([apiClient, apiClient.makeRequest], apiFetchAvailableSlots);
    if(response.ok){
      yield put(fetchAvailableSlotsSuccess(response.data));
    }else{
      throw new Error(response.problem || 'Failed to fetch slots data');
    }
  } catch (error){
    console.error("Error occurred while fetching slots:", error.message);
    yield put(fetchAvailableSlotsFailure(error.message));
  }
}

// Define the main saga to watch for FETCH_SLOTS_REQUEST actions
function* slotsSaga(apiClient) {
  // Pass apiClient as a third parameter in takeEvery
  yield takeEvery(FETCH_SLOTS_REQUEST, fetchSlotsSaga, apiClient);
  yield takeEvery(FETCH_AVAILABLE_SLOTS_REQUEST, fetchAvailableSlots, apiClient);
}

export default slotsSaga;
