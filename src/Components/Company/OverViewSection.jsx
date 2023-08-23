import React from "react";
import { EmployeeBenefits } from "../../Constants/GeneralConstants";
import { BsBriefcase } from "react-icons/bs";
import { RiMapPin2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { filterJobsByCompanyName, searchJobs } from "../../Actions/JobsActions";
import { UserActionRequest } from "../../Actions/searchAction";

const OverViewSection = ({ company }) => {
  const dispatch = useDispatch();
  const { jobs } = useSelector((state) => state.jobs);

  //sidler
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const handleGetJobByLocation = (l) => {
    dispatch(searchJobs(l));
    dispatch(UserActionRequest());
  };
  return (
    <>
      <div className="md:w-[700px] overflow-x-scroll scrollbar-hide">
        <div className="card mb-4">
          <div className="mb-4">
            <p className="text-lg md:text-lg font-bold tracking-wider">
              About {company.name}
            </p>
            <p className="text-sm font-semibold text-slate-500">
              {company.description}
            </p>
          </div>
          <div className="mb-4">
            <p className="text-lg md:text-lg font-bold tracking-wider">
              Company Size
            </p>
            <p className="text-sm font-semibold text-slate-500">
              {company.companySize}+
            </p>
          </div>
          <div className="">
            <p className="text-lg md:text-lg font-bold tracking-wider">
              Company Type
            </p>
            <ul className="flex items-start justify-start gap-3 flex-wrap uppercase mt-3">
              {company.companyCategories.map((category, i) => (
                <li
                  key={i}
                  className="text-xs ring-[1px] ring-zinc-300 rounded-xl py-1 px-3"
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="card mb-4">
          <p className="text-lg md:text-lg font-bold tracking-wider">
            Benefits reported by employees
          </p>
          <div className="relative flex items-center justify-center">
            <MdChevronLeft
              className="opacity-50 cursor-pointer hover:opacity-100"
              onClick={slideLeft}
              size={40}
            />
            <div
              id="slider"
              className="overflow-x-scroll w-full scroll whitespace-nowrap scroll-smooth scrollbar-hide grid grid-flow-col gap-4 snaps-inline"
            >
              {EmployeeBenefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="flex items-center justify-center flex-col text-center w-[140px]  px-2 py-3 rounded-lg   ring-1 ring-slate-300  m-3"
                >
                  <img src={benefit.img} className="w-[50px]" />
                  <p className=" whitespace-break-spaces">{benefit.title}</p>
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
                    <Link to="/jobs" onClick={() => handleGetJobByLocation(l)}>
                      {l}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="hidden md:block md:w-[380px] ">
        <div className="card flex flex-col items-center justify-center ">
          <div className="">
            <label
              htmlFor="overviewOpeningsCard"
              className={`${
                company.jobs.length
                  ? "text-green-500 font-bold"
                  : " font-semibold text-red-500"
              }`}
            >
              {company.jobs.length ? "Hiring now" : "Hiring stopped"}{" "}
            </label>
            <p
              id="overviewOpeningsCard"
              className="text-lg font-semibold text-gray-900 capitalize tracking-wider mb-3"
            >
              {company.jobs.length} job openings
            </p>
            <div className="">
              {jobs.map(
                (job, i) =>
                  i < 2 &&
                  company.jobs.includes(job._id) && (
                    <div key={i}>
                      <div className="flex group w-full items-start justify-between cursor-pointer my-4">
                        <div className="">
                          <Link
                            to={`/job/${job._id}`}
                            className="text-lg group-hover:underline group-hover:text-blue-700 font-semibold text-gray-900 capitalize  mb-1"
                          >
                            {job.title}
                          </Link>
                          <div className="text-sm flex items-center justify-between">
                            <p className="flex items-center justify-between gap-3">
                              <BsBriefcase />
                              {job.experience}
                            </p>
                            <p className="flex items-center justify-between gap-3">
                              <RiMapPin2Line />
                              {job.location}
                            </p>
                          </div>
                        </div>
                        <div className=" text-2xl text-blue-500 rotate-180 flex items-center justify-center">
                          &lt;
                        </div>
                      </div>
                      <p className="w-full h-[1px] bg-slate-300 mb-4"></p>
                    </div>
                  )
              )}
            </div>
          </div>
          <Link
            to="/jobs"
            onClick={() => dispatch(filterJobsByCompanyName(company.name))}
            className="text-blue-500 text-lg ring-1 ring-blue-500 rounded-full  hover:bg-slate-200 mt-3 py-2 px-4 text-center mx-auto capitalize font-semibold"
          >
            See all openings
          </Link>
        </div>
      </div>
    </>
  );
};

export default OverViewSection;
