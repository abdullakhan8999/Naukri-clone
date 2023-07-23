import React from "react";
import { PiSuitcaseFill } from "react-icons/pi";
import { BsCurrencyRupee, BsFillPinMapFill, BsPinAngle } from "react-icons/bs";
import { Link } from "react-router-dom";

const JobDEtailsCard = ({ job, i }) => {
  return (
    <div>
      <p className="text-lg font-bold text-neutral-950 tracking-wider">
        {job.title}
      </p>
      <p className="text-sm text-gray-500 tracking-normal mb-5">
        {job.company_name}
      </p>
      <div className="flex items-center justify-start gap-[20px] mb-2">
        <p className="flex items-center gap-[10px] text-sm text-gray-500 ">
          {" "}
          <PiSuitcaseFill />
          {job.experience} years
        </p>
        <p className=" bg-slate-300 h-[20px] w-[2px] rounded-full mx-1"></p>
        <p className="flex items-center gap-[10px] text-sm text-gray-500 ">
          <BsCurrencyRupee />
          Not Disclosed
        </p>
      </div>
      <p className="flex items-center gap-[10px] text-sm text-gray-500 mb-2">
        <BsPinAngle />
        Remote
      </p>
      <div className="flex items-center justify-between gap-[20px] mb-4">
        <p className="flex items-center gap-[10px] text-sm text-gray-500 ">
          <BsFillPinMapFill />
          {job.location}
        </p>
        <p className="text-blue-800 hover:underline font-medium">
          Send me jobs like this
        </p>
      </div>
      <p className=" bg-slate-300 h-[2px] w-full rounded-full mx-1"></p>
      <div className="w-full flex items-center justify-between mt-5">
        <div className="">
          <ul className="flex items-center gap-[15px]">
            <li className="text-sm text-slate-400">
              Posted: <span className="text-black">{i + 1 + " day ago"}</span>
            </li>
            <li className="text-sm text-slate-400">
              Opening: <span className="text-black">{job.vacancies}</span>
            </li>
            <li className="text-sm text-slate-400">
              Job Applications:{" "}
              <span className="text-black">{job.jobApplications.length}</span>
            </li>
          </ul>
        </div>
        <Link
          to="#"
          className="bg-blue-500 text-white p-2 text-center rounded-full w-[80px] hover:bg-transparent hover:text-blue-500 hover:ring-2 hover:ring-blue-500"
        >
          Apply
        </Link>
      </div>
    </div>
  );
};

export default JobDEtailsCard;
