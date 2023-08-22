import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, registerCompany } from "../../Actions/UserSignUp";
import {
  categoriesConstant,
  departmentsConstant,
} from "../../Constants/GeneralConstants";
import { AiFillCloseCircle } from "react-icons/ai";
import { updateCompanyDetails } from "../../Actions/CompaniesActions";

const UpdateCompanyDetailsSection = ({ company, setShowSection }) => {
  const dispatch = useDispatch();

  //company data
  const [updateCompany, setUpdateCompany] = useState({
    companyName: "",
    email: "",
    location: "",
    description: "",
  });

  useEffect(() => {
    if (company) {
      setUpdateCompany({
        companyName: company.name || "",
        email: company.email || "",
        location: company.location || "",
        description: company.description || "",
      });
    }
  }, [company]);

  const { companyName, email, description, location } = updateCompany;

  //On change values
  const UpdateCompanyDataChange = (e) => {
    setUpdateCompany({ ...updateCompany, [e.target.name]: e.target.value });
  };

  // update HandleSignUpSubmit
  const updateCompanySubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();
    if (
      companyName === company.name &&
      email === company.email &&
      location === company.location &&
      description === company.description
    ) {
      setShowSection && setShowSection("Overview");
      return;
    }
    companyName != company.name && myForm.set("companyName", companyName);
    email != company.email && myForm.set("email", email);
    location != company.location && myForm.set("location", location);
    description != company.description &&
      myForm.set("description", description);
    dispatch(updateCompanyDetails(myForm));
  };

  return (
    <div className="flex flex-col">
      <p className=" text-2xl pt-5 font-bold pb-[2rem]">
        Update Company Details
      </p>
      <form
        className="w-full  mx-auto"
        onSubmit={(e) => updateCompanySubmit(e)}
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="companyName"
            >
              Company Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="companyName"
              name="companyName"
              type="text"
              placeholder="What is your Company name?"
              required
              value={companyName}
              onChange={UpdateCompanyDataChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="location"
            >
              Location
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="location"
              type="text"
              name="location"
              placeholder="What is your location?"
              required
              value={location}
              onChange={UpdateCompanyDataChange}
            />
          </div>
          <div className="w-full px-3  mb-6  md:mt-6">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Description
            </label>
            <textarea
              id="description"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-700 bg-gray-200 rounded-lg border border-gray-300 focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="Write company description here..."
              required
              name="description"
              value={description}
              onChange={UpdateCompanyDataChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 md:mt-6">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="email"
            >
              Email ID
            </label>
            <input
              type="email"
              id="email"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="Tell us your email ID"
              required
              name="email"
              value={email}
              onChange={UpdateCompanyDataChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block  tracking-wide text-sm font-semibold mb-3 text-gray-400">
              Update Company Details
            </label>
            <button
              type="submit"
              id="grip-register-btn"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateCompanyDetailsSection;
