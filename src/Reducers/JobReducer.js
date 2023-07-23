import { createReducer } from "@reduxjs/toolkit";

import {
   JOB_REQUEST,
   JOB_SUCCESS,
   JOB_FAIL,
   CREATE_JOB_REQUEST,
   CREATE_JOB_SUCCESS,
   CREATE_JOB_FAIL,
   LOAD_JOB_REQUEST,
   LOAD_JOB_SUCCESS,
   LOAD_JOB_FAIL,
   CLEAR_ERRORS,
} from "../Constants/JobConstants";

// Initial State
const initialState = { job: {} };

// Reducers
export const jobReducer = createReducer(initialState, (builder) => {
   builder
      .addCase(JOB_REQUEST, (state) => {
         state.jobLoading = true;
      })
      .addCase(JOB_SUCCESS, (state, action) => {
         state.jobLoading = false;
         state.job = action.payload;
      })
      .addCase(JOB_FAIL, (state, action) => {
         state.jobLoading = false;
         state.error = action.payload;
      })
      .addCase(CLEAR_ERRORS, (state) => {
         state.error = null;
      });
})