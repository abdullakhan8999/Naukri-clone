import { createReducer } from "@reduxjs/toolkit";
import {
   LOGIN_REQUEST,
   LOGIN_FAIL,
   LOGIN_SUCCESS,
   REGISTER_USER_REQUEST,
   REGISTER_USER_SUCCESS,
   REGISTER_USER_FAIL,
   LOAD_USER_REQUEST,
   LOAD_USER_SUCCESS,
   LOAD_USER_FAIL,
   CLEAR_ERRORS
} from "../Constants/UserConstants";

// Initial State
const initialState = { user: {} };

// Reducers
export const userReducer = createReducer(initialState, (builder) => {
   builder
      .addCase(LOGIN_REQUEST, (state) => {
         state.loading = true;
         state.isAuthenticated = false;
      })
      .addCase(REGISTER_USER_REQUEST, (state) => {
         state.loading = true;
         state.isAuthenticated = false;
      })
      .addCase(LOAD_USER_REQUEST, (state) => {
         state.loading = true;
         state.isAuthenticated = false;
      })
      .addCase(LOGIN_SUCCESS, (state, action) => {
         state.loading = false;
         state.isAuthenticated = true;
         state.user = action.payload;
      })
      .addCase(REGISTER_USER_SUCCESS, (state, action) => {
         state.loading = false;
         state.isAuthenticated = true;
         state.user = action.payload;
      })
      .addCase(LOAD_USER_SUCCESS, (state, action) => {
         state.loading = false;
         state.isAuthenticated = true;
         state.user = action.payload;
      })
      .addCase(LOGIN_FAIL, (state, action) => {
         state.loading = false;
         state.isAuthenticated = false;
         state.user = null;
         state.error = action.payload;
      })
      .addCase(REGISTER_USER_FAIL, (state, action) => {
         state.loading = false;
         state.isAuthenticated = false;
         state.user = null;
         state.error = action.payload;
      })
      .addCase(LOAD_USER_FAIL, (state, action) => {
         state.loading = false;
         state.isAuthenticated = false;
         state.user = null;
         state.error = action.payload;
      })
      .addCase(CLEAR_ERRORS, (state) => {
         state.error = null;
      });
});
