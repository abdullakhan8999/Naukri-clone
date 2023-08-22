// reducer.js
import { createReducer } from "@reduxjs/toolkit";
import {
   setSearchQuery, UserActionRequest, UserActionReset
} from "../Actions/searchAction";

const initialState = {
   searchQuery: '',
   isActionsThere: false
};

export const searchReducer = createReducer(initialState, (builder) => {
   builder
      .addCase(setSearchQuery, (state, action) => {
         state.searchQuery = action.payload;
      })
      .addCase(UserActionRequest, (state, action) => {
         state.isActionsThere = true;
      })
      .addCase(UserActionReset, (state, action) => {
         state.isActionsThere = false;
      })
});



