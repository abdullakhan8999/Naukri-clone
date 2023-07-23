import React from "react";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import homeMail from "../../assets/home-mail.png";
import companyAds from "../../assets/companyAds.svg";
import Photo1 from "../../assets/photo-right-img.jpeg";
import Photo2 from "../../assets/photo-home-bottom-1.jpeg";
import Photo3 from "../../assets/photo-home-bottom-2.jpg";
import JobsCard from "../Cards/Card";
import AdsCard from "../Cards/AdsCards";
import CompanyCard from "../Cards/CompanyCard";
import { useDispatch, useSelector } from "react-redux";

const HomeMid = () => {
  let bottomElements = [
    {
      img: { Photo1 },
      title: "",
      data: "",
    },
    {
      img: { Photo2 },
      title:
        "Understanding Hiring Trends With Naukri JobSpeak Report- November 2022",
      data: "2d ago",
    },
    {
      img: { Photo3 },
      title:
        "How to Answer ”What Is Your Management Style?” With Sample Answers",
      data: "1d ago",
    },
  ];

  return (
    <>
      <div className="card w-full mb-8">
        <div className="flex items-center justify-between mb-3">
          <p className="text-lg">Recommended jobs</p>
          <Link to="#" className="text-lg text-blue-500 hover:text-blue-700">
            View all
          </Link>
        </div>
        <div className=" w-full py-5 flex items-center">
          <JobsCard />
        </div>
      </div>
      <div className="card w-full mb-8 py-8 mx-auto flex items-center justify-center">
        <div className=" me-[3%]">
          <img src={homeMail} alt="homeMailImg" className="w-[100px]" />
        </div>
        <div className="">
          <p className="text-lg">Recruiters are inviting you to apply!</p>
          <Link to="#" className="text-sm text-blue-500 hover:text-blue-700">
            View all
          </Link>
        </div>
      </div>
      <div className="card w-full mb-8">
        <div className="flex items-center justify-between mb-3">
          <p className="text-lg">Top Companies</p>
          <Link to="#" className="text-lg text-blue-500 hover:text-blue-700">
            View all
          </Link>
        </div>
        <div className=" w-full py-5 flex items-center">
          <CompanyCard />
        </div>
      </div>
      <div className=" h-[150px] overflow-hidden shadow-lg rounded-xl w-full mb-8 mx-auto flex items-center justify-between bg-green-50">
        <div className="p-5">
          <p className="text-lg">Explore salaries of 5 Lakh+ companies</p>
          <p className="text-sm text-slate-400 mb-2">
            Compare salaries by designations and experience.
          </p>
          <Link to="#" className="text-sm  text-blue-500 hover:text-blue-700">
            Explore salaries
          </Link>
        </div>
        <div className="flex items-center rounded-s-[45%] justify-center rounded-e-xl  h-[200px] w-[200px]  bg-green-100 ">
          <img src={companyAds} alt="companyAds" className="" />
        </div>
      </div>
      <div className="card w-full mb-8">
        <div className="flex items-center justify-between mb-3">
          <p className="text-lg">Stay updated with our blogs</p>
          <Link to="#" className="text-lg text-blue-500 hover:text-blue-700">
            View all
          </Link>
        </div>
        <div className="w-full mb-8">
          <AdsCard />
        </div>
      </div>
    </>
  );
};

export default HomeMid;
