import { FETCH_SLOTS_REQUEST, FETCH_SLOTS_SUCCESS, FETCH_SLOTS_FAILURE, FETCH_AVAILABLE_SLOTS_REQUEST, FETCH_AVAILABLE_SLOTS_SUCCESS, FETCH_AVAILABLE_SLOTS_FAILURE } from './actions';

const initialState = {
  isLoading: false,
  slotsData: null,
  availableSlots: {
    isLoading: false,
    data: null,
    error: null,
  },
  error: null,
};

const slotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SLOTS_REQUEST:
      return { ...state, isLoading: true, error: null };
    case FETCH_SLOTS_SUCCESS:
      return { ...state, isLoading: false, slotsData: action.payload };
    case FETCH_SLOTS_FAILURE:
      return { ...state, isLoading: false, error: action.error };
    case FETCH_AVAILABLE_SLOTS_REQUEST:
      return {
        ...state,
        availableSlots: {
          isLoading: true
        }
      };
    case FETCH_AVAILABLE_SLOTS_SUCCESS:
      return {
        ...state,
        availableSlots: {
          isLoading: false,
          data: action.payload,
          error: null,
        }
      };
    case FETCH_AVAILABLE_SLOTS_FAILURE:
      return {
        ...state,
        availableSlots: {
          isLoading: false,
          error: action.error
        }
      };
    default:
      return state;
  }
};

export default slotsReducer;
