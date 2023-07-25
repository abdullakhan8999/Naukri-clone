import React, { useState } from "react";
import { useSelector } from "react-redux";
import Loader from "../Loader";
import Header from "../Header/Header";
import { useParams } from "react-router-dom";
import GitHub from "../../assets/github.png";
import linkedin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.svg";
import OverViewSection from "./OverViewSection";
import JobsSection from "./JobsSection";

const CompanyDetailsPage = () => {
  const { companiesLoading, companies } = useSelector(
    (state) => state.companies
  );
  let { CompanyId } = useParams();

  const CompanyField = [
    "IOS APP DEVELOPMENT",
    "SWIFT",
    "XCODE",
    "MOBILE UI/UX",
  ];

  // sections overview and jobs
  const [showOverview, setShowOverview] = useState(false);
  return (
    <>
      {companiesLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          {companies.length > 0 &&
            companies.map(
              (company, i) =>
                company._id == CompanyId && (
                  <div
                    key={i}
                    className={` relative mt-[100px] md:w-[1128px] w-full mx-auto flex items-start justify-around flex-col px-3`}
                  >
                    <div className="flex items-start justify-between  gap-4">
                      <div className="card w-[700px]">
                        <p className="text-lg md:text-2xl font-bold tracking-wider">
                          {company.name}
                        </p>
                        <p className="text-sm font-semibold text-slate-500">
                          {company.location}
                        </p>
                        <ul className="flex items-start justify-start gap-3 flex-wrap uppercase mt-3">
                          {CompanyField.map((field) => (
                            <li
                              key={field}
                              className="text-xs ring-[1px] ring-zinc-300 rounded-xl py-1 px-3"
                            >
                              {field}
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
                                <img
                                  src={GitHub}
                                  alt="GitHub"
                                  className=" h-6"
                                />
                              </a>
                            </li>
                            <li className="hover:underline hover:text-blue-700 ">
                              <a href="https://www.linkedin.com/in/abdullakhan8999/">
                                <img
                                  src={linkedin}
                                  alt="linkedin"
                                  className=" h-6"
                                />
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
                        onClick={() => setShowOverview(!showOverview)}
                      >
                        <span
                          className={`${
                            showOverview &&
                            "text-black font-bold tracking-widest"
                          }`}
                        >
                          Overview
                        </span>
                        <p
                          className={`${
                            showOverview && "bg-black h-[2px] rounded-full"
                          }`}
                        ></p>
                      </li>
                      <li
                        className=" cursor-pointer "
                        onClick={() => setShowOverview(!showOverview)}
                      >
                        <span
                          className={`${
                            !showOverview &&
                            "text-black font-bold tracking-widest"
                          }`}
                        >
                          Jobs
                        </span>
                        <p
                          className={`${
                            !showOverview && "bg-black h-[2px] rounded-full"
                          }`}
                        ></p>
                      </li>
                    </ul>
                    <p className=" bg-slate-300 h-[1px] w-full rounded-full mb-6"></p>

                    {/* Sections Overview and Jobs */}
                    <div className="">
                      <div className={`${showOverview ? "" : " hidden"}`}>
                        <OverViewSection company={company} />
                      </div>
                      <div className={`${showOverview ? "hidden" : " "}`}>
                        <JobsSection company={company} />
                      </div>
                    </div>
                  </div>
                )
            )}
        </>
      )}
    </>
  );
};

export default CompanyDetailsPage;
