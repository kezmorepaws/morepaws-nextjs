import { createSlice } from '@reduxjs/toolkit';
// utils
import axios from '../../utils/axios';
//
import { dispatch } from '../store';
import { STORE_STATUS } from '../../../constants/store';
import { getAuthTokenHeader } from '../../auth/utils';

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: null,
  store_status: null,
  store: null,
};

const slice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // SET STORE
    setStore(state, action) {
      state.isLoading = false;
      state.store_status = action?.payload?.store_status || null;
      state.store = action?.payload?.store || null;
    },
  },
});

// Reducer
export default slice.reducer;

// export const { actions } = slice;

// ----------------------------------------------------------------------

export function getStore() {
  return async () => {
    dispatch(slice.actions.startLoading());

    try {
      const response = await axios.get('/store', { headers: getAuthTokenHeader() });
      dispatch(slice.actions.setStore(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function updateStore(data) {
  return async () => {
    try {
      dispatch(slice.actions.setStore(data));
    } catch (error) {
      throw new Error(error);
    }
  };
}

// ----------------------------------------------------------------------
