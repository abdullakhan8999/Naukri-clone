import {
   LOAD_COMPANY_REQUEST,
   LOAD_COMPANY_SUCCESS,
   LOAD_COMPANY_FAIL,
   CLEAR_ERRORS,
} from "../Constants/CompanyConstants";
import { createReducer } from "@reduxjs/toolkit";

// Initial State
const initialState = { companies: {} };

// Reducers
export const companiesReducer = createReducer(initialState, (builder) => {
   builder
      .addCase(LOAD_COMPANY_REQUEST, (state) => {
         state.companiesLoading = true;
      })
      .addCase(LOAD_COMPANY_SUCCESS, (state, action) => {
         state.companiesLoading = false;
         state.companies = action.payload;
      })
      .addCase(LOAD_COMPANY_FAIL, (state, action) => {
         state.companiesLoading = false;
         state.error = action.payload;
      })
      .addCase(CLEAR_ERRORS, (state) => {
         state.error = null;
      });
})