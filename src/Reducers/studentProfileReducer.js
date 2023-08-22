// reducer.js
import { createReducer } from "@reduxjs/toolkit";
import {
   GET_STUDENT_REQUEST,
   GET_STUDENT_SUCCESS,
   GET_STUDENT_FAIL,
   CLEAR_ERRORS
} from "../Constants/studentProfileConstants.js";


const initialState = {
   student: {},
   studentProfileLoading: false,
   error: null
};

export const studentProfileReducer = createReducer(initialState, (builder) => {
   builder
      .addCase(GET_STUDENT_REQUEST, (state) => {
         state.studentProfileLoading = true;
      })
      .addCase(GET_STUDENT_SUCCESS, (state, action) => {
         state.studentProfileLoading = false;
         state.student = action.payload;
         state.error = null;
      })
      .addCase(GET_STUDENT_FAIL, (state, action) => {
         state.studentProfileLoading = false;
         state.student = null;
         state.error = action.payload;
      })
      .addCase(CLEAR_ERRORS, (state) => {
         state.error = null;
      });
});



