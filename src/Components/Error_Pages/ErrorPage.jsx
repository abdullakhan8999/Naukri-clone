import React from "react";
import { Link } from "react-router-dom";
import errorSVG from "../../assets/error_404.jpg";

const NotFound = () => {
  return (
    <div className="w-full  lg:w-[1128px] mx-auto text-center flex items-center h-[100vh] justify-center  flex-col md:flex-row gap-[100px]">
      <div className="">
        <img
          src={errorSVG}
          alt="errorSVG"
          className=" w-full md:w-[400px] mb-3 object-cover"
        />
      </div>
      <div className="flex  items-center flex-col justify-around">
        <p className=" text-3xl">Not Found</p>
        <Link
          to="/"
          className="text-lg text-blue-700 hover:text-blue-900 hover:underline"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
