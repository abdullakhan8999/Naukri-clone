import React, { useEffect } from "react";
import Header from "../Header/Header";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
import CompanyDetailsCard from "../companiesPage/companyDetailsCard";
import { Link } from "react-router-dom";
import JobDetailsCard from "../JobDetails/JobDetailsCard";
import {
  filterCompaniesCategories,
  searchCompanies,
} from "../../Actions/CompaniesActions";
import { LoadJobs, searchJobs } from "../../Actions/JobsActions";
import { companyCategories } from "../../Constants/NavbarElements";
import { loadingRequest, loadingSuccess } from "../../Reducers/uiLoaderReducer";
import { setSearchQuery } from "../../Actions/searchAction";
import ScrollToTop from "../../Utils/ScrollToTop";

const SearchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    ScrollToTop();
  }, []);
  const searchQuery = useSelector((state) => state.search.searchQuery);
  const { companies, companiesLoading } = useSelector(
    (state) => state.companies
  );
  const { jobs, jobsLoading } = useSelector((state) => state.jobs);

  useEffect(() => {
    if (searchQuery) {
      dispatch(searchCompanies(searchQuery));
      dispatch(searchJobs(searchQuery));
      dispatch(setSearchQuery(""));
    }
  }, [searchQuery]);

  const handleCompaniesFilter = (category, i) => {
    if (i != 0) {
      dispatch(loadingRequest());
      setTimeout(() => {
        dispatch(filterCompaniesCategories(category));
        dispatch(loadingSuccess());
      }, 500);
    } else {
      dispatch(loadingRequest());
      setTimeout(() => {
        dispatch(filterCompaniesCategories());
        dispatch(loadingSuccess());
      }, 500);
    }
  };
  const handleAllJobs = () => {
    dispatch(loadingRequest());
    setTimeout(() => {
      dispatch(LoadJobs());
      dispatch(loadingSuccess());
    }, 500);
  };
  return (
    <>
      {companiesLoading || jobsLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <div className="bg-white header mb-4 mt-[80px]">
            <div>
              <div className="md:w-[1128px] py-4 text-sm md:text-lg font-bold w-ful px-4 mx-auto flex items-center gap-3 py-auto flex-wrap justify-start">
                {jobs && jobs.length > 0 ? (
                  <p className=" tracking-wider font-bold text-sm md:text-lg">
                    Top {jobs.length > 5 ? "5" : jobs.length} Jobs and
                  </p>
                ) : (
                  <p className=" tracking-wider font-bold text-sm md:text-lg">
                    "No Jobs found" and
                  </p>
                )}
                {companies && companies.length > 0 ? (
                  <p className=" tracking-wider font-bold text-sm md:text-lg">
                    Top {companies.length > 5 ? "5" : companies.length}{" "}
                    Companies
                  </p>
                ) : (
                  <p className=" tracking-wider font-bold text-sm md:text-lg">
                    "No companies found"
                  </p>
                )}
                <ul className="flex items-start gap-3 py-auto flex-wrap justify-start">
                  <li
                    className="text-xs ring-[1px] cursor-pointer ring-zinc-300 rounded-xl py-1 px-3 hover:bg-gray-300 hover:text-gray-800 text-gray-500"
                    onClick={() => handleAllJobs()}
                  >
                    All Jobs
                  </li>
                  {companyCategories.map((category, i) => (
                    <li
                      className="text-xs ring-[1px] cursor-pointer ring-zinc-300 rounded-xl py-1 px-3 hover:bg-gray-300 hover:text-gray-800 text-gray-500"
                      key={i}
                      onClick={() => handleCompaniesFilter(category.label, i)}
                    >
                      {category.label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {jobs && jobs.length > 0 && (
            <div className="md:w-[1128px] w-ful mx-auto flex items-start flex-col justify-start mb-4 px-4">
              <p className=" tracking-wider font-bold text-sm md:text-lg">
                Jobs:
              </p>
            </div>
          )}
          <div className="md:w-[1128px] w-ful mx-auto flex items-start flex-col justify-start mb-4 px-4">
            {jobs &&
              jobs.length > 0 &&
              jobs.map((job, i) => (
                <Link key={i} to={`/job/${job._id}`}>
                  <div className="card w-full md:w-[700px] mb-4 ">
                    <JobDetailsCard job={job} />
                  </div>
                </Link>
              ))}
          </div>
          {companies && companies.length > 0 && (
            <div className="md:w-[1128px] w-ful mx-auto flex items-start flex-col justify-start mb-4 px-4">
              <p className=" tracking-wider font-bold text-sm md:text-lg">
                Companies:
              </p>
            </div>
          )}
          <div className="md:w-[1128px] w-ful mx-auto flex items-start flex-col justify-start mb-4 px-4">
            {companies &&
              companies.length > 0 &&
              companies.map((company, i) => (
                <Link key={i} to={`/company/${company._id}`}>
                  <div className="card w-full md:w-[700px] mb-4 ">
                    <CompanyDetailsCard company={company} />
                  </div>
                </Link>
              ))}
          </div>
        </>
      )}
    </>
  );
};

export default SearchPage;
