import { call, put, takeEvery } from 'redux-saga/effects';
import { BOOK_SLOT, bookSlotFailure, bookSlotSuccess, FETCH_DOCTORS, FETCH_SPECIALIZATIONS_REQUEST, fetchDoctorsFailure, fetchDoctorsSuccess, fetchSpecializationsFailure, fetchSpecializationsSuccess, RECORDS_REQUEST, recordsError, recordsSuccess } from './actions';
import { apiBookSlot, apiFetchDoctors, apiFetchSpecializations, apiRecordsList } from '../../lib/urls';


function* fetchSpecialization({ apiClient }) {
    try {
        const response = yield call([apiClient, apiClient.makeRequest], apiFetchSpecializations);
        if (response.ok) {
            yield put(fetchSpecializationsSuccess(response.data));
        } else {
            throw new Error(response.problem || 'Failed to fetch specializations data');
        }
    } catch (error) {
        console.error("Error occurred while specializations slots:", error.message);
        yield put(fetchSpecializationsFailure(error.message));
    }
}

function* fetchDoctorsSaga({ apiClient }, { payload }) {
    try {
        const response = yield call([apiClient, apiClient.makeRequest], apiFetchDoctors(payload));
        if (response.ok) {
            yield put(fetchDoctorsSuccess(response.data));
        } else {
            throw new Error(response.problem || 'Failed to fetch doctors data');
        }
    } catch (error) {
        console.log("Error occured while fetching doctors data:", error.message);
        yield put(fetchDoctorsFailure(error.message));
    }
}

function* bookSlotSaga({ apiClient }, { payload }) {
    try {
        const response = yield call([apiClient, apiClient.makeRequest], apiBookSlot, 'POST', {
            id: payload.selectedSlot,
            doctorId: payload.selectedDoctor
        });
        if (response.ok) {
            yield put(bookSlotSuccess(response.data));
        } else {
            throw new Error(response.problem || 'Failed to book slot');
        }
    } catch (error) {
        console.log("Error occured while booking slot:", error.message);
        yield put(bookSlotFailure(error.message));
    }
}

function* recordSaga({ apiClient }) {
    try{
        const response = yield call([apiClient, apiClient.makeRequest], apiRecordsList);
        const recordsData = response.data;
        if(recordsData.statusCode === 200){
            yield put(recordsSuccess(recordsData));
        }
    }catch(error){
        yield put(recordsError(error.message));
    }
}

function* bookingSaga(apiClient) {
    yield takeEvery(FETCH_SPECIALIZATIONS_REQUEST, fetchSpecialization, apiClient);
    yield takeEvery(FETCH_DOCTORS, fetchDoctorsSaga, apiClient);
    yield takeEvery(BOOK_SLOT, bookSlotSaga, apiClient);
    yield takeEvery(RECORDS_REQUEST, recordSaga, apiClient);
}

export default bookingSaga;