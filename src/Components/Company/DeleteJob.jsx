import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { PiSuitcaseFill } from "react-icons/pi";
import { BsCurrencyRupee, BsPinAngle } from "react-icons/bs";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CompanyFilter } from "../../Constants/GeneralConstants";
import { LoadJobs, deleteJob, searchJobs } from "../../Actions/JobsActions";
import { LoadUser } from "../../Actions/UserSignUp";
import { getCompanyDetails } from "../../Actions/CompaniesActions";

const DeleteJob = ({ company }) => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { jobs } = useSelector((state) => state.jobs);
  const { user } = useSelector((state) => state.user);
  const [showDepartment, setShowDepartment] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [showSalary, setShowSalary] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showRequirements, setShowRequirements] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [deleteThisJob, setDeleteThisJob] = useState(null);

  const HandelFilterJobs = (field) => {
    if (field == "department") {
      setShowDepartment(!showDepartment);
      setShowLocation(false);
      setShowExperience(false);
      setShowSalary(false);
      setShowRequirements(false);
    } else if (field == "location") {
      setShowLocation(!showLocation);
      setShowDepartment(false);
      setShowExperience(false);
      setShowSalary(false);
      setShowRequirements(false);
    } else if (field == "experience") {
      setShowExperience(!showExperience);
      setShowLocation(false);
      setShowSalary(false);
      setShowDepartment(false);
      setShowRequirements(false);
    } else if (field == "salary") {
      setShowSalary(!showSalary);
      setShowDepartment(false);
      setShowLocation(false);
      setShowExperience(false);
      setShowRequirements(false);
    } else {
      setShowRequirements(!showRequirements);
      setShowSalary(false);
      setShowDepartment(false);
      setShowLocation(false);
      setShowExperience(false);
    }
  };

  const handleJobsFilterByLocation = (L) => {
    setShowLocation(!showLocation);
    dispatch(searchJobs(L));
  };

  const handleJobsFilterByDepartment = (D) => {
    setShowDepartment(!showDepartment);
    dispatch(searchJobs(D));
  };

  const handleJobsFilterBySalary = (S) => {
    setShowSalary(!showSalary);
    dispatch(searchJobs(S));
  };

  const handleFilterJobsByExperience = (e) => {
    setShowExperience(!showExperience);
    dispatch(searchJobs(e));
  };

  const handleFilterJobsByRequirement = (r) => {
    setShowRequirements(!showRequirements);
    r ? dispatch(searchJobs(r[0])) : dispatch(searchJobs());
  };

  const handleDeleteJob = async () => {
    setShowAlert(false);
    await dispatch(deleteJob(deleteThisJob._id));
    setDeleteThisJob(null);
    await dispatch(LoadJobs());
    await dispatch(LoadUser());
    await dispatch(getCompanyDetails(company._id));
  };

  const handleEditJob = (id) => {
    navigation(`/editJob/${id}`);
  };

  const handleConfirmDeleteJob = (job) => {
    setShowAlert(!showAlert);
    setDeleteThisJob(job);
  };

  const Alert = () => {
    return (
      <div className=" fixed top-[100px] z-10 card left-1/2 -translate-x-1/2">
        <p className="uppercase tracking-wider text-2xl font-bold pb-2">
          Alter
        </p>
        <p className="capitalize tracking-wider text-lg  font-bold pb-5">
          Confirm to Delete the{" "}
          <span className=" font-bold underline text-red-500">
            {deleteThisJob.title}
          </span>{" "}
          Job?
        </p>
        <div className="flex justify-between">
          <button
            className="bg-blue-500 font-bold tracking-wider text-lg  text-white p-1 text-start rounded-full px-3 hover:bg-transparent hover:text-blue-500 hover:ring-2 hover:ring-blue-500"
            onClick={() => setShowAlert(false)}
          >
            No
          </button>
          <button
            className="bg-yellow-500 font-bold tracking-wider text-lg  text-white p-1 text-start rounded-full px-3 hover:bg-transparent hover:text-red-500 hover:ring-2 hover:ring-red-500"
            onClick={() => handleDeleteJob()}
          >
            Yes
          </button>
        </div>
      </div>
    );
  };
  console.log(company.jobs.length);
  return (
    <div className="flex flex-wrap relative md:w-[1128px] w-full mx-auto items-start justify-between px-3">
      <div className="">
        <div className="">
          {company.jobs && (
            <p className="uppercase tracking-wider text-lg md:text-2xl pt-5 font-bold pb-2 px-2">
              {company.jobs.length} Job openings at {company.name}
            </p>
          )}
          <div className="mb-3">
            <ul className="flex items-start justify-start gap-3 flex-wrap uppercase mt-3">
              {CompanyFilter.map(
                (field, i) =>
                  i <= 4 && (
                    <li
                      key={field}
                      className=" hover:bg-slate-300 text-sm flex items-center justify-between bg-white ring-[1px] ring-zinc-300 rounded-xl py-1 px-3 mr-2 cursor-pointer"
                      onClick={() => HandelFilterJobs(field)}
                    >
                      {field}
                      <AiFillCaretDown className="ml-2 text-xs" />
                    </li>
                  )
              )}
            </ul>
            <ul
              className={`mt-3 ${
                showDepartment ? "block" : "hidden"
              } bg-white ring-[1px] ring-zinc-300 rounded-xl py-1  mr-2`}
            >
              {company.companyDepartments.map((D, i) => (
                <li
                  key={i}
                  className="hover:bg-slate-200 px-2 cursor-pointer"
                  onClick={() => handleJobsFilterByDepartment(D)}
                >
                  {D}
                </li>
              ))}
              <li
                className="hover:bg-slate-200 px-2 cursor-pointer"
                onClick={() => handleJobsFilterByDepartment()}
              >
                All Departments
              </li>
            </ul>
            <ul
              className={`mt-3 ${
                showSalary ? "block" : "hidden"
              } bg-white ring-[1px] ring-zinc-300 rounded-xl py-1  mr-2`}
            >
              {jobs.map(({ salary }, i) => (
                <li
                  key={i}
                  className="hover:bg-slate-200 px-2 cursor-pointer"
                  onClick={() => handleJobsFilterBySalary(salary)}
                >
                  {salary} LPA
                </li>
              ))}
              <li
                className="hover:bg-slate-200 px-2 cursor-pointer"
                onClick={() => handleJobsFilterBySalary()}
              >
                All jobs
              </li>
            </ul>
            <ul
              className={`mt-3 ${
                showRequirements ? "block" : "hidden"
              } bg-white ring-[1px] ring-zinc-300 rounded-xl py-1  mr-2`}
            >
              {jobs.length > 0 &&
                jobs.map(
                  (job, i) =>
                    company._id === job.company_id && (
                      <li
                        key={i}
                        className="hover:bg-slate-200 px-2 cursor-pointer"
                        onClick={() =>
                          handleFilterJobsByRequirement(job.requirement)
                        }
                      >
                        <ul className="flex flex-wrap">
                          {job.requirement &&
                            job.requirement.map((requirement, j) => (
                              <li key={j} className="pr-2">
                                {requirement}
                                {j === job.requirement.length - 1 ? "" : ","}
                              </li>
                            ))}
                        </ul>
                      </li>
                    )
                )}

              <li
                className="hover:bg-slate-200 px-2 cursor-pointer"
                onClick={() => handleFilterJobsByRequirement()}
              >
                All jobs
              </li>
            </ul>
            <ul
              className={`mt-3 ${
                showLocation ? "block" : "hidden"
              } bg-white ring-[1px] ring-zinc-300 rounded-xl py-1  mr-2`}
            >
              {company.jobLocations.map((L, i) => (
                <li
                  key={i}
                  onClick={() => handleJobsFilterByLocation(L)}
                  className="hover:bg-slate-200 px-2 cursor-pointer"
                >
                  {L}
                </li>
              ))}
              <li
                className="hover:bg-slate-200 px-2 cursor-pointer"
                onClick={() => handleJobsFilterByLocation()}
              >
                All Locations
              </li>
            </ul>
            <ul
              className={`mt-3 ${
                showExperience ? "block" : "hidden"
              } bg-white ring-[1px] ring-zinc-300 rounded-xl py-1  mr-2`}
            >
              <li
                className="hover:bg-slate-200 px-2 cursor-pointer"
                onClick={() => handleFilterJobsByExperience("1")}
              >
                1 Years
              </li>
              <li
                className="hover:bg-slate-200 px-2 cursor-pointer"
                onClick={() => handleFilterJobsByExperience("2")}
              >
                2 Years
              </li>
              <li
                className="hover:bg-slate-200 px-2 cursor-pointer"
                onClick={() => handleFilterJobsByExperience("3")}
              >
                3 Years
              </li>
              <li
                className="hover:bg-slate-200 px-2 cursor-pointer"
                onClick={() => handleFilterJobsByExperience("4")}
              >
                4 Years
              </li>
              <li
                className="hover:bg-slate-200 px-2 cursor-pointer"
                onClick={() => handleFilterJobsByExperience("5")}
              >
                5 Years
              </li>
              <li
                className="hover:bg-slate-200 px-2 cursor-pointer"
                onClick={() => handleFilterJobsByExperience()}
              >
                Any Experience
              </li>
            </ul>
          </div>
          {jobs.length == 0 && (
            <p className="text-bold text-lg text-black mt-4">
              Jobs Not available,{" "}
              <button
                className="underline text-blue-600 hover:text-blue-800"
                onClick={() => handleJobsFilterByDepartment()}
              >
                try again
              </button>
            </p>
          )}
        </div>
        {jobs &&
          company.jobs.length > 0 &&
          jobs.length > 0 &&
          jobs.map(
            (job) =>
              company.jobs.some((id) => id == job._id) && (
                <div key={job._id} className="card mb-3 w-full md:w-[700px]">
                  <div className="flex justify-between flex-wrap">
                    <Link
                      to={`/job/${job._id}`}
                      className="hover:underline hover:text-blue-700"
                    >
                      Title: {job.title}
                    </Link>
                    {user && user.role === "company" && (
                      <div className="flex flex-wrap mb-2 md:mb-0">
                        <button
                          className="bg-blue-500 mr-2  md:font-bold tracking-wider text-xs md:text-sm  text-white md:p-1 text-start rounded-full px-2 md:px-3 hover:bg-transparent hover:text-green-500 hover:ring-2 hover:ring-green-500"
                          onClick={() => handleEditJob(job._id)}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-yellow-500 md:font-bold tracking-wider text-xs md:text-sm  text-white md:p-1 text-start rounded-full px-2 md:px-3 hover:bg-transparent hover:text-red-500 hover:ring-2 hover:ring-red-500"
                          onClick={() => handleConfirmDeleteJob(job)}
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                  <p className="text-xs md:text-sm text-gray-500  tracking-normal mb-2 ">
                    {job.company_name}
                  </p>
                  <div className="flex items-center justify-start gap-[20px] mb-2 flex-wrap">
                    <p className="flex items-center gap-[10px] text-xs md:text-sm text-gray-500 ">
                      {" "}
                      <PiSuitcaseFill />
                      {job.experience} years
                    </p>
                    <p className=" bg-slate-300 h-[20px] w-[2px] rounded-full mx-1"></p>
                    <p className="flex items-center gap-[10px] text-xs md:text-sm text-gray-500 ">
                      <BsCurrencyRupee />
                      {job.salary ? job.salary + " LPA" : "Not disclosed"}
                    </p>
                  </div>
                  <p className="flex items-center gap-[10px] text-xs md:text-sm text-gray-500 mb-2">
                    <BsPinAngle />
                    Remote
                  </p>
                  <p className="flex items-center gap-[10px] text-xs md:text-sm text-gray-500 mb-2">
                    <HiOutlineBuildingOffice2 className="" />
                    {job.department + " Department"}
                  </p>
                  <p className=" bg-slate-300 h-[2px] w-full rounded-full mx-1"></p>
                  <div className="w-full flex items-center justify-between mt-5">
                    <div className="">
                      <ul className="flex items-center gap-[15px] flex-wrap">
                        <li className="text-xs md:text-sm text-slate-400">
                          Posted:{" "}
                          <span className="text-black">{1 + " day ago"}</span>
                        </li>
                        <li className="text-xs md:text-sm text-slate-400">
                          Opening:{" "}
                          <span className="text-black">{job.vacancies}</span>
                        </li>
                        <li className="text-xs md:text-sm text-slate-400">
                          Job Applications:{" "}
                          <span className="text-black">
                            {job.jobApplications && job.jobApplications.length}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )
          )}
      </div>
      {showAlert && <Alert />}
    </div>
  );
};

export default DeleteJob;
