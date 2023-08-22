import axios from "axios";
// const BASE_URL = "http://localhost:8080/api/v1";

import {
   JOB_REQUEST,
   JOB_SUCCESS,
   JOB_FAIL,
   LOAD_JOBS_REQUEST,
   LOAD_JOBS_SUCCESS,
   LOAD_JOBS_FAIL,
   APPLY_JOB_REQUEST,
   APPLY_JOB_SUCCESS,
   APPLY_JOB_FAIL,
   DELETE_JOB_REQUEST,
   DELETE_JOB_SUCCESS,
   DELETE_JOB_FAIL,
   GET_JOBS_REQUEST,
   GET_JOBS_SUCCESS,
   CREATE_JOB_REQUEST,
   CREATE_JOB_SUCCESS,
   CREATE_JOB_FAIL,
   UPDATE_JOB_REQUEST,
   UPDATE_JOB_SUCCESS,
   UPDATE_JOB_FAIL,
   GET_JOBS_FAIL,
   DELETE_JOB_APPLICATIONS_REQUEST,
   DELETE_JOB_APPLICATIONS_SUCCESS,
   DELETE_JOB_APPLICATIONS_FAIL,
   CLEAR_ERRORS,
} from "../Constants/JobConstants";

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
   dispatch({ type: CLEAR_ERRORS });
};

export const createJob = (JobData) => async (dispatch) => {
   try {
      // console.log(JobData);
      dispatch({ type: CREATE_JOB_REQUEST });

      let Link = "/api/v1/company/create/job";
      const config = { headers: { "Content-Type": "application/json" } };
      if (!JobData) return;

      // Requesting  Data from db
      const { data } = await axios.post(Link, JobData, config);
      dispatch({ type: CREATE_JOB_SUCCESS, payload: data.job });

   } catch (error) {
      console.log("Error", error);
      // Response Failure
      dispatch({ type: CREATE_JOB_FAIL, payload: error.response?.data?.message });
   }
}

export const UpdateJob = (JobData) => async (dispatch) => {
   try {
      console.log(JobData);
      dispatch({ type: UPDATE_JOB_REQUEST });

      let Link = "/api/v1/company/update/job";
      const config = { headers: { "Content-Type": "application/json" } };
      if (!JobData) return;

      // Requesting  Data from db
      const { data } = await axios.put(Link, JobData, config);
      dispatch({ type: UPDATE_JOB_SUCCESS, payload: data.job });

   } catch (error) {
      console.log("Error", error);
      // Response Failure
      dispatch({ type: UPDATE_JOB_FAIL, payload: error.response?.data?.message });
   }
}

// Load Jobs
export const LoadJobs = () => async (dispatch) => {
   try {
      // Dispatch request
      dispatch({ type: LOAD_JOBS_REQUEST });

      let Link = `/api/v1/jobs`;

      // Requesting  Data from db
      const { data } = await axios.get(Link);
      dispatch({ type: LOAD_JOBS_SUCCESS, payload: data.jobs });
   } catch (error) {
      console.log("Error", error);
      // Response Failure
      dispatch({ type: LOAD_JOBS_FAIL, payload: error.response?.data?.message });
   }
};

// filter Jobs
export const searchJobs = (keyword) => async (dispatch) => {
   try {
      // Dispatch request
      dispatch({ type: GET_JOBS_REQUEST });

      let Link = `/api/v1/jobs`;
      if (keyword) Link = `/api/v1/jobs?keyword=${keyword}`;


      // Requesting  Data from db
      const { data } = await axios.get(Link);

      dispatch({ type: GET_JOBS_SUCCESS, payload: data.jobs });
   } catch (error) {
      console.log("Error", error);
      // Response Failure
      dispatch({ type: GET_JOBS_FAIL, payload: error.response?.data?.message });
   }
};

// filter Jobs By Location
export const filterJobsByLocation = (keyword) => async (dispatch) => {
   try {
      // Dispatch request
      dispatch({ type: LOAD_JOBS_REQUEST });

      let Link = `/api/v1/jobs`;
      if (keyword) Link = `/api/v1/jobs?location=${keyword}`;


      // Requesting  Data from db
      const { data } = await axios.get(Link);

      dispatch({ type: LOAD_JOBS_SUCCESS, payload: data.jobs });
   } catch (error) {
      // console.log("Error", error);
      // Response Failure
      dispatch({ type: LOAD_JOBS_FAIL, payload: error.response?.data?.message });
   }
};

// filter Jobs By Department
export const filterJobsByDepartment = (keyword) => async (dispatch) => {
   try {
      // Dispatch request
      dispatch({ type: LOAD_JOBS_REQUEST });

      let Link = `/api/v1/jobs`;
      if (keyword) Link = `/api/v1/jobs?department=${keyword}`;

      // Requesting  Data from db
      const { data } = await axios.get(Link);

      dispatch({ type: LOAD_JOBS_SUCCESS, payload: data.jobs });
   } catch (error) {
      // console.log("Error", error);
      // Response Failure
      dispatch({ type: LOAD_JOBS_FAIL, payload: error.response?.data?.message });
   }
};

