import axios from "axios";
// const BASE_URL = "http://localhost:8080/api/v1";

import {
   LOGIN_REQUEST,
   LOGIN_SUCCESS,
   LOGIN_FAIL,
   REGISTER_USER_REQUEST,
   REGISTER_USER_SUCCESS,
   REGISTER_USER_FAIL,
   LOAD_USER_REQUEST,
   LOAD_USER_SUCCESS,
   LOAD_USER_FAIL,
   CLEAR_ERRORS,
} from "../Constants/UserConstants";

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
   dispatch({ type: CLEAR_ERRORS });
};

// LoadUser
export const LoadUser = () => async (dispatch) => {
   try {
      // Dispatch request
      dispatch({ type: LOAD_USER_REQUEST });

      // Requesting  Data from db
      const { data } = await axios.get(`/api/v1/me`,);
      dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
   } catch (error) {
      // console.log("Error", error);
      // Response Failure
      dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
   }
};

// Login
export const login = (email, password) => async (dispatch) => {
   try {
      // Dispatch request
      dispatch({ type: LOGIN_REQUEST });


      // Requesting to Backend
      const config = { headers: { "Content-Type": "application/json" } };
      // Requesting  Data
      const { data } = await axios.post(
         `/api/v1/login`,
         { email, password },
         config
      );

      dispatch({ type: LOGIN_SUCCESS, payload: data.user });
   } catch (error) {
      console.log("Error", error);
      // Response Failure
      dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
   }
};

// Student Register
export const registerStudent = (studentData) => async (dispatch) => {
   try {
      // Requesting for Register
      dispatch({ type: REGISTER_USER_REQUEST });

      // Requesting for Register
      const config = { headers: { "Content-Type": "application/json" } };

      //get data
      const Data = await axios.post(`/api/v1/register`, studentData, config);
      console.log(Data);
      const { data } = Data
      // Response Success 
      dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
   } catch (error) {
      //  Response Failure
      dispatch({
         type: REGISTER_USER_FAIL,
         payload: error.response.data.message,
      });
   }
};

// Company Registration
export const registerCompany = (companyData) => async (dispatch) => {
   try {
      // Requesting registration for company
      dispatch({ type: REGISTER_USER_REQUEST });


      // Requesting registration for company backend
      const config = { headers: { "Content-Type": "application/json" } };

      const { data } = await axios.post(BASE_URL + "/register", companyData, config);

      // Response from registration of company
      dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
   } catch (error) {
      // Response failure
      dispatch({
         type: REGISTER_USER_FAIL,
         payload: error.response.data.message
      })
   }
}

// Engineer Registration
export const registerEngineer = (companyData) => async (dispatch) => {
   try {
      // Requesting registration for company
      dispatch({ type: REGISTER_USER_REQUEST });

      // Requesting registration for company backend
      const config = { headers: { "Content-Type": "multipart/form-data" } };
      const { data } = await axios.post("/api/v1/register/engineer", companyData, config);

      // Response from registration of company
      dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
   } catch (error) {
      // Response failure
      dispatch({
         type: REGISTER_USER_FAIL,
         payload: error.response.data.message
      })
   }
}