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
const initialState = { jobs: {} };

// Reducers
export const jobsReducer = createReducer(initialState, (builder) => {
   builder
      .addCase(LOAD_JOB_REQUEST, (state) => {
         state.jobsLoading = true;
      })
      .addCase(LOAD_JOB_SUCCESS, (state, action) => {
         state.jobsLoading = false;
         state.jobs = action.payload;
      })
      .addCase(LOAD_JOB_FAIL, (state, action) => {
         state.jobsLoading = false;
         state.error = action.payload;
      })
      .addCase(CLEAR_ERRORS, (state) => {
         state.error = null;
      });
})