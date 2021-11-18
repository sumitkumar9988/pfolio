/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import ReactGA from "react-ga";
import Loader from "./../../../../utils/loader";
import { useDispatch, useSelector } from "react-redux";
import ToastContainer from "./../../../../utils/toast";
import {
  updateExperience,
  getExperienceByID,
  deleteExperience,
  uploadFile,
} from "./../../../../redux/action/dashboardAction";

const EditExperience = ({ history, match }) => {
  const dispatch = useDispatch();
  const id = match.params.id;

  const [position, setPosition] = useState("");
  const [organization, setOrganization] = useState("");
  const [website, setWebsite] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [image, setImage] = useState("");

  const { loading, error } = useSelector((state) => state.state);
  const { experience } = useSelector((state) => state.store);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  useEffect(() => {
    dispatch({ type: "RESET_EXPERIENCE" });
    dispatch(getExperienceByID(id));
  }, [id]);

  useEffect(() => {
    if (experience && experience.data) {
      setPosition(experience.data.jobTitle);
      setOrganization(experience.data.organization);
      setWebsite(experience.data.website);
      setStartDate(experience.data.startDate);
      setEndDate(experience.data.endDate);
      setImage(experience.data.logo);
    }
    if (!experience && !experience.data && !experience.data.jobTitle) {
      dispatch(getExperienceByID(id));
    }
  }, [experience, id]);

  const uploadImage = (e) => {
    e.preventDefault();
    dispatch(uploadFile(e.target.files[0], setImage));
  };

  const onSave = (e) => {
    e.preventDefault();
    const data = {
      jobTitle: position,
      organization: organization,
      startDate: startDate,
      website: website,
      endDate: endDate,
      logo: image,
    };
    dispatch(updateExperience(id, data, history, "/home/background", toast));
  };

  const deleteExp = (e) => {
    e.preventDefault();
    dispatch(deleteExperience(id, history, "/home/background", toast));
  };

  return (
    <div>
      {loading && <Loader />}
      <ToastContainer />
      <div className=" mx-auto flex justify-center w-full h-full ">
        <div className="mt-8 w-full sm:w-8/12 m-4 md:w-3/6">
          <div class="w-full ">
            <h2 class="text-2xl font-bold text-center">Edit Experience</h2>
          </div>
          <div>
            <div class=" mt-4 mb-4 ">
              <label for="name-with-label" class="text-gray-700">
                Job Position
              </label>
              <input
                type="text"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                class="py-4 pl-4  rounded text-sm focus:outline-none w-full  bg-gray-100 resize-none text-gray-800"
                name="position"
                placeholder="Software Developer"
              />
            </div>
            <div class=" mt-4 mb-4 ">
              <label for="name-with-label" class="text-gray-700">
                Organization
              </label>
              <input
                type="text"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                class="py-4 pl-4  rounded text-sm focus:outline-none w-full  bg-gray-100 resize-none text-gray-800"
                placeholder="Google"
              />
            </div>
            <div class=" mt-4 mb-4 ">
              <div className="mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="text-gray-700" for="time">
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    class="py-4 pl-4  rounded text-sm focus:outline-none w-full  bg-gray-100 resize-none text-gray-800"
                  />
                </div>
                <div>
                  <label class="text-gray-700" for="time">
                    End Date
                  </label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    class="py-4 pl-4  rounded text-sm focus:outline-none w-full  bg-gray-100 resize-none text-gray-800"
                  />
                </div>
              </div>
            </div>
            <div class=" mt-4 mb-4 ">
              <label for="name-with-label" class="text-gray-700">
                Website
              </label>
              <input
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                id="name-with-label"
                class="py-4 pl-4  rounded text-sm focus:outline-none w-full  bg-gray-100 resize-none text-gray-800"
                name="email"
                placeholder="Company website Link "
              />
            </div>
            <div class=" mt-4 mb-4 ">
              <div class="shadow-sm  border border-gray-300 rounded-2xl  bg-white w-full m-auto p-2">
                {image && (
                  <img
                    src={image}
                    alt="logo"
                    class="w-32 h-32 mb-4 mx-auto rounded-full object-cover object-right"
                  />
                )}
                <div class="bg-white m-3 p-4 rounded-lg">
                  <label
                    htmlFor="image"
                    className="flex cursor-pointer items-center justify-start mx-auto  w-full  border border-dashed border-red-400 rounded-lg p-3"
                  >
                    <div className="cursor-pointer text-red-400 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-cloud-upload"
                        width={48}
                        height={48}
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M7 18a4.6 4.4 0 0 1 0 -9h0a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1" />
                        <polyline points="9 15 12 12 15 15" />
                        <line x1={12} y1={12} x2={12} y2={21} />
                      </svg>
                      <input
                        type="file"
                        className="hidden"
                        id="image"
                        onChange={uploadImage}
                        accept="image/*"
                      />
                    </div>
                    <p className="text-base font-normal tracking-normal text-gray-800 dark:text-gray-100 text-left ml-4">
                      Drag and drop here or
                      <span className="cursor-pointer text-red-500 dark:text-red-600">
                        {" "}
                        browse
                      </span>
                    </p>
                  </label>
                </div>
              </div>
            </div>
            <div className="flex items-center flex-row  pt-4 justify-between lg:mx-20">
              <div
                onClick={deleteExp}
                class=" cursor-pointer inline-block py-3 px-4 leading-none text-black bg-white border-red-400 border-2 rounded shadow"
              >
                Delete Project
              </div>
              <p
                onClick={onSave}
                class=" cursor-pointer inline-block py-3 px-4  leading-none text-white bg-red-400 hover:bg-red-500 rounded shadow"
              >
                Save
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditExperience;
