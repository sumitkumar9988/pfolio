/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Loader from "./../../../../utils/loader";
import { useDispatch, useSelector } from "react-redux";
import ToastContainer from "./../../../../utils/toast";
import {
  updateproject,
  getProjectByID,
  deleteProject,
  uploadFile,
} from "./../../../../redux/action/dashboardAction";

const EditProject = ({ history, match }) => {
  const dispatch = useDispatch();
  const id = match.params.id;

  const { loading, error } = useSelector((state) => state.state);
  const { project } = useSelector((state) => state.store);

  const [image, setImage] = useState("");
  const [included, isIncluded] = useState(false);
  const [name, setName] = useState("");
  const [demo, setDemoURL] = useState("");
  const [updated_at, setUpdatedAt] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  useEffect(() => {
    dispatch({ type: "RESET_PROJECT" });
    dispatch(getProjectByID(id));
  }, [id]);

  useEffect(() => {
    if (project && project.data) {
      isIncluded(project.data.included);
      setImage(project.data.logo);
      setName(project.data.name);
      setDemoURL(project.data.DemoUrl);
      setUpdatedAt(project.data.updated_at);
      setDescription(project.data.description);
    }
    if (!project && !project.data && !project.data.jobTitle) {
      dispatch(getProjectByID(id));
    }
  }, [project, id]);

  const uploadImage = (e) => {
    e.preventDefault();
    dispatch(uploadFile(e.target.files[0], setImage));
  };

  const onSave = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      logo: image,
      DemoUrl: demo,
      included: included,
      updated_at: updated_at,
      description: description,
    };
    dispatch(updateproject(id, data, history, "/home/project"));
  };

  const onDeleteProject = (e) => {
    e.preventDefault();
    dispatch(deleteProject(id, history, "/home/project"));
  };

  return (
    <div>
      {loading && <Loader />}
      <ToastContainer />
      <div className=" mx-auto flex justify-center w-full h-full ">
        <div className="mt-8 w-full sm:w-8/12 m-4 md:w-3/6">
          <div class="w-full ">
            <h2 class="text-2xl font-bold text-center">Change Project</h2>
          </div>
          <div>
            <div class=" mt-4 mb-4 ">
              <label for="name-with-label" class="text-gray-700">
                Project Name
              </label>
              <input
                type="text"
                id="name-with-label"
                class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                name="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Project Name"
              />
            </div>
            <div class=" mt-4 mb-4 ">
              <label for="name-with-label" class="text-gray-700">
                Link of Project
              </label>
              <input
                type="text"
                value={demo}
                onChange={(e) => setDemoURL(e.target.value)}
                id="name-with-label"
                class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                name="DemoUrl"
                placeholder="URL"
              />
            </div>
            <div class=" mt-4 mb-4 ">
              <div className="mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="text-gray-700" for="time">
                    Include in Website
                  </label>
                  <select
                    type="text"
                    defaultValue={included}
                    value={included}
                    onChange={(e)=>isIncluded(e.target.value)}
                    id="name-with-label"
                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                    name="DemoUrl"
                  >
                    <option value={true} className="p-1 w-full font-semibold font-rubik text-base">
                      Yes
                    </option>
                    <option value={false} className="p-1 w-full font-semibold font-rubik text-base">
                      No
                    </option>
                  </select>
                </div>
                <div>
                  <label class="text-gray-700" for="time">
                    Time{" "}
                  </label>
                  <input
                    type="date"
                    value={updated_at}
                    onChange={(e)=>setUpdatedAt(e.target.value)}
                    class="appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent flex-1"
                  />
                </div>
              </div>
            </div>
            <div class=" mt-4 mb-4 ">
              <label for="name-with-label" class="text-gray-700">
                Description
              </label>
              <textarea
                class="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                id="description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="About Project"
                rows="5"
                cols="40"
              ></textarea>
            </div>
            <div class=" mt-4 mb-4 ">
              <div class="shadow-sm  border border-gray-300 rounded-2xl  bg-white w-full m-auto p-2">
                {image && (
                  <div>
                    <div className="container grid sm:grid-cols-1 md:grid-cols-2  ">
                      <div className="relative ">
                        <div className="absolute right-0 mr-2 mt-1 transform hover:scale-110">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                        <img
                          src={image}
                          alt="logo"
                          class="w-full h-32 mb-4 mx-auto object-cover object-right "
                        />
                      </div>
                    </div>
                  </div>
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
                onClick={onDeleteProject}
                class="cursor-pointer cursor-pointer inline-block py-3 px-4 leading-none text-black bg-white border-red-400 border-2 rounded shadow"
              >
                Delete
              </div>
              <div onClick={onSave} class="inline-block cursor-pointer py-3 px-4  leading-none text-white bg-red-400 hover:bg-red-500 rounded shadow">
                Update
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProject;
