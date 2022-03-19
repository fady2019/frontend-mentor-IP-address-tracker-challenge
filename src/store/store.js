import { createStore } from 'redux';

const initialState = {
  ip: '',
  isp: '',
  location: '',
  isTracking: false,
};

const ipInfoReducer = (state = initialState, action) => {
  if (action.type === 'TRACKIP') {
    return {
      ...state,
      ...action.ipInfo,
    };
  }

  return state;
};

const store = createStore(ipInfoReducer);

export default store;
