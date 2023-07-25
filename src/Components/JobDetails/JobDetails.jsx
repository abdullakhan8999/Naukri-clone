import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Loader from "../Loader";
import Header from "../Header/Header";
import JobDetailsCard from "./JobDetailsCard.jsx";
import FastForward from "../../assets/naukri_job_details.png";

const JobDetails = () => {
  const { jobsLoading, jobs } = useSelector((state) => state.jobs);
  const { companies } = useSelector((state) => state.companies);
  let { JobId } = useParams();
  let companyID =
    jobs.length > 0 ? jobs.find((job) => job._id == JobId).company_id : null;

  return (
    <>
      {jobsLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          {jobs.length > 0
            ? jobs.map((job, i) =>
                job._id == JobId ? (
                  <div
                    key={i}
                    className={`relative py-[100px] md:w-[1128px] w-full mx-auto flex items-start justify-between px-3`}
                  >
                    <div className="">
                      <div className="card w-full md:w-[700px] ">
                        <JobDetailsCard job={job} i={i} />
                      </div>
                      <div className="card mt-4 w-full md:w-[700px] ">
                        <div className=" p-3 rounded-xl  bg-slate-200 shadow-0 mb-3">
                          <p className="text-sm md:text-lg font-bold tracking-wider">
                            Job highlights:
                          </p>
                          <ul className="list-disc pl-5 text-sm my-3">
                            <li>Experience : {job.experience} Years.</li>
                          </ul>
                          <ul className="list-disc pl-5 text-sm mb-3">
                            <li>
                              Hiring status :{" "}
                              <span
                                className={`${
                                  job.hiring_status == "open"
                                    ? "text-green-500"
                                    : "text-orange-500"
                                } font-bold  uppercase`}
                              >
                                {job.hiring_status}
                              </span>
                            </li>
                          </ul>
                          <ul className="list-disc pl-5 text-sm">
                            <li>Vacancies : {job.vacancies} Openings.</li>
                          </ul>
                        </div>
                        <div className="">
                          <p className="text-sm font-bold tracking-wider">
                            Job description:
                          </p>
                          <p className=" text-gray-500 text-xs md:text-sm">
                            {job.description}
                          </p>
                          <p className="text-sm font-bold tracking-wider mt-3 mb-2">
                            Key Skills:
                          </p>
                          <ul className="flex items-start justify-start gap-3 flex-wrap uppercase">
                            {job.requirement.map((skill) => (
                              <li
                                key={skill}
                                className="text-xs md:text-sm ring-2 ring-zinc-500 rounded-xl p-2 hover:text-blue-500 hover:ring-blue-500"
                              >
                                {skill}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="card mt-4 w-full md:w-[700px] ">
                        <p className="text-sm font-bold tracking-wider mb-2">
                          Beware of imposters!
                        </p>
                        <p className="text-xs md:text-sm text-gray-500 tracking-wide">
                          Naukri.com does not promise a job or an interview in
                          exchange of money. Fraudsters may ask you to pay in
                          the pretext of registration fee, Refundable Fee…
                          <span className="text-blue-700  font-semibold cursor-pointer hover:underline">
                            Read more
                          </span>
                        </p>
                      </div>
                      <div className="mt-8">
                        <p className="text-sm font-bold tracking-wider mb-2">
                          Similar jobs
                        </p>
                        {jobs.map((job, i) => (
                          <Link
                            key={i}
                            to={`/job/${job._id}`}
                            onClick={() => window.scrollTo(0, 0)}
                          >
                            {job._id == JobId ? null : (
                              <div className="card w-full md:w-[700px] mt-4 ">
                                <JobDetailsCard
                                  job={job}
                                  i={i}
                                  related={"related"}
                                />
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="hidden md:block w-[380px] ">
                      <div className="mb-4">
                        {companies.length > 0
                          ? companies.map(
                              (company, i) =>
                                company._id == companyID && (
                                  <div className="card" key={i}>
                                    <p className="text-sm font-bold tracking-wider mb-2">
                                      About company:
                                    </p>
                                    <p className=" text-gray-500 text-xs md:text-sm mb-2">
                                      {company.description}
                                    </p>
                                    <p className="text-sm font-bold tracking-wider mb-2">
                                      Company Location:
                                    </p>
                                    <p className=" text-gray-500 text-xs md:text-sm">
                                      {company.location}
                                    </p>
                                  </div>
                                )
                            )
                          : ""}
                      </div>
                      <div className="card tracking-wide">
                        <div className="flex items-start mb-3 justify-between">
                          <p className=" font-bold text-lg">
                            Services you might be interested in
                          </p>
                          <p className=" font-bold text-sm text-blue-800 cursor-pointer hover:underline">
                            Know more
                          </p>
                        </div>
                        <p className="text-sm text-gray-500">Resume Display</p>
                        <p className="text-sm text-gray-500">
                          <span className="font-bold text-black pr-1">
                            Increase your profile visibility to recruiters upto
                            3 times
                          </span>
                          Get a Featured Profile, Stand out and get noticed in
                          recruiter eyes.
                        </p>
                        <p className=" bg-slate-300 h-[1px] w-full rounded-full my-4"></p>
                        <div className="flex items-center justify-between">
                          <img
                            src={FastForward}
                            className="w-[100px]"
                            alt="FastForwardImg"
                          />
                          <p className="text-xs text-gray-400">
                            * May include paid services
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null
              )
            : "Jobs not found."}
        </>
      )}
    </>
  );
};

export default JobDetails;
