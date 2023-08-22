import axios from "axios";
// const BASE_URL = "http://localhost:8080/api/v1";

import {
   LOAD_COMPANIES_REQUEST,
   LOAD_COMPANIES_SUCCESS,
   LOAD_COMPANIES_FAIL,
   GET_COMPANY_DETAILS_REQUEST,
   GET_COMPANY_DETAILS_SUCCESS,
   GET_COMPANY_DETAILS_FAIL,
   FILTER_COMPANIES_REQUEST,
   FILTER_COMPANIES_SUCCESS,
   FILTER_COMPANIES_FAIL,
   GET_COMPANIES_DETAILS_REQUEST,
   GET_COMPANIES_DETAILS_SUCCESS,
   GET_COMPANIES_DETAILS_FAIL,
   UPDATE_COMPANY_REQUEST,
   UPDATE_COMPANY_SUCCESS,
   UPDATE_COMPANY_FAIL,
   CLEAR_ERRORS,
} from "../Constants/CompanyConstants";

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
   dispatch({ type: CLEAR_ERRORS });
};


// update company Details
export const updateCompanyDetails = (companyDetails) => async (dispatch) => {
   try {
      // Dispatch request
      dispatch({ type: UPDATE_COMPANY_REQUEST });

      let Link = `/api/v1/update/details`;
      if (!companyDetails) return;
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.put(Link, companyDetails, config);
      dispatch({ type: UPDATE_COMPANY_SUCCESS, payload: data.company });
   } catch (error) {
      console.log("Error", error);
      // Response Failure
      dispatch({ type: UPDATE_COMPANY_FAIL, payload: error.response.data.message });
   }
};

// Load Companies
export const LoadCompanies = () => async (dispatch) => {
   try {
      // Dispatch request
      dispatch({ type: LOAD_COMPANIES_REQUEST });

      // Requesting  Data from db
      const { data } = await axios.get(`/api/v1/companies`,);
      dispatch({ type: LOAD_COMPANIES_SUCCESS, payload: data.companies });
   } catch (error) {
      console.log("Error", error);
      // Response Failure
      dispatch({ type: LOAD_COMPANIES_FAIL, payload: error.response.data.message });
   }
};

// filter Companies
export const searchCompanies = (keyword) => async (dispatch) => {
   try {
      // Dispatch request
      dispatch({ type: GET_COMPANIES_DETAILS_REQUEST });

      let Link = `/api/v1/companies`;
      if (keyword) Link += `?keyword=${keyword}`;


      // Requesting  Data from db
      const { data } = await axios.get(Link);

      dispatch({ type: GET_COMPANIES_DETAILS_SUCCESS, payload: data.companies });
   } catch (error) {
      console.log("Error", error);
      // Response Failure
      dispatch({ type: GET_COMPANIES_DETAILS_FAIL, payload: error.response?.data?.message });
   }
};

//get Company Details
export const getCompanyDetails = (company_id,) => async (dispatch) => {
   try {
      // Dispatch request
      dispatch({ type: GET_COMPANY_DETAILS_REQUEST });

      // console.log(company_id);
      // Requesting  Data from db
      let Link = "/api/v1/company/details/";
      if (!company_id) return;
      Link += `${company_id}`;
      // console.log(Link)
      const { data } = await axios.get(Link);
      // console.log(data);

      dispatch({ type: GET_COMPANY_DETAILS_SUCCESS, payload: data.company });
   } catch (error) {
      console.log("Error", error);
      // Response Failure
      dispatch({ type: GET_COMPANY_DETAILS_FAIL, payload: error.response.data.message });
   }
};

export const filterCompaniesCategories = (category) => async (dispatch) => {
   try {
      // Dispatch request
      dispatch({ type: FILTER_COMPANIES_REQUEST });

      // Requesting  Data from db
      let Link = `/api/v1/companies`
      if (category) {
         Link += `?companyCategories=${category}`
      }
      const { data } = await axios.get(Link);

      dispatch({ type: FILTER_COMPANIES_SUCCESS, payload: data.companies });

   } catch (error) {
      console.log("Error", error);
      // Response Failure
      dispatch({ type: FILTER_COMPANIES_FAIL, payload: error.response.data.message });
   }
};

export const searchCompaniesName = (name) => async (dispatch) => {
   try {
      // Dispatch request
      dispatch({ type: GET_COMPANIES_DETAILS_REQUEST });

      // Requesting  Data from db
      let Link = `/api/v1/companies`
      if (name) {
         Link += `?name=${name}`
      }
      const { data } = await axios.get(Link);

      dispatch({ type: GET_COMPANIES_DETAILS_SUCCESS, payload: data.companies });

   } catch (error) {
      console.log("Error", error);
      // Response Failure
      dispatch({ type: GET_COMPANIES_DETAILS_FAIL, payload: error.response.data.message });
   }
};