import React, { useEffect } from "react";
import Loader from "../Loader";
import HomeLeft from "./HomeLeft";
import HomeMid from "./HomeMid";
import HomeRight from "./HomeRight";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TakeToTop from "../Layout/TakeToTop";
import { LoadJobs } from "../../Actions/JobsActions";
import { LoadCompanies } from "../../Actions/CompaniesActions";
import ScrollToTop from "../../Utils/ScrollToTop";
import { LoadJobsApplications } from "../../Actions/jobApplicationsActions";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    ScrollToTop();
    dispatch(LoadJobs());
    dispatch(LoadCompanies());
    dispatch(LoadJobsApplications());
  }, []);

  // date from state
  const { error, loading, isAuthenticated, user } = useSelector(
    (state) => state.user
  );
  const { jobsLoading } = useSelector((state) => state.jobs);
  const { companiesLoading } = useSelector((state) => state.companies);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  return (
    <>
      {loading || jobsLoading || companiesLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <div className="pt-[100px] w-full ">
            <div className="w-full  lg:w-[1128px] mx-auto px-3 flex items-start justify-between ">
              <div className="card w-[200px] hidden md:flex items-start justify-center flex-col p-3">
                <HomeLeft />
              </div>
              <div className=" md:w-[600px] w-full">
                <HomeMid />
              </div>
              <div className=" w-[200px] hidden  md:block">
                <HomeRight />
              </div>
            </div>
          </div>
          <TakeToTop />
        </>
      )}
    </>
  );
};

export default Home;
