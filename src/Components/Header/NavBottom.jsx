import { useDispatch } from "react-redux";
import React, { Fragment } from "react";
import {
  companyCategories,
  jobsCategories,
} from "../../Constants/NavbarElements";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { FaUserCircle } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { loadingRequest, loadingSuccess } from "../../Reducers/uiLoaderReducer";
import { filterCompaniesCategories } from "../../Actions/CompaniesActions";
import { userLogout } from "../../Actions/UserSignUp";

const NavBottom = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const handleCompanyNav = (category) => {
    dispatch(loadingRequest());
    setTimeout(() => {
      dispatch(filterCompaniesCategories(category));
      dispatch(loadingSuccess());
      navigation("/companies");
    }, 500);
  };

  const handleLogout = () => {
    dispatch(userLogout());
    navigation("/");
  };
  return (
    <div className="fixed bottom-0 py-2 bg-white w-full md:hidden shadow shadow-gary z-10 text-md font-bold flex items-center justify-around flex-row">
      <ul className="relative flex items-center gap-[2px] flex-row mx-auto">
        <li className="group cursor-pointer text-sm text-slate-600 hover:text-black ">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-bold text-gray-500 ring-0 ring-inset hover:text-gray-900">
                Jobs
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5  rotate-180"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute left-0 bottom-[100%] z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <p className="px-4 py-2 text-lg text-gray-900">Explore Jobs</p>
                {jobsCategories &&
                  jobsCategories.map((job, i) => (
                    <div className="py-1" key={i}>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            className={
                              (active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm")
                            }
                            key={job.href}
                            to={job.href}
                          >
                            {job.label}
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                  ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </li>
        <li className="group cursor-pointer text-sm text-slate-600 hover:text-black ">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-gray-500 ring-0 ring-inset hover:text-gray-900">
                Companies
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5  rotate-180"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute left-[-25%] bottom-[100%] z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <p className="px-4 py-2 text-lg text-gray-900">
                  Explore categories
                </p>
                {companyCategories &&
                  companyCategories.map((category, i) => (
                    <div className="py-1" key={i}>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            className={
                              (active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm")
                            }
                            key={i}
                            onClick={() => handleCompanyNav(category, i)}
                          >
                            {category.label}
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                  ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </li>
        <li className="flex items-center  justify-center mr-2 flex-col cursor-pointer text-2xl text-slate-600 hover:text-black ">
          <Link
            to="/profile"
            className="flex items-center justify-center flex-col decoration-none"
          >
            <FaUserCircle id="profile-icon" />
          </Link>
        </li>
        <li className="flex items-center  justify-center flex-col cursor-pointer text-2xl text-slate-600 hover:text-black ">
          <button
            onClick={handleLogout}
            className="flex p-0 m-0 items-center justify-center flex-col rotate-180 decoration-none"
          >
            <BiLogOut id="profile-icon" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NavBottom;
