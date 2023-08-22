import React, { useEffect, useRef, useState, Fragment } from "react";
import Logo from "../../assets/naukri_Logo.png";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
// import { MdWork } from "react-icons/md";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  companyCategories,
  jobsCategories,
} from "../../Constants/NavbarElements";
import NavBottom from "./NavBottom";
import ScrollToTop from "../../Utils/ScrollToTop";
import { filterCompaniesCategories } from "../../Actions/CompaniesActions";
import { loadingRequest, loadingSuccess } from "../../Reducers/uiLoaderReducer";
import { setSearchQuery } from "../../Actions/searchAction";
import { userLogout } from "../../Actions/UserSignUp";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { uiLoader } = useSelector((state) => state.uiLoader);
  const { user, isAuthenticated } = useSelector((state) => state.user);

  //show input bar
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef(null);
  const handleShowInput = () => {
    setShowInput(!showInput);
  };

  //nav menus
  useEffect(() => {
    if (!isAuthenticated) {
      navigation("/");
    }
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowInput(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleCompanyNav = (category) => {
    dispatch(loadingRequest());
    setTimeout(() => {
      dispatch(filterCompaniesCategories(category));
      dispatch(loadingSuccess());
      navigation("/companies");
    }, 500);
  };

  const [searchText, setSearchText] = useState("");
  const handleSearch = (event) => {
    if (event.key === "Enter") {
      // Dispatch action to set search query in Redux store
      dispatch(setSearchQuery(searchText));

      // Navigate to search results page
      navigation("/search");
      setSearchText("");
    }
  };
  const handleLogout = () => {
    dispatch(userLogout());
    navigation("/");
    window.location.reload();
    window.location.reload();
  };
  return (
    <>
      <nav className="w-full z-10 py-5 flex items-center justify-around bg-white shadow shadow-gary  fixed top-0 left-0">
        <div className="relative lg:w-[1128px] w-full px-3 flex items-center justify-between flex-wrap">
          <div className="">
            <Link to="/home">
              <img src={Logo} alt="Logo" className="w-[150px]" />
            </Link>
          </div>
          <div className="" ref={inputRef}>
            <input
              className="hidden md:block w-full  lg:w-[300px] h-10 px-3 py-2 rounded-md text-sm text-gray-900 bg-gray-200 focus:outline-none focus:ring-1 focus:ring-cyan-900 focus:border-transparent"
              type="search"
              placeholder="Search jobs here"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={handleSearch}
            />
            <FaSearch
              className="block md:hidden text-xl text-slate-600 hover:text-black mx-2"
              as="button"
              onClick={handleShowInput}
            />
            <input
              className={` ${
                showInput ? " top-[60px]  absolute left-[5vw]" : "hidden"
              } w-[90%] md:hidden h-14 px-3 py-2 rounded-md text-sm text-gray-900 bg-gray-200 focus:outline-none focus:ring-1 focus:ring-cyan-900 focus:border-transparent`}
              type="search"
              placeholder="Search jobs here"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={handleSearch}
            />
          </div>
          <div className=" hidden text-md font-bold md:flex items-center justify-around flex-row">
            <ul className="relative flex items-center justify-around flex-row">
              <li className="group cursor-pointer  text-slate-600 hover:text-black mx-2">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-gray-500 ring-0 ring-inset hover:text-gray-900">
                      Jobs
                      <ChevronDownIcon
                        className="-mr-1 h-5 w-5"
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
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <p className="px-4 py-2 text-lg text-gray-900 cursor-default">
                        Explore Jobs
                      </p>
                      {jobsCategories &&
                        jobsCategories.map((job, i) => (
                          <div className="py-1" key={i}>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                  key={job.href}
                                  to={job.href}
                                  onClick={() => ScrollToTop()}
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
              <li className="group cursor-pointer text-slate-600 hover:text-black mx-2">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-gray-500 ring-0 ring-inset hover:text-gray-900">
                      Companies
                      <ChevronDownIcon
                        className="-mr-1 h-5 w-5"
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
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <p className="px-4 py-2 text-lg text-gray-900 cursor-default">
                        Explore categories
                      </p>
                      {companyCategories &&
                        companyCategories.map(
                          (category, i) =>
                            i === 0 && (
                              <div className="py-1" key={i}>
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "block px-4 py-2 text-sm w-full text-left"
                                      )}
                                      key={i}
                                      onClick={() =>
                                        handleCompanyNav(category, i)
                                      }
                                    >
                                      {category.label}
                                    </button>
                                  )}
                                </Menu.Item>
                              </div>
                            )
                        )}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </li>
              <li className="group cursor-pointer text-slate-600 hover:text-black mx-2">
                <Link
                  to="/profile"
                  title={user && user.name}
                  className="flex items-center justify-center flex-col text-xlg decoration-none"
                >
                  <FaUserCircle id="profile-icon" />
                </Link>
              </li>
              {isAuthenticated && (
                <li className="flex items-center mx-2 justify-center flex-col cursor-pointer text-2xl text-slate-600 hover:text-black ">
                  <button
                    onClick={() => handleLogout()}
                    className="flex p-0 m-0 items-center justify-center flex-col rotate-180 decoration-none"
                  >
                    <BiLogOut id="profile-icon" />
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <NavBottom />
    </>
  );
};

export default Header;
