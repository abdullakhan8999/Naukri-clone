import React, { useEffect } from "react";
import Loader from "../Loader";
import HomeLeft from "./HomeLeft";
import HomeMid from "./HomeMid";
import HomeRight from "./HomeRight";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const navigate = useNavigate();

  // date from state
  const { error, loading, isAuthenticated, user } = useSelector(
    (state) => state.user
  );
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <div className="pt-[100px] w-full ">
            <div className="w-full  lg:w-[1128px] mx-auto px-3 flex items-start justify-between ">
              <div className="card w-[200px] hidden md:block flex items-start justify-center flex-col p-3">
                <HomeLeft />
              </div>
              <div className=" md:w-[600px] w-full">
                <HomeMid />
              </div>
              <div className=" w-[200px] hidden  md:block">
                <HomeRight />
              </div>
            </div>
          </div>
          <a
            href="#"
            className=" fixed bottom-0 right-0 translate-x-[-100%] translate-y-[-100%] z-30 "
          >
            <svg
              viewBox="0 0 36 36"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className="w-[50px] h-[50px] rounded-full iconify iconify--twemoji"
              preserveAspectRatio="xMidYMid meet"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#37a9eb"
                  d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28z"
                ></path>
                <path fill="#FFF" d="M22 29v-9h7L18 7L7 20h7v9z"></path>
              </g>
            </svg>
          </a>
        </>
      )}
    </>
  );
};

export default Home;
