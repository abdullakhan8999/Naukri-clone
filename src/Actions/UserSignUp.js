import axios from "axios";
// const BASE_URL = "http://localhost:8080/api/v1";
const BASE_URL = "https://crm-backend-system-employee-hiring.onrender.com/api/v1";

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
   LOGOUT_REQUEST,
   LOGOUT_SUCCESS,
   UPDATE_USER_REQUEST,
   UPDATE_USER_SUCCESS,
   UPDATE_USER_FAIL,
   LOAD_ALL_STUDENTS_USER_REQUEST,
   LOAD_ALL_STUDENTS_USER_SUCCESS,
   LOAD_ALL_STUDENTS_USER_FAIL,
   LOAD_ALL_ENGINEER_REQUEST,
   LOAD_ALL_ENGINEER_SUCCESS,
   LOAD_ALL_ENGINEER_FAIL,
   DELETE_USER_REQUEST,
   DELETE_USER_SUCCESS,
   DELETE_USER_FAIL,
   UPDATE_ENGINEER_REQUEST,
   UPDATE_ENGINEER_SUCCESS,
   UPDATE_ENGINEER_FAIL,
   DELETE_ENGINEER_REQUEST,
   DELETE_ENGINEER_SUCCESS,
   DELETE_ENGINEER_FAIL,
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
      const { data } = await axios.get(BASE_URL + `/me`,);
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
         BASE_URL + `/login`,
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
      const Data = await axios.post(BASE_URL + `/register`, studentData, config);
      // console.log(Data);
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
      console.log("Error: ", error)
      dispatch({
         type: REGISTER_USER_FAIL,
         payload: error.response?.data?.message
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
      const { data } = await axios.post(BASE_URL + "/register/engineer", companyData, config);

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

// Logut
export const userLogout = () => async (dispatch) => {
   try {
      // Requesting registration for company
      dispatch({ type: LOGOUT_REQUEST });

      // Requesting registration for company backend
      await axios.get(BASE_URL + "/logout");

      // Response from registration of company
      dispatch({ type: LOGOUT_SUCCESS });
   } catch (error) {
      // Response failure
      console.log("Error While Logging Out", error);
   }
};

// Update use Details
export const UpdateUserDetails = (userDetails) => async (dispatch) => {
   try {
      // Requesting registration for company
      dispatch({ type: UPDATE_USER_REQUEST });

      // Requesting registration for company backend
      const { data } = await axios.put(BASE_URL + "/update/details", userDetails);

      // Response from registration of company
      dispatch({ type: UPDATE_USER_SUCCESS, payload: data.user });
   } catch (error) {
      // Response failure
      console.log(error)
      dispatch({
         type: UPDATE_USER_FAIL,
         payload: error.response.data.message
      })
   }
}

export const getAllStudentsInfo = () => async (dispatch) => {
   try {
      // Requesting registration for company
      dispatch({ type: LOAD_ALL_STUDENTS_USER_REQUEST });

      // Requesting registration for company backend
      const { data } = await axios.get(BASE_URL + "/admin/students");

      // Response from registration of company
      dispatch({ type: LOAD_ALL_STUDENTS_USER_SUCCESS, payload: data.students });
   } catch (error) {
      // Response failure
      dispatch({
         type: LOAD_ALL_STUDENTS_USER_FAIL,
         payload: error.response.data.message
      })
   }
}

export const getAllEngineersInfo = () => async (dispatch) => {
   try {

      // Requesting registration for company
      dispatch({ type: LOAD_ALL_ENGINEER_REQUEST });

      // Requesting registration for company backend
      const { data } = await axios.get(BASE_URL + "/admin/get/engineers");

      // Response from registration of company
      dispatch({ type: LOAD_ALL_ENGINEER_SUCCESS, payload: data.engineers });
   } catch (error) {
      console.log(error)
      // Response failure
      dispatch({
         type: LOAD_ALL_ENGINEER_FAIL,
         payload: error.response.data.message
      })
   }
}

export const deleteStudent = (userId) => async (dispatch) => {
   try {
      // Requesting registration for company
      dispatch({ type: DELETE_USER_REQUEST });

      // Requesting registration for company backend
      const { data } = await axios.delete(BASE_URL + `/delete/user/${userId}`);

      // Response from registration of company
      dispatch({ type: DELETE_USER_SUCCESS, payload: data.message });
   } catch (error) {
      // Response failure
      console.log(error)
      dispatch({
         type: DELETE_USER_FAIL,
         payload: error.response.data.message
      })
   }
}

export const deleteEngineer = (engineer_id) => async (dispatch) => {
   try {
      // Requesting registration for company
      dispatch({ type: DELETE_ENGINEER_REQUEST });

      // Requesting registration for company backend
      const { data } = await axios.delete(BASE_URL + `/admin/delete/engineer/${engineer_id}`);

      // Response from registration of company
      dispatch({ type: DELETE_ENGINEER_SUCCESS, payload: data.message });
   } catch (error) {
      // Response failure
      console.log(error)
      dispatch({
         type: DELETE_ENGINEER_FAIL,
         payload: error.response.data.message
      })
   }
}


// Update ENGINEER Details
export const UpdateEngineerStatus = (engineerDetails) => async (dispatch) => {
   try {
      // Requesting registration for company
      dispatch({ type: UPDATE_ENGINEER_REQUEST });

      // Requesting registration for company backend
      const { data } = await axios.put(BASE_URL + "/admin/update/engineer/status", engineerDetails);

      // Response from registration of company
      dispatch({ type: UPDATE_ENGINEER_SUCCESS, payload: data.message });
   } catch (error) {
      // Response failure
      console.log(error)
      dispatch({
         type: UPDATE_ENGINEER_FAIL,
         payload: error.response.data.message
      })
   }
}