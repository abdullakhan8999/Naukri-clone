import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
import GitHub from "../../assets/github.png";
import linkedin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.svg";
import OverViewSection from "./OverViewSection";
import JobsSection from "./JobsSection";
import ScrollToTop from "../../Utils/ScrollToTop";
import { getCompanyDetails } from "../../Actions/CompaniesActions";
import { loadingRequest, loadingSuccess } from "../../Reducers/uiLoaderReducer";
import CreateJob from "./CreateJob";
import UpdateCompanyDetailsSection from "./UpdateCompanyDetailsSection.jsx";
import DeleteJob from "./DeleteJob";
import { LoadJobs } from "../../Actions/JobsActions";

const CompanyPage = () => {
  //Variables and state
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.user);
  const { jobsLoading } = useSelector((state) => state.jobs);
  const { company, companyLoading } = useSelector((state) => state.company);
  const { uiLoader } = useSelector((state) => state.uiLoader);
  const [CompanyId, setCompanyId] = useState(null);
  const [showSection, setShowSection] = useState("Overview");

  //Effect
  useEffect(() => {
    ScrollToTop();
    dispatch(LoadJobs());
  }, []);

  useEffect(() => {
    if (user && user._id) {
      setCompanyId(user._id);
    }
  }, [user]);

  useEffect(() => {
    dispatch(loadingRequest());
    dispatch(getCompanyDetails(CompanyId));
    setTimeout(() => {
      dispatch(loadingSuccess());
    }, 500);
  }, [CompanyId]);

  //functions
  const handleShowSection = (section) => {
    setShowSection(section);
  };
  return (
    <>
      {loading || jobsLoading || uiLoader || companyLoading ? (
        <Loader />
      ) : (
        <>
          <div
            className={` relative mt-[100px] mx-auto flex items-start justify-around flex-col px-3`}
          >
            <div className="md:w-[1128px] w-full mx-auto">
              <div className="flex items-start justify-between  gap-4">
                <div className="card  md:w-[700px]">
                  <p className="text-lg md:text-2xl font-bold tracking-wider">
                    {company.name}
                  </p>
                  <p className="text-sm font-semibold text-slate-500">
                    {company.location}
                  </p>

                  <ul className="flex items-start justify-start gap-3 flex-wrap uppercase mt-3">
                    {company &&
                      company.companyDepartments.map((department, i) => (
                        <li
                          key={i}
                          className="text-xs ring-[1px] ring-zinc-300 rounded-xl py-1 px-3"
                        >
                          {department}
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="hidden md:block w-[380px] ">
                  <div className="card h-[135px]">
                    <p className="text-sm text-gray-500 mb-3">
                      Connect with us
                    </p>
                    <ul className="  flex items-center justify-start gap-[10px]">
                      <li className="hover:underline hover:text-blue-700 ">
                        <a href="https://github.com/abdullakhan8999">
                          <img src={GitHub} alt="GitHub" className=" h-6" />
                        </a>
                      </li>
                      <li className="hover:underline hover:text-blue-700 ">
                        <a href="https://www.linkedin.com/in/abdullakhan8999/">
                          <img src={linkedin} alt="linkedin" className=" h-6" />
                        </a>
                      </li>
                      <li className="hover:underline hover:text-blue-700 ">
                        <a href="https://www.instagram.com/abdulla_bin_samiullakhan/">
                          <img
                            src={instagram}
                            alt="instagram"
                            className=" h-6"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <ul className="mt-[50px] flex items-center justify-start gap-4">
                <li
                  className=" cursor-pointer "
                  onClick={() => handleShowSection("Overview")}
                >
                  <span
                    className={`${
                      showSection === "Overview" &&
                      "text-black font-bold tracking-widest"
                    }`}
                  >
                    Overview
                  </span>
                  <p
                    className={`${
                      showSection === "Overview" &&
                      "bg-black h-[2px] rounded-full"
                    }`}
                  ></p>
                </li>
                <li
                  className=" cursor-pointer "
                  onClick={() => handleShowSection("Jobs")}
                >
                  <span
                    className={`${
                      showSection === "Jobs" &&
                      "text-black font-bold tracking-widest"
                    }`}
                  >
                    Jobs
                  </span>
                  <p
                    className={`${
                      showSection === "Jobs" && "bg-black h-[2px] rounded-full"
                    }`}
                  ></p>
                </li>
                <li
                  className=" cursor-pointer "
                  onClick={() => handleShowSection("Create Job")}
                >
                  <span
                    className={`${
                      showSection === "Create Job" &&
                      "text-black font-bold tracking-widest"
                    }`}
                  >
                    Create
                  </span>
                  <p
                    className={`${
                      showSection === "Create Job" &&
                      "bg-black h-[2px] rounded-full"
                    }`}
                  ></p>
                </li>
                <li
                  className=" cursor-pointer "
                  onClick={() => handleShowSection("Update Company")}
                >
                  <span
                    className={`${
                      showSection === "Update Company" &&
                      "text-black font-bold tracking-widest"
                    }`}
                  >
                    Update
                  </span>
                  <p
                    className={`${
                      showSection === "Update Company" &&
                      "bg-black h-[2px] rounded-full"
                    }`}
                  ></p>
                </li>
                <li
                  className=" cursor-pointer "
                  onClick={() => handleShowSection("Delete Job")}
                >
                  <span
                    className={`${
                      showSection === "Delete Job" &&
                      "text-black font-bold tracking-widest"
                    }`}
                  >
                    Delete
                  </span>
                  <p
                    className={`${
                      showSection === "Delete Job" &&
                      "bg-black h-[2px] rounded-full"
                    }`}
                  ></p>
                </li>
              </ul>
              <p className=" bg-slate-300 h-[1px] w-full rounded-full mb-6"></p>
            </div>
            {/* Sections Overview and Jobs */}
            <div
              className={`md:w-[1128px] w-ful mx-auto flex items-start justify-between w-full gap-4  mb-[70px]`}
            >
              {showSection === "Overview" && (
                <OverViewSection company={company} />
              )}
              {showSection === "Jobs" && <JobsSection company={company} />}
              {showSection === "Create Job" && <CreateJob company={company} />}
              {showSection === "Delete Job" && <DeleteJob company={company} />}
              {showSection === "Update Company" && (
                <UpdateCompanyDetailsSection
                  company={company}
                  setShowSection={setShowSection}
                />
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CompanyPage;
