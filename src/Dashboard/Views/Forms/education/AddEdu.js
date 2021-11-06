import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Loader from "./../../../../utils/loader";
import { useDispatch, useSelector } from "react-redux";
import ToastContainer from "./../../../../utils/toast";
import {
  addEducation,
  uploadFile,
} from "./../../../../redux/action/dashboardAction";

const AddEducation = ({history}) => {
  const dispatch = useDispatch();

  const [institute, setInstitute] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [image, setImage] = useState("");

  const { loading, error } = useSelector((state) => state.state);

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const uploadImage = (e) => {
    e.preventDefault();
    dispatch(uploadFile(e.target.files[0], setImage));
  };

  const onSave = (e) => {
    e.preventDefault();
    const data = {
      institute,
      degree,
      startDate,
      endDate,
      image,
    };
    dispatch(addEducation(data, history, "/home/background", toast));
  };

  return (
    <div>
          {loading && <Loader />}
      <ToastContainer />
      <div className=" mx-auto flex justify-center w-full h-full ">
        <div className="mt-8 w-full sm:w-8/12 m-4 md:w-3/6">
          <div class="w-full ">
            <h2 class="text-2xl font-bold text-center">Add Education</h2>
          </div>
          <div>
            <div class=" mt-4 mb-4 ">
              <label for="name-with-label" class="text-gray-700">
                Insititute Name
              </label>
              <input
                type="text"
                class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                value={institute}
                onChange={(e)=>setInstitute(e.target.value)}
                placeholder="IIT Delhi"
              />
            </div>
            <div class=" mt-4 mb-4 ">
              <label for="name-with-label" class="text-gray-700">
                Course 
              </label>
              <input
                type="text"
                id="name-with-label"
                value={degree}
                onChange={(e)=>setDegree(e.target.value)}
                class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                name="email"
                placeholder="B.tech (CSE)"
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
                   onChange={(e)=>setStartDate(e.target.value)}
                    class="appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent flex-1"
                  />
                </div>
                <div>
                  <label class="text-gray-700" for="time">
                  End Date{" "}
                  </label>
                  <input
                      type="date"
                      value={endDate}
                      onChange={(e)=>setEndDate(e.target.value)}
                    class="appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent flex-1"
                  />
                </div>
              </div>
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
            <div onClick={onSave} className="flex items-center justify-center">
              <p class="inline-block py-3 cursor-pointer px-6 leading-none text-white bg-red-400 hover:bg-red-500 rounded shadow">
                Save
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEducation;
