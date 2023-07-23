import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../Loader";
import Header from "../Header/Header";
import JobDEtailsCard from "./JobDEtailsCard.jsx";

const JobDetails = () => {
  const { jobsLoading, jobs } = useSelector((state) => state.jobs);

  let { JobId } = useParams();

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
                    className={`relative pt-[100px] md:w-[1128px] w-full mx-auto flex items-start justify-between px-3`}
                  >
                    <div className="card w-full md:w-[700px] ">
                      <JobDEtailsCard job={job} i={i} />
                    </div>
                    <div className="hidden md:block w-[380px] ">
                      related Jobs of same company
                    </div>
                  </div>
                ) : null
              )
            : "No jobs found."}
        </>
      )}
    </>
  );
};

export default JobDetails;
