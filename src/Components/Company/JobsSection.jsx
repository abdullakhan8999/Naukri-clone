import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { EmployeeBenefits, location } from "../../Constants/GeneralConstants";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import JobDetailsCard from "../JobDetails/JobDetailsCard";

const JobsSection = ({ company }) => {
  const CompanyFilter = ["Department", "Location", "Experience"];
  const { jobsLoading, jobs } = useSelector((state) => state.jobs);
  let { CompanyId } = useParams();
  let number = [1, 3, 2, 4, 5, 8, 2, 6];
  //   let res = ;
  //   console.log(res);
  return (
    <div
      className={`md:w-[1128px] w-full mx-auto flex items-start justify-center flex-col`}
    >
      <div className="card mb-4 w-full">
        <p className="text-lg md:text-lg font-bold tracking-wider pb-4">
          Departments hiring at {company.name}
        </p>
        <div className="grid grid-flow-col grid-col-[200px] gap-5 overflow-x-auto py-4 px-2">
          {EmployeeBenefits.map((benefit) => (
            <div
              key={benefit.title}
              className="font-semibold w-[150px] h-[100px] flex items-center justify-center flex-col ring-[1px] ring-gray-300 rounded-2xl"
            >
              <img src={benefit.img} className="w-[50px] pb-1" />
              <p className="text-center text-sm">{benefit.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <p className="text-bold text-lg text-black mb-4">
          {company.jobs.length || "10"}+ Job openings at {company.name}
        </p>
        <ul className="flex items-start justify-start gap-3 flex-wrap uppercase mt-3">
          {CompanyFilter.map((field) => (
            <li
              key={field}
              className=" hover:bg-slate-300 text-sm flex items-center bg-white ring-[1px] ring-zinc-300 rounded-xl py-1 px-3 mr-2"
            >
              {field}
              <AiFillCaretDown className="ml-2 text-xs" />
            </li>
          ))}
        </ul>
      </div>
      <div className=" w-[700px] mt-4">
        {jobs.map(
          (job, i) =>
            company.jobs.some((id) => id == job._id) && (
              <Link
                key={i}
                to={`/job/${job._id}`}
                onClick={() => window.scrollTo(0, 0)}
              >
                <div className="card w-full md:w-[700px] mt-4 ">
                  <JobDetailsCard job={job} i={i} related={"related"} />
                </div>
              </Link>
            )
        )}

        <div className="card my-4">
          <p className="text-lg md:text-lg font-bold tracking-wider pb-4">
            Jobs you might be interested in
          </p>
          <div className="flex items-center justify-start gap-4">
            <div className="">
              <span className="text-sm text-gray-500 font-bold tracking-widest">
                Netflix jobs across locations
              </span>
              <div className="bg-black h-[2px] rounded-full"></div>
            </div>
          </div>
          <p className=" bg-slate-300 h-[1px] w-full rounded-full mb-6"></p>
          <div className=" gap-4">
            <ul className="list-disc list-inside text-xs text-gray-500 font-semibold tracking-widest grid grid-cols-3 h-[200px]">
              {location.map((l, i) => (
                <li
                  key={i}
                  className="hover:underline hover:text-blue-700 cursor-pointer"
                >
                  {l}
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
