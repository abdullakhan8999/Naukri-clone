import axios from "axios";
// const BASE_URL = "http://localhost:8080/api/v1";

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

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
   dispatch({ type: CLEAR_ERRORS });
};


// Load Jobs
export const LoadJobs = () => async (dispatch) => {
   try {
      // Dispatch request
      dispatch({ type: LOAD_JOB_REQUEST });

      // Requesting  Data from db
      const { data } = await axios.get(`/api/v1/jobs`,);
      dispatch({ type: LOAD_JOB_SUCCESS, payload: data.jobs });
   } catch (error) {
      // console.log("Error", error);
      // Response Failure
      dispatch({ type: LOAD_JOB_FAIL, payload: error.response.data.message });
   }
};


// Get job details
export const jobDetailsById = (company_id) =>
   async (dispatch) => {
      try {
         // Dispatch request
         dispatch({ type: JOB_REQUEST });


         // Requesting to Backend
         // Requesting  Data

         console.log(company_id);

         const { data } = await axios.get(
            `/api/v1/company/details`,
            { company_id: company_id },
         );

         dispatch({ type: JOB_SUCCESS, payload: data.company });
      } catch (error) {
         console.log("Error", error);
         // Response Failure
         dispatch({ type: JOB_FAIL, payload: error.response.data.message });
      }
   };