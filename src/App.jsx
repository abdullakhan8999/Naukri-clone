import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home/Home.jsx";
import LoginSignUpPage from "./Components/LoginSignUp/LoginSignUpPage";
import Admin from "./Components/Admin/Admin";
import Card from "./Components/Cards/Card.jsx";
import Footer from "./Components/Footers.jsx";
import JobDetails from "./Components/JobDetails/JobDetails.jsx";
import ErrorPage from "./Components/Error_Pages/ErrorPage";
import store from "./store.js";
import { LoadUser } from "./Actions/UserSignUp.js";
import { LoadJobs } from "./Actions/JobsActions.js";
import { LoadCompanies } from "./Actions/CompanyActions.js";

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
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/error" element={<ErrorPage />} />
        <Route exact path="/card" element={<Card />} />
        <Route exact path="/job/:JobId" element={<JobDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
