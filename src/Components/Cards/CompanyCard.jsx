import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import "./Card.css";
import { useSelector } from "react-redux";
import Loader from "../Loader";

const CompanyCard = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);
  const { companiesLoading, companies } = useSelector(
    (state) => state.companies
  );

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      {companiesLoading ? (
        <Loader />
      ) : (
        <div className=" mx-auto mediaScroller snaps-inline">
          {companies.length > 0 &&
            companies.map((company) => (
              <Link
                to={`/company/${company._id}`}
                className=" my-6 decoration-none"
                key={company._id}
              >
                <div className="card hover:shadow-2xl w-[300px] h-[150px] py-5 bg-slate-200 flex items-start justify-center flex-col">
                  <p className="text-xl font-bold text-[#0D0D0D]">
                    {company.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    Number of Jobs:{company.jobs.length}
                  </p>
                  <p className="text-sm mt-2 flex items-center gap-3 text-gray-600">
                    <SlLocationPin />
                    {company.location}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      )}
    </>
  );
};

export default CompanyCard;
