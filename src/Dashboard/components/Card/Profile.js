import React from "react";

const Profile = () => {
  return (
    <div className="">
      <div class="w-full overflow-hidden h-full fixed block top-0 left-0 bg-gray-100  bg-opacity-95 backdrop-filter backdrop-blur-sm z-50">
        <div className=" pt-16">
          <form>
            <div className="container mx-auto shadow bg-white rounded">
              <div className="  w-9/12 lg:w-6/12 mx-auto">
                <div className="">
                  <div className="mx-auto items-center flex-col">
                    <div className=" bg-cover mx-auto flex bg-no-repeat pl-20 md:pl-32 lg:pl-56 rounded relative mt-8 h-4">
                      <div className="w-20 h-20 rounded-full bg-cover bg-center bg-no-repeat  absolute bottom-0 -mb-10  shadow">
                        <img
                          src="https://cdn.tuk.dev/assets/webapp/forms/form_layouts/form2.jpg"
                          alt=""
                          className="w-full h-full object-cover overflow-hidden absolute z-0 rounded-full shadow"
                        />
                        <div className="bg-white  h-6 w-6 rounded-full flex items-center justify-center right-0 absolute cursor-pointer text-gray-600 ">
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
                        className="pb-2  text-sm ite font-bold text-gray-800 "
                      >
                        About
                      </label>
                      <div className="w-full  bg-white border rounded border-gray-200 py-2.5 px-3">
                        <select className="text-sm text-gray-500 w-full focus:outline-none">
                          <option selected disabled value>
                            Category
                          </option>
                          <option>Designer</option>
                          <option>Developer</option>
                        </select>
                      </div>
                    </div>
                    <div className="mt-8 flex flex-col   w-full">
                      <label
                        htmlFor="about"
                        className="pb-2 text-sm font-bold text-gray-800 "
                      >
                        About
                      </label>
                      <textarea
                        id="about"
                        name="about"
                        className="border border-gray-300  pl-3 py-2 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent resize-none text-gray-800 "
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
