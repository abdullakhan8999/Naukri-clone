import {
   GET_STUDENT_REQUEST,
   GET_STUDENT_SUCCESS,
   GET_STUDENT_FAIL,
   GET_ALL_STUDENTS_REQUEST,
   GET_ALL_STUDENTS_SUCCESS,
   GET_ALL_STUDENTS_FAIL,
   CLEAR_ERRORS
} from "../Constants/studentProfileConstants.js";
import axios from "axios";
const BASE_URL = "https://crm-backend-system-employee-hiring.onrender.com/api/v1";


// Clearing Errors
export const clearErrors = () => async (dispatch) => {
   dispatch({ type: CLEAR_ERRORS });
};

// get Student Info
export const getStudentInfo = (student_id) => async (dispatch) => {
   try {
      // Dispatch request
      dispatch({ type: GET_STUDENT_REQUEST });

      // Requesting  Data from db
      const { data } = await axios.get(BASE_URL + `/student/details/${student_id}`,);
      dispatch({ type: GET_STUDENT_SUCCESS, payload: data.student });
   } catch (error) {
      console.log("Error", error);
      // Response Failure
      dispatch({ type: GET_STUDENT_FAIL, payload: error.response.data.message });
   }
};

// get Students
export const getAllStudents = () => async (dispatch) => {
   try {
      // Dispatch request
      dispatch({ type: GET_ALL_STUDENTS_REQUEST });

      // Requesting  Data from db
      const { data } = await axios.get(BASE_URL + `/admin/students`,);
      dispatch({ type: GET_ALL_STUDENTS_SUCCESS, payload: data.students });
   } catch (error) {
      console.log("Error", error);
      // Response Failure
      dispatch({ type: GET_ALL_STUDENTS_FAIL, payload: error.response.data.message });
   }
};