import React from "react";

const bio = () => {
  return (
    <div className="">
      <div class="w-full overflow-hidden h-full fixed block top-0 left-0 bg-gray-100  bg-opacity-95 backdrop-filter backdrop-blur-sm z-50">
        <div className="absolute right-0 pt-8 pr-8">
          <div className="transform hover:scale-125 h-full w-full transition duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10"
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
        </div>
        <div className="absolute bottom-0 mx-auto pb-8 w-full  text-center">
          <p class=" text-lg font-semibold transform hover:scale-105 text-center mx-auto transition duration-300 text-blue-700 hover:underline">
            Skip
          </p>
        </div>

        <div className=" pt-16">
          <form>
            <div className="container mx-auto shadow bg-white dark:bg-gray-800 rounded">
              <div className="w-11/12 mx-auto">
                <div className="xl:w-9/12 mx-auto xl:mx-0">
                  <div className="bg-center bg-cover bg-no-repeat rounded relative mt-8 h-4">
                    <div className="w-20 h-20 rounded-full bg-cover bg-center bg-no-repeat absolute bottom-0 -mb-10 ml-12 shadow">
                      <img
                        src="https://cdn.tuk.dev/assets/webapp/forms/form_layouts/form2.jpg"
                        alt=""
                        className="w-full h-full object-cover overflow-hidden absolute z-0 rounded-full shadow"
                      />
                      <div className="bg-white dark:bg-gray-800 h-6 w-6 rounded-full flex items-center justify-center right-0 absolute cursor-pointer text-gray-600 dark:text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-edit"
                          width={16}
                          height={16}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                          <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                          <line x1={16} y1={5} x2={19} y2={8} />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="mt-16">
                    <label
                      htmlFor="about"
                      className="pb-2  text-sm font-bold text-gray-800 dark:text-gray-100"
                    >
                      About
                    </label>
                    <div className="w-1/2  bg-white border rounded border-gray-200 py-2.5 px-3">
                      <select className="text-sm text-gray-500 w-full focus:outline-none">
                        <option selected disabled value>
                          Category
                        </option>
                        <option>Designer</option>
                        <option>Developer</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col xl:w-3/5 lg:w-3/5 w-full">
                    <label
                      htmlFor="about"
                      className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                    >
                      About
                    </label>
                    <textarea
                      id="about"
                      name="about"
                      className="border border-gray-300 dark:border-gray-700 pl-3 py-2 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent resize-none text-gray-800 dark:text-gray-100"
                      placeholder="Let the world know who you are"
                      rows={5}
                      required
                      defaultValue={""}
                    />
                    <p className="w-full text-right text-xs text-gray-500 pt-1">
                      Character Limit: 200
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center pb-8 pt-8">
                  <button
                    className="bg-red-400 transition duration-150 ease-in-out hover:bg-red-500 rounded text-white px-8 py-2 text-sm "
                    type="submit"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default bio;