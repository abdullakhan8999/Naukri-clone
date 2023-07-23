import React, { useState } from "react";
import AndroidImg from "../../assets/android-app.png";
import IosImg from "../../assets/ios-app.png";
import RightSideImg from "../../assets/photo-right-img.jpeg";
import { Link } from "react-router-dom";

const HomeRight = () => {
  let homePoll = "NAUKRI POLL";
  let PollQ = "On what basis do you chose a prospective company?";
  let PollA = [
    "Based on progressive HR policies",
    "Company recommended for good culture",
    "Based on awards and recognitions",
    "Based on online reviews by employees",
  ];

  //answers state
  const [answers, setAnswers] = useState("");

  return (
    <>
      <div className="card mb-3">
        <p className=" text-indigo-500">{homePoll}</p>
        <p className="text-xs font-semibold mb-3">{PollQ}</p>
        {PollA.map((item, i) => (
          <div
            key={i}
            className={`${
              answers === i ? "bg-zinc-400 text-white" : ""
            } text-[0.65rem] mb-2 rounded-2xl hover:bg-zinc-400 ring-1 ring-black  p-1 px-2`}
            onClick={(e) => setAnswers(i)}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="card mb-3">
        <p className="text-lg font-bold">Apply on the go</p>
        <p className="text-xs font-semibold mb-3">
          Get real-time job updates on our App
        </p>
        <Link>
          <img className="mb-3" src={AndroidImg} alt="AndroidImg" />
        </Link>
        <Link>
          <img className="mb-3" src={IosImg} alt="IosImg" />
        </Link>
      </div>
      <div className="mb-3 overflow-hidden shadow-lg rounded-xl w-full">
        <img className="object-cover" src={RightSideImg} alt="IosImg" />
        <div className="p-2">
          <p className="text-sm font-bold">
            Compassionate Leave- Meaning, Samples, and How to Apply
          </p>
          <p className="text-xs text-gray-500 mb-3">
            Drafting a Compassionate leave is never easy! Get some help with
            this article. Explore...
          </p>
          <Link to="/" className="text-sm text-blue-500 hover:text-blue-700">
            Know more
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeRight;
