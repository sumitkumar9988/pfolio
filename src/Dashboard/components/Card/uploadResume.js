import React from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import ToastContainer from "../../../utils/toast";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile, uploadFile } from "./../../../redux/action/dashboardAction";
import linkedin_profile_image from './../../../Assets/linkedin_profile.png'
import Loader from "./../../../utils/loader";

const UploadResume = ({ history }) => {

  const dispatch = useDispatch();
  const [resume, setResume] = React.useState('')
  const { error, loading } = useSelector((state) => state.state)


  React.useEffect(() => {
    error && toast.error(error);
  }, [error])


  const onsubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      resume: resume
    }
    console.log(data)
    dispatch(updateProfile(data, history, "/home/Get-started/on-board"))
  }
  const onFileUpload = (e) => {
    console.log(e.target.files[0])
    dispatch(uploadFile(e.target.files[0], setResume))
  };

  return (
    <div>
      <ToastContainer />
      {loading && <Loader />}
      <div class="w-full overflow-hidden h-full fixed block top-0 left-0  ">
        <div className="absolute right-0 pt-8 pr-8">
          <Link to="/home/Get-started/on-board">
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
          </Link>
        </div>
        <div className="absolute bottom-0 mx-auto pb-8 w-full  text-center">
          <Link to="/home/Get-started/on-board">
            <p class=" text-lg font-semibold transform hover:scale-105 text-center mx-auto transition duration-300 text-blue-700 hover:underline">
              Skip
            </p>
          </Link>
        </div>



        <div class="flex h-screen justify-center items-center ">
          <div className="w-full bg-white  rounded ">
            <div className="w-full flex items-center justify-center ">
              <h1 className="text-2xl font-bold pt-4 text-red-400">
                Import Your Linkedin Profile
              </h1>
            </div>
            {/* <div className="flex items-center justify-center">
              <p className="  pt-6 w-72 text-sm font-medium  text-center text-gray-800">
                
              </p>
            </div> */}
            <div className="pt-10 px-16 flex items-center justify-center">
              <img
                src={linkedin_profile_image}
                className="h-44"
                alt="set one comment"
              />
            </div>
            <label className="flex items-center justify-start mx-auto cursor-pointer w-96 mt-8 mb-8 border border-dashed border-indigo-700 rounded-lg p-3">
              <div htmlfor="resume" className="cursor-pointer text-indigo-700 dark:text-indigo-600">
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
                <input type="file" className="hidden" id="resume" onChange={onFileUpload} accept="application/pdf" />
              </div>
              <p className="text-base font-normal tracking-normal text-gray-800 dark:text-gray-100 text-left ml-4">
                Drag and drop here or
                <span className="cursor-pointer text-indigo-700 dark:text-indigo-600">
                  {" "}browse
                </span>
              </p>

            </label>

            {resume ? (<div className="flex items-center justify-center"><p className="   w-72 text-xs font-medium  text-center text-gray-800">
              {resume.replace('https://firstletter-multimedia.s3.amazonaws.com/', ' ')}
            </p>
            </div>) : null}

            <div className="flex items-center justify-center mt-7 mb-6">
              <button onClick={onsubmitHandler} className=" focus:outline-none focus:ring-2 focus:ring-offset-2  hover:bg-red-500 text-sm font-medium leading-none text-center text-white bg-red-400 rounded px-5 py-3">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadResume;
