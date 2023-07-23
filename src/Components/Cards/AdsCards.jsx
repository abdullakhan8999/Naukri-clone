import React from "react";
import { Link } from "react-router-dom";
import Photo1 from "../../assets/photo-right-img.jpeg";
import Photo2 from "../../assets/photo-home-bottom-1.jpeg";
import Photo3 from "../../assets/photo-home-bottom-2.jpg";
import "./Card.css";

const AdsCard = () => {
  let bottomElements = [
    {
      link: "https://www.naukri.com/blog/how-to-prepare-for-a-walk-in-interview/?utm_campaign=dashboard_widget&utm_source=naukri&utm_medium=desktop",
      title: "How to Prepare for a Walk-In-Interview?",
      data: "1d ago",
    },
    {
      link: "https://www.naukri.com/blog/why-do-you-want-this-job-sample-answers-to-this-hr-interview-question/?utm_campaign=dashboard_widget&utm_source=naukri&utm_medium=desktop",
      title: "How To Answer `Why Do You Want This Job`",
      data: "2d ago",
    },
    {
      link: "https://www.naukri.com/blog/behavioral-interview-questions-and-answers/?utm_campaign=dashboard_widget&utm_source=naukri&utm_medium=desktop",
      title: "Behavioral Interview Questions and Answers",
      data: "3d ago",
    },
  ];
  return (
    <div className=" mx-auto mediaScroller snaps-inline py-8">
      <div className="mb-3 relative overflow-hidden shadow-lg rounded-xl w-full">
        <img
          className="object-cover aspect-video aspect-video"
          src={Photo1}
          alt="Photo1"
        />
        <div className="p-2">
          <p className="text-sm font-bold">{bottomElements[0].title}</p>
          <p className="text-xs text-gray-500 mb-3">{bottomElements[0].data}</p>
          <a
            href={bottomElements[0].link}
            className=" absolute bottom-0 translate-y-[-50%]  text-sm text-blue-500 hover:text-blue-700"
          >
            Know more
          </a>
        </div>
      </div>
      <div className="mb-3 overflow-hidden shadow-lg rounded-xl w-full">
        <img className="object-cover aspect-video" src={Photo2} alt="Photo3" />
        <div className="p-2">
          <p className="text-sm font-bold">{bottomElements[1].title}</p>
          <p className="text-xs text-gray-500 mb-3">{bottomElements[1].data}</p>
          <a
            href={bottomElements[1].link}
            className="text-sm text-blue-500 hover:text-blue-700"
          >
            Know more
          </a>
        </div>
      </div>
      <div className="mb-3 overflow-hidden shadow-lg rounded-xl w-full">
        <img className="object-cover aspect-video" src={Photo3} alt="Photo3" />
        <div className="p-2">
          <p className="text-sm font-bold">{bottomElements[2].title}</p>
          <p className="text-xs text-gray-500 mb-3">{bottomElements[2].data}</p>
          <a
            href={bottomElements[2].link}
            className="text-sm text-blue-500 hover:text-blue-700"
          >
            Know more
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdsCard;
