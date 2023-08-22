import React, { useEffect, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import {
  EmployeeBenefits,
  location,
  CompanyFilter,
} from "../../Constants/GeneralConstants";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import JobDetailsCard from "../JobDetails/JobDetailsCard";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { LoadJobs, searchJobs } from "../../Actions/JobsActions";
import ScrollToTop from "../../Utils/ScrollToTop";

const JobsSection = ({ company }) => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const { jobs } = useSelector((state) => state.jobs);
  const Departments = company.companyDepartments;
  const [showDepartment, setShowDepartment] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [showSalary, setShowSalary] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showRequirements, setShowRequirements] = useState(false);

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

  const handleShowJobDetails = (id) => {
    navigation(`/job/${id}`);
  };

  return (
    <div
      className={`md:w-[1128px] w-full mx-auto flex items-start justify-center flex-col`}
    >
      <div className="card mb-4 w-full">
        <p className="text-lg md:text-lg font-bold tracking-wider pb-4">
          Departments hiring at {company.name}
        </p>
        <div className="relative flex items-center justify-center">
          <MdChevronLeft
            className="opacity-50 cursor-pointer hover:opacity-100"
            onClick={slideLeft}
            size={40}
          />
          <div
            id="slider"
            className="overflow-x-scroll w-full scroll whitespace-nowrap scroll-smooth scrollbar-hide grid grid-flow-col justify-start snaps-inline"
          >
            {Departments.length > 0 &&
              Departments.map((D, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center flex-col text-center w-[140px]  px-2 py-3 rounded-lg bg-slate-300 ring-1 ring-slate-300  m-3"
                >
                  <p className="font-bold tracking-wider whitespace-break-spaces text-sm ">
                    {D}
                  </p>
                </div>
              ))}
          </div>
          <MdChevronRight
            className="opacity-50 cursor-pointer hover:opacity-100"
            onClick={slideRight}
            size={40}
          />
        </div>
      </div>
      <div className="mt-4">
        <p className="text-bold text-lg text-black mb-4">
          {company.jobs.length} Job openings at {company.name}
        </p>
        <div>
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

      <div className="mt-4">
        {jobs.length > 0
          ? jobs.map(
              (job, i) =>
                company.jobs.some((id) => id == job._id) && (
                  <div
                    key={job._id}
                    onClick={() => handleShowJobDetails(job._id)}
                  >
                    <div className="card w-full md:w-[700px] mt-4 ">
                      <JobDetailsCard job={job} />
                    </div>
                  </div>
                )
            )
          : ""}
        <div className="card my-4">
          <p className="text-lg md:text-lg font-bold tracking-wider pb-4">
            {company.name} Jobs you might be interested in
          </p>
          <div className="flex items-center justify-start gap-4">
            <div className="">
              <span className="text-sm text-gray-500 font-bold tracking-widest">
                {company.name} jobs across locations
              </span>
              <div className="bg-black h-[2px] rounded-full"></div>
            </div>
          </div>
          <p className=" bg-slate-300 h-[1px] rounded-full mb-6"></p>
          <div className=" gap-4">
            <ul className="list-disc list-inside text-gray-500 font-semibold tracking-widest grid grid-cols-1 md:grid-cols-2">
              {company.jobLocations.length > 0 &&
                company.jobLocations.map((l, i) => (
                  <li
                    key={i}
                    className="hover:underline hover:text-blue-700 cursor-pointer text-xs  p-2 m-2 "
                  >
                    <Link to="/jobs" onClick={() => dispatch(searchJobs(l))}>
                      {l}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsSection;
