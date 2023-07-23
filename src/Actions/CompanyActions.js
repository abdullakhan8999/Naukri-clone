import axios from "axios";
// const BASE_URL = "http://localhost:8080/api/v1";

import {
   LOAD_COMPANY_REQUEST,
   LOAD_COMPANY_SUCCESS,
   LOAD_COMPANY_FAIL,
   CLEAR_ERRORS,
} from "../Constants/CompanyConstants";

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
   dispatch({ type: CLEAR_ERRORS });
};


// Load Jobs
export const LoadCompanies = () => async (dispatch) => {
   try {
      // Dispatch request
      dispatch({ type: LOAD_COMPANY_REQUEST });

      // Requesting  Data from db
      const { data } = await axios.get(`/api/v1/companies`,);
      dispatch({ type: LOAD_COMPANY_SUCCESS, payload: data.companies });
   } catch (error) {
      // console.log("Error", error);
      // Response Failure
      dispatch({ type: LOAD_COMPANY_FAIL, payload: error.response.data.message });
   }
};