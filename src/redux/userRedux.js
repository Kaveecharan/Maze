import { createSlice } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    loginFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
    logout:(state)=>{
        state.currentUser = null;
    },
    userUpdate:(state, action)=>{
        state.currentUser = action.payload;
    }
  },
});

export const { loginStart, loginSuccess, loginFailure, logout, userUpdate } = userSlice.actions;
export default userSlice.reducer;
