import React from "react";
import Loader from "../../../utils/loader";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import ToastContainer from "../../../utils/toast";
import { useDispatch, useSelector } from "react-redux";
import {
  getprofile,
  updateProfile,
  uploadFile,
} from "./../../../redux/action/dashboardAction";

const BioCard = ({ history }) => {
  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.state);
  const { profile, file } = useSelector((state) => state.store);

  const [bio, setBio] = React.useState("");
  const [photo, setPhoto] = React.useState("");
  const [currentJob, setCurrentJob] = React.useState("");
  const [profession, setProfession] = React.useState("");

  React.useEffect(() => {
    error && toast.error(error);

    dispatch(getprofile());

    if (profile && profile.data) {
      setPhoto(profile.data.photo);
    }
  }, [dispatch]);

  React.useEffect(() => {
    if (profile && profile.data) {
      setPhoto(profile.data.photo);
    }
  }, [profile]);

  const onChangePicture = (e) => {
    dispatch(uploadFile(e.target.files[0], setPhoto));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      photo: photo,
      profession: profession,
      aboutYou: currentJob,
      bio: bio,
    };
    dispatch(
      updateProfile(
        data,
        history,
        "/home/Get-started/upload-resume",
        toast,
        null
      )
    );
  };

  return (
    <div className="">
      {loading && <Loader />}
      <ToastContainer />
      <div class="w-full overflow-hidden h-full fixed block top-0 left-0 bg-gray-100  bg-opacity-0 backdrop-filter backdrop-blur-sm z-30">
        <div className="absolute right-0 pt-8 pr-16 ">
          <Link to="/home/Get-started/upload-resume">
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

        <div className="">
          <div className=" pt-16 ">
            <form onSubmit={onSubmitHandler}>
              <div className="container mx-auto  w-full rounded">
                <div className="  w-9/12 lg:w-6/12 mx-auto">
                  <div className="">
                    <div className="mx-auto items-center flex-col">
                      <div className=" bg-cover mx-auto flex bg-no-repeat pl-20 md:pl-32 lg:pl-56 rounded relative mt-8 h-4">
                        <div className="w-20 h-20 rounded-full bg-cover bg-center bg-no-repeat  absolute bottom-0 -mb-10  shadow">
                          <img
                            src={photo}
                            alt=""
                            className="w-full h-full object-cover overflow-hidden absolute z-0 rounded-full shadow"
                          />
                          <label
                            htmlFor="image"
                            className="bg-white   h-6 w-6 rounded-full flex items-center justify-center right-0 absolute cursor-pointer text-gray-600 "
                          >
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
                            <input
                              type="file"
                              className="hidden"
                              id="image"
                              onChange={onChangePicture}
                              accept="image/*"
                            />
                          </label>
                        </div>
                      </div>
                      <div className="mt-16">
                        <label
                          htmlFor="Profession"
                          className="pb-2  text-sm ite font-bold text-gray-800 "
                        >
                          Profession
                        </label>
                        <div className="w-full  bg-white  rounded bg-gray-100 py-3 px-3">
                          <select
                            className="text-sm text-gray-900 bg-gray-100 w-full  focus:outline-none"
                            defaultValue="Developer"
                            onChange={(e) => setProfession(e.target.value)}
                            value={profession}
                          >
                            <option
                              value="Designer"
                              className="bg-gray-100 py-2 px-3 "
                            >
                              Designer
                            </option>
                            <option
                              value="Developer"
                              className="bg-gray-100 py-2 px-3"
                            >
                              Developer
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="mt-8 flex flex-col   w-full">
                        <label
                          htmlFor="currentJob"
                          className="pb-2 text-sm font-bold text-gray-800 "
                        >
                          Current Job
                        </label>
                        <input
                          id="about"
                          name="about"
                          maxlength="60"
                          value={currentJob}
                          onChange={(e) => setCurrentJob(e.target.value)}
                          className="  py-4 pl-4  rounded text-sm focus:outline-none  bg-gray-100 resize-none text-gray-800 "
                          placeholder="What are you Woeking on?"
                        />
                        <p className="w-full text-right text-xs text-gray-500 pt-1">
                          Character Limit: 60
                        </p>
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
                          className="  pl-3 py-2  rounded text-sm focus:outline-none  bg-gray-100 resize-none text-gray-800 "
                          placeholder="Let the world know who you are"
                          rows={5}
                          value={bio}
                          onChange={(e) => setBio(e.target.value)}
                          maxlength="500"
                        />
                        <p className="w-full text-right text-xs text-gray-500 pt-1">
                          Character Limit: 500
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
    </div>
  );
};

export default BioCard;
