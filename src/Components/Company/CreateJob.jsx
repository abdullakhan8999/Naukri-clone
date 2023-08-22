import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors } from "../../Actions/UserSignUp";
import {
  departmentsConstant,
  requirementsConstants,
} from "../../Constants/GeneralConstants";
import { AiFillCloseCircle } from "react-icons/ai";
import { JOB_STATUSES } from "../../Constants/JobConstants";
import { LoadJobs, createJob, searchJobs } from "../../Actions/JobsActions";
import { useNavigate } from "react-router-dom";

const CreateJob = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  //set data from state

  const [selectedRequirement, setSelectedRequirement] = useState("");
  const [selectedRequirements, setSelectedRequirements] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedHiring_status, setSelectedHiring_status] = useState("");

  //Job data
  const [job, setJob] = useState({
    title: "",
    location: "",
    description: "",
    department: "",
    salary: "",
    experience: "",
    vacancies: "",
    hiring_status: "",
  });

  const { title, salary, description, location, experience, vacancies } = job;

  //On change values
  const createJobDataChanges = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  // register HandleSignUpSubmit
  const createJobSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("title", title);
    myForm.set("location", location);
    myForm.set("salary", salary);
    myForm.set("description", description);
    myForm.set("experience", experience);
    myForm.set("vacancies", vacancies);

    // Set job Categories directly from selectedCategories
    selectedRequirements.forEach((requirement) => {
      myForm.append("requirement[]", requirement);
    });

    // Set job department directly from selected department
    myForm.append("department", selectedDepartment);

    // Set job hiring_status directly from selected hiring_status
    myForm.append("hiring_status", selectedHiring_status);

    dispatch(createJob(myForm));
    dispatch(LoadJobs());

    const newJobId = "newJobCreate"; // Replace with the actual job ID
    navigation(`/job/${newJobId}`);
  };

  const handleRequirementChange = (event) => {
    if (event.target.value === "") return;
    setSelectedRequirement(event.target.value);
    setSelectedRequirements([...selectedRequirements, event.target.value]);
  };
  const handleRemoveRequirement = (e, requirement) => {
    e.preventDefault();
    const newSelectedRequirements = selectedRequirements.filter(
      (c) => c !== requirement
    );
    setSelectedRequirements(newSelectedRequirements);
  };
  const handleDepartmentChange = (event) => {
    if (event.target.value === "") return;
    setSelectedDepartment(event.target.value);
  };
  const handleHiring_statusChange = (event) => {
    if (event.target.value === "") return;
    setSelectedHiring_status(event.target.value);
  };

  return (
    <div className="flex flex-col w-[90%] mx-auto">
      <p className="text-center uppercase tracking-wider text-2xl pt-5 font-bold pb-[2rem]">
        Create Job
      </p>
      <form className="w-full  mx-auto" onSubmit={(e) => createJobSubmit(e)}>
        <div className="flex flex-wrap -mx-4 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Job Title
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="title"
              name="title"
              type="text"
              placeholder="What is the job title?"
              required
              value={title}
              onChange={createJobDataChanges}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
              htmlFor="location"
            >
              Location
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="location"
              type="text"
              name="location"
              placeholder="What is the Job location?"
              required
              value={location}
              onChange={createJobDataChanges}
            />
          </div>
          <div className="w-full px-3 mb-6 md:mb-0 md:mt-6">
            <label
              htmlFor="description"
              className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
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
              onChange={createJobDataChanges}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 md:mt-6">
            <label
              className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
              htmlFor="requirement"
            >
              Requirement
            </label>
            <select
              id="requirement"
              name="requirement"
              required
              className="cursor-pointer appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={selectedRequirement}
              onChange={handleRequirementChange}
            >
              <option className="cursor-pointer" value="">
                Select a Requirement
              </option>
              {requirementsConstants.map((requirement, i) => (
                <option key={i} value={requirement}>
                  {requirement}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 md:mt-6">
            <label
              className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
              htmlFor="selectedCategories"
            >
              Selected Requirement
            </label>
            <div className="flex flex-wrap">
              {selectedRequirements.length > 0 ? (
                selectedRequirements.map((select, i) => (
                  <button
                    key={i}
                    onClick={(e) => handleRemoveRequirement(e, select)}
                    className="bg-gray-200 cursor-pointer relative text-gray-700 border border-gray-200 rounded me-2 mb-2 py-3 px-4 leading-tight hover:outline-none hover:bg-white hover:border-gray-500 group"
                  >
                    {select}
                    <AiFillCloseCircle
                      className="text-red-700 hidden group-hover:block absolute -top-2 -right-2"
                      size={20}
                    />
                  </button>
                ))
              ) : (
                <p className="bg-gray-200 text-gray-700 border border-gray-200 rounded me-2 mb-2 py-3 px-4 leading-tight">
                  No Requirement Selected
                </p>
              )}
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 md:mt-6">
            <label
              className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
              htmlFor="department"
            >
              Job Departments
            </label>
            <select
              id="department"
              name="department"
              required
              className="cursor-pointer appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={selectedDepartment}
              onChange={handleDepartmentChange}
            >
              <option className="cursor-pointer" value="">
                Select a department
              </option>
              {departmentsConstant.map((department, i) => (
                <option key={i} value={department}>
                  {department}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 md:mt-6">
            <label
              className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
              htmlFor="salary"
            >
              Package (LPA)
            </label>
            <input
              type="text"
              id="salary"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="What is the Package? (LPA) "
              required
              name="salary"
              value={salary}
              onChange={createJobDataChanges}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 md:mt-6">
            <label
              className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
              htmlFor="experience"
            >
              experience
            </label>
            <input
              type="text"
              id="experience"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="How much experience is needed?"
              required
              name="experience"
              value={experience}
              onChange={createJobDataChanges}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 md:mt-6">
            <label
              className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
              htmlFor="vacancies"
            >
              vacancies
            </label>
            <input
              type="number"
              id="vacancies"
              className="input-number appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="How much vacancies is there?"
              required
              name="vacancies"
              value={vacancies}
              onChange={createJobDataChanges}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 md:mt-6">
            <label
              className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
              htmlFor="hiring_status"
            >
              Hiring status
            </label>
            <select
              id="hiring_status"
              name="hiring_status"
              required
              className="cursor-pointer appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={selectedHiring_status}
              onChange={handleHiring_statusChange}
            >
              <option className="cursor-pointer" value="">
                Select a status
              </option>
              {JOB_STATUSES.map((status, i) => (
                <option key={i} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-wrap mb-6 md:mb-0 md:mt-6">
            <div className="w-full px-3">
              <label className="block  tracking-wide text-sm font-semibold mb-3 text-gray-400">
                By clicking Job is Created, you agree to the{" "}
                <span className="font-bold text-sky-600">
                  Terms and Conditions
                </span>{" "}
                & <span className="font-bold text-sky-600">Privacy Policy</span>{" "}
                of Naukri.com
              </label>
              <button
                type="submit"
                id="grip-register-btn"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Cerate Job
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateJob;
