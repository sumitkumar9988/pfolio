/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const AddProject = () => {
  const [image, setimage] = useState();

  // DemoUrl
  // updated_at
  // included
  return (
    <div>
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
                placeholder="Project Name"
              />
            </div>
            <div class=" mt-4 mb-4 ">
              <label for="name-with-label" class="text-gray-700">
                Link of Project
              </label>
              <input
                type="text"
                id="name-with-label"
                class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                name="DemoUrl"
                placeholder="URL"
              />
            </div>
            <div class=" mt-4 mb-4 ">
              <label for="name-with-label" class="text-gray-700">
                Source of Project
              </label>
              <input
                type="text"
                id="name-with-label"
                class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                name="DemoUrl"
                placeholder="Link of github or behance"
              />
            </div>
            <div class=" mt-4 mb-4 ">
              <div className="mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="text-gray-700" for="time">
                    Include in Portfolio List
                  </label>
                  <select
                    type="text"
                    id="name-with-label"
                    class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                    name="DemoUrl"
                  >
                    <option className="p-1 font-semibold font-rubik text-base">
                      Yes
                    </option>
                    <option className="p-1 font-semibold font-rubik text-base">
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
                  <div className="flex items-center justify-start mx-auto  w-full  border border-dashed border-red-400 rounded-lg p-3">
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
                    </div>
                    <p className="text-base font-normal tracking-normal text-gray-800 dark:text-gray-100 text-left ml-4">
                      Drag and drop here or
                      <span className="cursor-pointer text-red-500 dark:text-red-600">
                        {" "}
                        browse
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center flex-row  pt-4 justify-between lg:mx-20">
              <div class="inline-block py-3 px-4 leading-none text-black bg-white border-red-400 border-2 rounded shadow">
                Delete Project
              </div>
              <p class="inline-block py-3 px-4  leading-none text-white bg-red-400 hover:bg-red-500 rounded shadow">
                Add Project
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProject;