// filter Jobs By Department
export const filterJobsByExperience = (keyword) => async (dispatch) => {
   try {
      // Dispatch request
      dispatch({ type: LOAD_JOBS_REQUEST });
      let Link = `/api/v1/jobs`;
      if (keyword) {
         Link = `/api/v1/jobs?experience=${keyword}`;
      }
      // Requesting  Data from db
      const { data } = await axios.get(Link);

      dispatch({ type: LOAD_JOBS_SUCCESS, payload: data.jobs });
   } catch (error) {
      // console.log("Error", error);
      // Response Failure
      dispatch({ type: LOAD_JOBS_FAIL, payload: error.response?.data?.message });
   }
};

// filter Jobs By Department
export const filterJobsBySalary = (keyword) => async (dispatch) => {
   try {
      // Dispatch request
      dispatch({ type: LOAD_JOBS_REQUEST });
      let Link = `/api/v1/jobs`;
      if (keyword) {
         Link = `/api/v1/jobs?salary=${keyword}`;
      }
      // Requesting  Data from db
      const { data } = await axios.get(Link);

      dispatch({ type: LOAD_JOBS_SUCCESS, payload: data.jobs });
   } catch (error) {
      // console.log("Error", error);
      // Response Failure
      dispatch({ type: LOAD_JOBS_FAIL, payload: error.response?.data?.message });
   }
};

// filter Jobs By Department
export const filterJobsByCompanyName = (keyword) => async (dispatch) => {
   try {
      // Dispatch request
      dispatch({ type: LOAD_JOBS_REQUEST });
      let Link = `/api/v1/jobs`;
      if (keyword) {
         Link = `/api/v1/jobs?company_name=${keyword}`;
      }
      // Requesting  Data from db
      const { data } = await axios.get(Link);

      dispatch({ type: LOAD_JOBS_SUCCESS, payload: data.jobs });
   } catch (error) {
      // console.log("Error", error);
      // Response Failure
      dispatch({ type: LOAD_JOBS_FAIL, payload: error.response?.data?.message });
   }
};
// filter Jobs By Department
export const filterJobsByRequirement = (keyword) => async (dispatch) => {
   try {
      // Dispatch request
      dispatch({ type: LOAD_JOBS_REQUEST });
      let Link = `/api/v1/jobs`;
      if (keyword) {
         Link = `/api/v1/jobs?requirement=${keyword}`;
      }
      // Requesting  Data from db
      const { data } = await axios.get(Link);

      dispatch({ type: LOAD_JOBS_SUCCESS, payload: data.jobs });
   } catch (error) {
      // console.log("Error", error);
      // Response Failure
      dispatch({ type: LOAD_JOBS_FAIL, payload: error.response?.data?.message });
   }
};

// Get job details
export const jobDetailsById = (jobId) => async (dispatch) => {
   try {
      // Dispatch request
      dispatch({ type: JOB_REQUEST });


      // Requesting to Backend
      // Requesting  Data
      const { data } = await axios.get(`/api/v1/job/${jobId}`);

      dispatch({ type: JOB_SUCCESS, payload: data.job });
   } catch (error) {
      console.log("Error", error);
      // Response Failure
      dispatch({ type: JOB_FAIL, payload: error.response.data.message });
   }
};

// applied job 
export const applyToJob = (job_id) =>
   async (dispatch) => {
      try {
         // Dispatch request
         dispatch({ type: APPLY_JOB_REQUEST });

         const { data } = await axios.post(`/api/v1/apply/job`, { job_id: job_id });

         dispatch({ type: APPLY_JOB_SUCCESS, payload: data });
      } catch (error) {
         console.log("Error", error);
         // Response Failure
         dispatch({ type: APPLY_JOB_FAIL, payload: error.response.data.message });
      }
   };

// DELETE applied job 
export const deleteMyApplication = (job_id) => async (dispatch) => {
   try {
      // Dispatch request
      dispatch({ type: DELETE_JOB_APPLICATIONS_REQUEST });


      // Requesting to Backend
      // Requesting  Data
      const { data } = await axios.delete(`/api/v1/delete/myJob/application/${job_id}`);

      dispatch({ type: DELETE_JOB_APPLICATIONS_SUCCESS, payload: data });
   } catch (error) {
      console.log("Error", error);
      // Response Failure
      dispatch({ type: DELETE_JOB_APPLICATIONS_FAIL, payload: error.response.data.message });
   }
};

// DELETE  job 
export const deleteJob = (jobId) => async (dispatch) => {
   try {
      // Dispatch request
      dispatch({ type: DELETE_JOB_REQUEST });

      if (!jobId) return;
      let Link = `/api/v1/company/delete/job/${jobId}`

      // Requesting  Data
      const { data } = await axios.delete(Link);

      dispatch({ type: DELETE_JOB_SUCCESS, payload: data.message });
   } catch (error) {
      console.log("Error", error);
      // Response Failure
      dispatch({ type: DELETE_JOB_FAIL, payload: error.response.data.message });
   }
};