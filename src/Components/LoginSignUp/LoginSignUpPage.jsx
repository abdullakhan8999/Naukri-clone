import React, { useState } from "react";
import Logo from "../../assets/naukri_Logo.png";
import { Link } from "react-router-dom";
import LoginPage from "./Login";
import SignUp from "./SignUp/SignUp";
import { useSelector } from "react-redux";
import Loader from "../Loader";

const Header = () => {
  const { loading } = useSelector((state) => state.user);

  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      <nav className="w-full z-10 py-5 flex items-center justify-around bg-white shadow shadow-gary  fixed top-0 left-0">
        {loading ? (
          <Loader />
        ) : (
          <div className="relative lg:w-[1128px] w-full px-3 flex items-center justify-between flex-wrap">
            <div className="">
              <Link to="/">
                <img src={Logo} alt="Logo" className="w-[100px] md:w-lg" />
              </Link>
            </div>
            <div className="text-sm md:text-lg">
              <p>
                {showLogin ? "Register here " : "Already Registered? "}
                <button
                  className={`font-bold ${
                    showLogin ? "text-green-500" : "text-blue-500"
                  }`}
                  onClick={() => setShowLogin(!showLogin)}
                  type="button"
                >
                  {showLogin ? "SignUp" : "Login"}
                </button>
                {showLogin ? "" : " here"}
              </p>
            </div>
            <a href="#" className=" fixed bottom-10">
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
          </div>
        )}
      </nav>
      {loading ? null : showLogin ? <LoginPage /> : <SignUp />}
    </>
  );
};

export default Header;
