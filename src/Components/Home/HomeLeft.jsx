import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LuHome } from "react-icons/lu";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";

const HomeLeft = () => {
  return (
    <>
      <p className="text-sm font-bold pt-2">Patan Abdulla Khan</p>
      <p className="text-xs pb-2">abdullakhan8999@gmail.com</p>
      <Link
        className="text-sm text-gray-300 hover:underline hover:text-blue-500  rounded-full  "
        to="/profile"
      >
        View Profile
      </Link>

      <div className="bg-sky-100 rounded-md mt-5 p-2">
        <p className="text-sm font-semibold py-2">Profile performance </p>
        <div className="flex items-center justify-between">
          <div className="flex items-start justify-between flex-col ">
            <p className=" text-xs ">search appearances</p>
            <p className="relative pe-3 text-lg">
              390 &#8250;
              <span className="absolute top-[3px] left-[30px] w-[5px] rounded-full h-[5px]  bg-red-700"></span>
            </p>
          </div>
          <p className=" bg-slate-400 h-[50px] w-[2px] rounded-full mx-1"></p>
          <div className="flex items-start justify-between flex-col">
            <p className=" text-xs ">Recruiter actions</p>
            <p className="relative pe-3 text-lg">
              17 &#8250;
              <span className="absolute top-[3px] left-[16px] w-[5px] rounded-full h-[5px]  bg-red-700"></span>
            </p>
          </div>
        </div>
        <div className=" relative bg-white my-5 p-2 rounded-md ">
          <p className="text-lg font-semibold py-2">
            Get 3X boost to your profile performance
          </p>
          <p className="absolute top-[39%] right-[10px] text-2xl">&#8250;</p>
        </div>
      </div>

      <div className=" p-[1px] w-full bg-slate-200 my-5 rounded-full"></div>

      <div className="">
        <ul>
          <li className=" text-gray-500 hover:bg-slate-200 hover:text-gray-900 rounded-full my-2 py-2">
            <Link
              to="/"
              className="flex items-center justify-start w-[50%] mx-auto"
            >
              <LuHome className="me-2" />
              <p className="text-[0.6rem]">Home</p>
            </Link>
          </li>
          <li className=" text-gray-500 hover:bg-slate-200 hover:text-gray-900 rounded-full my-2 py-2">
            <Link
              to="/"
              className="flex items-center justify-start w-[50%] mx-auto"
            >
              <BiBriefcaseAlt2 className="me-2" />
              <p className="text-[0.6rem]">Jobs</p>
            </Link>
          </li>
          <li className=" text-gray-500 hover:bg-slate-200 hover:text-gray-900 rounded-full my-2 py-2">
            <Link
              to="/"
              className="flex items-center justify-start w-[50%] mx-auto"
            >
              <HiOutlineBuildingOffice2 className="me-2" />
              <p className="text-[0.6rem]">Companies</p>
            </Link>
          </li>
          <li className=" text-gray-500 hover:bg-slate-200 hover:text-gray-900 rounded-full my-2 py-2">
            <Link
              to="/"
              className="flex items-center justify-start w-[50%] mx-auto"
            >
              <FaUserCircle className="me-2" />
              <p className="text-[0.6rem]">Profile</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HomeLeft;
