import React from "react";
import GitHub from "../../assets/github.png";
import linkedin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.svg";
import { EmployeeBenefits, location } from "../../Constants/GeneralConstants";

const OverViewSection = ({ company }) => {
  return (
    <div className="flex items-start justify-between  gap-4 ">
      <div className=" w-[700px]">
        <div className="card mb-4">
          <div className="mb-4">
            <p className="text-lg md:text-lg font-bold tracking-wider">
              About Bayer
            </p>
            <p className="text-sm font-semibold text-slate-500">
              {company.description}
            </p>
          </div>
          <div className="mb-4">
            <p className="text-lg md:text-lg font-bold tracking-wider">
              Company Size
            </p>
            <p className="text-sm font-semibold text-slate-500">100001+</p>
          </div>
          <div className="">
            <p className="text-lg md:text-lg font-bold tracking-wider">Type</p>
            <p className="text-sm font-semibold text-slate-500">Public</p>
          </div>
        </div>
        <div className="card mb-4">
          <p className="text-lg md:text-lg font-bold tracking-wider pb-4">
            Benefits reported by employees
          </p>
          <div className="grid grid-flow-col grid-col-[200px] gap-5 overflow-x-auto py-4 px-2">
            {EmployeeBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="font-semibold w-[150px] h-[125px] flex items-center justify-center flex-col ring-[1px] ring-gray-300 rounded-2xl"
              >
                <img src={benefit.img} className="w-[50px] pb-1" />
                <p className="text-center text-sm">{benefit.title}</p>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="card mb-4">
          <p className="text-lg md:text-lg font-bold tracking-wider pb-4">
            Departments hiring at {company.name}
          </p>
          <div className="grid grid-flow-col grid-col-[200px] gap-5 overflow-x-auto py-4 px-2">
            {EmployeeBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="font-semibold w-[150px] h-[100px] flex items-center justify-center flex-col ring-[1px] ring-gray-300 rounded-2xl"
              >
                <img src={benefit.img} className="w-[50px] pb-1" />
                <p className="text-center text-sm">{benefit.title}</p>
              </div>
            ))}
          </div>
        </div> */}
        <div className="card mb-4">
          <p className="text-lg md:text-lg font-bold tracking-wider pb-4">
            Jobs you might be interested in
          </p>
          <div className="flex items-center justify-start gap-4">
            <div className="">
              <span className="text-sm text-gray-500 font-bold tracking-widest">
                Netflix jobs across locations
              </span>
              <div className="bg-black h-[2px] rounded-full"></div>
            </div>
          </div>
          <p className=" bg-slate-300 h-[1px] w-full rounded-full mb-6"></p>
          <div className=" gap-4">
            <ul className="list-disc list-inside text-xs text-gray-500 font-semibold tracking-widest grid grid-cols-3 h-[200px]">
              {location.map((l, i) => (
                <li
                  key={i}
                  className="hover:underline hover:text-blue-700 cursor-pointer"
                >
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="hidden md:block w-[380px] ">
        <div className="card h-[135px]">
          <p className="text-sm text-gray-500 mb-3">Connect with us</p>
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
                <img src={instagram} alt="instagram" className=" h-6" />
              </a>
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default OverViewSection;
