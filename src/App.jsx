import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home/Home.jsx";
import LoginSignUpPage from "./Components/LoginSignUp/LoginSignUpPage";
import Admin from "./Components/Admin/Admin";
import Card from "./Components/Cards/Card.jsx";
import Footer from "./Components/Footers.jsx";
import JobDetails from "./Components/JobDetails/JobDetails.jsx";
import JobsPage from "./Components/JobsPage/JobsPage.jsx";
import CompaniesPage from "./Components/companiesPage/companiesPage.jsx";
import store from "./store.js";
import { LoadUser } from "./Actions/UserSignUp.js";
import { LoadJobs } from "./Actions/JobsActions.js";
import { LoadCompanies } from "./Actions/CompaniesActions.js";
import CompanyDetailsPage from "./Components/Company/CompanyDetailsPage.jsx";
import JobsApplicationsPage from "./Components/JobsApplicationsPage/JobsApplicationsPage.jsx";
import SearchPage from "./Components/searchPage/SearchPage.jsx";
import ProfilePage from "./Components/ProfilePage/ProfilePage.jsx";
import EditJobPage from "./Components/JobDetails/EditJobPage.jsx";
import UserInfo from "./Components/UserInfo/UserInfo.jsx";

const App = () => {
  useEffect(() => {
    // get user
    store.dispatch(LoadUser());
    // load jobs
    store.dispatch(LoadJobs());
    //loading Companies
    store.dispatch(LoadCompanies());
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginSignUpPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/job/:JobId" element={<JobDetails />} />
        <Route exact path="/jobs" element={<JobsPage />} />
        <Route exact path="/editJob/:JobId" element={<EditJobPage />} />
        <Route exact path="/companies" element={<CompaniesPage />} />
        <Route exact path="/search" element={<SearchPage />} />
        <Route exact path="/profile" element={<ProfilePage />} />
        <Route exact path="/userInfo/:student_id" element={<UserInfo />} />
        <Route
          exact
          path="/company/:CompanyId"
          element={<CompanyDetailsPage />}
        />
        <Route
          exact
          path="/jobs/applications"
          element={<JobsApplicationsPage />}
        />
        <Route
          exact
          path="/jobs/applications/:JobTitle"
          element={<JobsApplicationsPage />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
