import { createSlice } from "@reduxjs/toolkit";

const initAuthState = {isAuth : false}

const AuthSlice = createSlice({
  name : 'Auth',
  initialState : initAuthState,
  reducers : {
    login (state) {
      state.isAuth = true
    },
    logout (state) {
      state.isAuth = false
    }
  }
});
export default AuthSlice;