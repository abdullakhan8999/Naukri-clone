import React, { useEffect, useState } from "react";
import LoginImg from "../../assets/login-welcome2.png";
import Loader from "../Loader";
import { loginPageConstants } from "../../Constants/LoginConstants";
import { useDispatch, useSelector } from "react-redux";

import { clearErrors, login } from "../../Actions/UserSignUp";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  //hooks and controls
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // date from state
  const { error, loading, isAuthenticated, user } = useSelector(
    (state) => state.user
  );

  //user data
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  //result message
  const [message, setMessage] = useState("");
  const [messageT, setMessageT] = useState("");

  // message
  useEffect(() => {
    setTimeout(() => {
      setMessage("");
    }, 5000);
  }, [message]);

  // HandleSLogin
  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
    setLoginEmail("");
    setLoginPassword("");
  };

  //set message
  useEffect(() => {
    if (error) {
      console.log(error);
      setMessage(error);
      setMessageT("text-red-500 font-bold");
      dispatch(clearErrors());
      navigate("/error");
    }
    if (isAuthenticated) {
      setMessageT("text-green-500 font-bold");
      setMessage("Login Successfully");
      if (user.role === "admin") {
        navigate("/admin");
      } else if (user.role === "engineer") {
        navigate("/engineer");
      } else if (user.role === "student") {
        navigate("/home");
      } else if ((user.role = "company")) {
        navigate("/company");
      }
    }
  }, [dispatch, error, user, isAuthenticated]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div
          className={`relative pt-[100px] lg:w-[1128px] w-full mx-auto flex items-start justify-around px-3`}
        >
          <div className="card hidden lg:w-[300px] lg:block p-[2rem]">
            <img src={LoginImg} alt="Login_Img" className="w-[80%] mx-auto" />
            <p className="font-bold text-lg my-2">New to Naukri?</p>
            <ul className="list list-decimal px-5 text-sm mb-2">
              {loginPageConstants &&
                loginPageConstants.map((ele, i) => (
                  <li key={i} className="mb-2">
                    {ele}
                  </li>
                ))}
            </ul>
            <button
              type="button"
              className="text-center mx-auto outline-1 outline outline-cyan-600 text-cyan-600 w-full h-8 hover:bg-cyan-600 hover:text-white hover:outline-white text-sm  duration-300 transition-all ease"
              onClick={() => handleClick()}
            >
              Register For Free
            </button>
          </div>
          <div className="card w-[500px]  mb-12">
            <form className=" w-full" onSubmit={loginSubmit}>
              <p className="text-xl md:text-2xl mb-5 pt-5">Login</p>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-90"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="name@mail.com"
                  required
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your password
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="*****************"
                  required
                  name="password"
                  aria-describedby="forgot-password-helper"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
                <p
                  id="forgot-password-helper"
                  className="mt-2 text-sm text-gray-500 flex items-end justify-end"
                >
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:underline "
                  >
                    Forgot Password
                  </a>
                  .
                </p>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>

              <p className={`text-center h-[20px] py-5 ${messageT}`}>
                {message}
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPage;
