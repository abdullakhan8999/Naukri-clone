import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
import Header from "../Header/Header";
import { useParams } from "react-router-dom";
import GitHub from "../../assets/github.png";
import linkedin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.svg";
import OverViewSection from "./OverViewSection";
import JobsSection from "./JobsSection";
import TakeToTop from "../Layout/TakeToTop";
import ScrollToTop from "../../Utils/ScrollToTop";
import { getCompanyDetails } from "../../Actions/CompaniesActions";
import { loadingRequest, loadingSuccess } from "../../Reducers/uiLoaderReducer";

const CompanyDetailsPage = () => {
  //Variables and state
  let { CompanyId } = useParams();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user);
  const { company, companyLoading } = useSelector((state) => state.company);
  const { uiLoader } = useSelector((state) => state.uiLoader);
  const [showOverview, setShowOverview] = useState(false);

  //Effect
  useEffect(() => {
    ScrollToTop();
    dispatch(getCompanyDetails(CompanyId));
    dispatch(loadingRequest());
    setTimeout(() => {
      dispatch(loadingSuccess());
    }, 500);
  }, []);

  //functions

  return (
    <>
      {companyLoading || loading || uiLoader ? (
        <Loader />
      ) : (
        <>
          <Header />
          <div
            className={` relative mt-[100px] mx-auto flex items-start justify-around flex-col px-3`}
          >
            <div className="md:w-[1128px] w-ful mx-auto">
              <div className="flex items-start justify-between  gap-4">
                <div className="card  md:w-[700px]">
                  <p className="text-lg md:text-2xl font-bold tracking-wider">
                    {company.name}
                  </p>
                  <p className="text-sm font-semibold text-slate-500">
                    {company.location}
                  </p>

                  <ul className="flex items-start justify-start gap-3 flex-wrap uppercase mt-3">
                    {company &&
                      company.companyDepartments.map((department, i) => (
                        <li
                          key={i}
                          className="text-xs ring-[1px] ring-zinc-300 rounded-xl py-1 px-3"
                        >
                          {department}
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
                          <img src={GitHub} alt="GitHub" className=" h-6" />
                        </a>
                      </li>
                      <li className="hover:underline hover:text-blue-700 ">
                        <a href="https://www.linkedin.com/in/abdullakhan8999/">
                          <img src={linkedin} alt="linkedin" className=" h-6" />
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
                      showOverview && "text-black font-bold tracking-widest"
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
                      !showOverview && "text-black font-bold tracking-widest"
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
            </div>
            {/* Sections Overview and Jobs */}
            <div
              className={`md:w-[1128px] w-ful mx-auto flex items-start justify-between w-full gap-4  mb-[70px]`}
            >
              {showOverview ? (
                <OverViewSection company={company} />
              ) : (
                <JobsSection company={company} />
              )}
            </div>
            <TakeToTop />
          </div>
        </>
      )}
    </>
  );
};

export default CompanyDetailsPage;
