import { configureStore } from "@reduxjs/toolkit";
import { navbarReducer } from "./Reducers/navbarReducer";
import { userReducer } from "./Reducers/UserReducer";
import { jobsReducer } from "./Reducers/JobsReducer";
import { jobReducer } from "./Reducers/JobReducer.js";
import { companiesReducer } from "./Reducers/CompaniesReducer";

const store = configureStore({
   reducer: {
      navbar: navbarReducer,
      user: userReducer,
      jobs: jobsReducer,
      job: jobReducer,
      companies: companiesReducer,
   },
});

export default store;