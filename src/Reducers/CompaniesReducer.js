import {
   LOAD_COMPANIES_REQUEST,
   LOAD_COMPANIES_SUCCESS,
   LOAD_COMPANIES_FAIL,
   FILTER_COMPANIES_REQUEST,
   FILTER_COMPANIES_SUCCESS,
   FILTER_COMPANIES_FAIL,
   GET_COMPANIES_DETAILS_REQUEST,
   GET_COMPANIES_DETAILS_SUCCESS,
   GET_COMPANIES_DETAILS_FAIL,
   CLEAR_ERRORS,
} from "../Constants/CompanyConstants";
import { createReducer } from "@reduxjs/toolkit";

// Initial State
const initialState = { companies: {} };

// Reducers
export const companiesReducer = createReducer(initialState, (builder) => {
   builder
      .addCase(GET_COMPANIES_DETAILS_REQUEST, (state) => {
         state.companiesLoading = true;
      })
      .addCase(GET_COMPANIES_DETAILS_SUCCESS, (state, action) => {
         state.companiesLoading = false;
         state.companies = action.payload;
      })
      .addCase(GET_COMPANIES_DETAILS_FAIL, (state, action) => {
         state.companiesLoading = false;
         state.error = action.payload;
      })
      .addCase(LOAD_COMPANIES_REQUEST, (state) => {
         state.companiesLoading = true;
      })
      .addCase(LOAD_COMPANIES_SUCCESS, (state, action) => {
         state.companiesLoading = false;
         state.companies = action.payload;
      })
      .addCase(LOAD_COMPANIES_FAIL, (state, action) => {
         state.companiesLoading = false;
         state.error = action.payload;
      })
      .addCase(FILTER_COMPANIES_REQUEST, (state) => {
         state.companiesLoading = true;
      })
      .addCase(FILTER_COMPANIES_SUCCESS, (state, action) => {
         state.companiesLoading = false;
         state.companies = action.payload;
      })
      .addCase(FILTER_COMPANIES_FAIL, (state, action) => {
         state.companiesLoading = false;
         state.error = action.payload;
      })
      .addCase(CLEAR_ERRORS, (state) => {
         state.error = null;
      });
})