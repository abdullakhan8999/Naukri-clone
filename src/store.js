import { configureStore } from "@reduxjs/toolkit";
import { navbarReducer } from "./Reducers/navbarReducer";
import { userReducer, usersReducer, engineersReducer, engineerReducer } from "./Reducers/UserReducer";
import { jobsReducer } from "./Reducers/JobsReducer";
import { jobReducer, editJobReducer } from "./Reducers/JobReducer.js";
import { companyReducer } from "./Reducers/companyReducer.js";
import { applicationReducer } from "./Reducers/applicationReducer.js";
import { companiesReducer } from "./Reducers/CompaniesReducer";
import { applicationsReducer } from "./Reducers/applicationsReducer.js";
import { uiLoaderReducer } from "./Reducers/uiLoaderReducer.js";
import { searchReducer } from "./Reducers/searchReducer.js";
import { studentProfileReducer } from "./Reducers/studentProfileReducer.js";

const store = configureStore({
   reducer: {
      navbar: navbarReducer,
      user: userReducer,
      job: jobReducer,
      company: companyReducer,
      application: applicationReducer,
      jobs: jobsReducer,
      companies: companiesReducer,
      applications: applicationsReducer,
      uiLoader: uiLoaderReducer,
      search: searchReducer,
      editJob: editJobReducer,
      studentProfile: studentProfileReducer,
      users: usersReducer,
      engineers: engineersReducer,
      engineer: engineerReducer
   },
});

export default store;