import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import "./Card.css";
import { useSelector } from "react-redux";
import Loader from "../Loader";

const Card = () => {
  const navigate = useNavigate();

  const { jobsLoading, jobs } = useSelector((state) => state.jobs);
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      {jobsLoading ? (
        <Loader />
      ) : (
        <div className=" mx-auto mediaScroller snaps-inline">
          {jobs.length > 0 &&
            jobs.map((job) => (
              <Link
                to={`/job/${job._id}`}
                className="mediaElement decoration-none h-[250px]"
                key={job.company_id}
              >
                <div className="card mediaElement py-5 bg-slate-200 flex items-start justify-start flex-col">
                  <p className="text-xl font-bold text-[#0D0D0D]">
                    {job.title}
                  </p>
                  <p className="text-lg text-gray-600">{job.company_name}</p>
                  <p className="text-sm mt-3 flex items-center gap-3 text-gray-600">
                    <SlLocationPin />
                    {job.location}
                  </p>
                  <p className="text-sm mt-2 text-gray-600">1d ago</p>
                </div>
              </Link>
            ))}
        </div>
      )}
    </>
  );
};

export default Card;
