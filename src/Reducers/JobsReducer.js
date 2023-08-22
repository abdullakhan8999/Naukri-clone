import { createReducer } from "@reduxjs/toolkit";

import {
   LOAD_JOBS_REQUEST,
   LOAD_JOBS_SUCCESS,
   LOAD_JOBS_FAIL,
   GET_JOBS_REQUEST,
   GET_JOBS_SUCCESS,
   GET_JOBS_FAIL,
   CLEAR_ERRORS,
} from "../Constants/JobConstants";

// Initial State
const initialState = { jobs: {} };

// Reducers
export const jobsReducer = createReducer(initialState, (builder) => {
   builder
      .addCase(GET_JOBS_REQUEST, (state) => {
         state.jobsLoading = true;
      })
      .addCase(GET_JOBS_SUCCESS, (state, action) => {
         state.jobsLoading = false;
         state.jobs = action.payload;
      })
      .addCase(GET_JOBS_FAIL, (state, action) => {
         state.jobsLoading = false;
         state.error = action.payload;
      })
      .addCase(LOAD_JOBS_REQUEST, (state) => {
         state.jobsLoading = true;
      })
      .addCase(LOAD_JOBS_SUCCESS, (state, action) => {
         state.jobsLoading = false;
         state.jobs = action.payload;
      })
      .addCase(LOAD_JOBS_FAIL, (state, action) => {
         state.jobsLoading = false;
         state.error = action.payload;
      })
      .addCase(CLEAR_ERRORS, (state) => {
         state.error = null;
      });
})