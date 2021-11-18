import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getprofile ,uploadFile,updateProfile} from "./../../../../redux/action/dashboardAction";
import Loader from "./../../../../utils/loader";
import ToastContainer from "./../../../../utils/toast";
import { toast } from "react-toastify";
import ReactGA from "react-ga";

const EditProfile = ({history}) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.state);
  const { profile } = useSelector((state) => state.store);
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");
  const [aboutYou, setAboutYou] = useState("");
  const [profession, setProfession] = useState("");
  const [InstaAccount, setInstaAccount] = useState("");
  const [twitterAcount, setTwitterAcount] = useState("");
  const [dribbleAccount, setDribbleAccount] = useState("");
  const [behanceAccount, setBehanceAccount] = useState("");
  const [linkedInAccount, setLinkedInAccount] = useState("");

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  React.useEffect(()=>{
    dispatch(getprofile());
  },[])

  React.useEffect(() => {
    error && toast.error(error);
  }, [ error]);

  React.useEffect(() => {
    if (profile && profile.data) {
      setName(profile.data.name);
      setUsername(profile.data.username);
      setLocation(profile.data.location);
      setAboutYou(profile.data.aboutYou);
      setBio(profile.data.bio);
      setEmail(profile.data.email);
      setImage(profile.data.photo);
      setInstaAccount(profile.data.InstaAccount);
      setTwitterAcount(profile.data.twitterAcount);
      setDribbleAccount(profile.data.dribbleAccount);
      setBehanceAccount(profile.data.behanceAccount);
      setLinkedInAccount(profile.data.linkedInAccount);
      setProfession(profile.data.profession);
    }
    if (!profile && !profile.data) {
      dispatch(getprofile());
    }
  }, [profile]);

  const uploadImage = (e) => {
    e.preventDefault();
    dispatch(uploadFile(e.target.files[0], setImage));
  };

  const onUpdateProfile=(e)=>{
      e.preventDefault()
      const data={
      username,
      name,
      bio,
      email,
      photo:image,
      location,
      aboutYou,
      profession,
      InstaAccount,
      twitterAcount,
      dribbleAccount,
      behanceAccount,
      linkedInAccount,
      }
      dispatch(updateProfile(data, history,null, toast,'Profile Update Succussfully'));
  }

  console.log(image)

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <ToastContainer />
          <div className="">
            <div className=" pt-16 ">
              <form>
                <div className="container mx-auto  w-full rounded">
                  <div className="  w-9/12 lg:w-6/12 mx-auto">
                    <div className="">
                      <div className="mx-auto items-center flex-col">
                        <div className=" bg-cover mx-auto flex bg-no-repeat pl-20 md:pl-32 lg:pl-56 rounded relative mt-8 h-4">
                          <div className="w-20 h-20 rounded-full bg-cover bg-center bg-no-repeat  absolute bottom-0 -mb-10  shadow">
                            <img
                              src={image}
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
                                onChange={uploadImage}
                                accept="image/*"
                              />
                            </label>
                          </div>
                        </div>
                        <div className="mt-8 flex flex-col   w-full">
                          <label className="pb-2 text-sm font-bold text-gray-800 ">
                            Full Name
                          </label>
                          <input
                            id="about"
                            name="about"
                            maxlength="60"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="  py-4 pl-4  rounded text-sm focus:outline-none  bg-gray-100 resize-none text-gray-800 "
                            placeholder="Full Name"
                          />
                        </div>
                        <div className="mt-8 flex flex-col   w-full">
                          <label className="pb-2 text-sm font-bold text-gray-800 ">
                            Username
                          </label>
                          <input
                            id="about"
                            name="about"
                            maxlength="60"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="  py-4 pl-4  rounded text-sm focus:outline-none  bg-gray-100 resize-none text-gray-800 "
                            placeholder="Username"
                          />
                        </div>
                        <div className="mt-8 flex flex-col   w-full">
                          <label className="pb-2 text-sm font-bold text-gray-800 ">
                            Email
                          </label>
                          <input
                            id="about"
                            name="about"
                            maxlength="60"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="  py-4 pl-4  rounded text-sm focus:outline-none  bg-gray-100 resize-none text-gray-800 "
                            placeholder="e-mail"
                          />
                        </div>
                        <div className="mt-8 flex flex-col   w-full">
                          <label className="pb-2 text-sm font-bold text-gray-800 ">
                            Address
                          </label>
                          <input
                            id="about"
                            name="about"
                            maxlength="60"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="  py-4 pl-4  rounded text-sm focus:outline-none  bg-gray-100 resize-none text-gray-800 "
                            placeholder="Your Address"
                          />
                        </div>
                        <div className="mt-24">
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
                            value={aboutYou}
                            onChange={(e) => setAboutYou(e.target.value)}
                            className="  py-4 pl-4  rounded text-sm focus:outline-none  bg-gray-100 resize-none text-gray-800 "
                            placeholder="What are you Working on?"
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
                        <div className="mt-24 flex flex-col   w-full">
                          <label className="pb-2 text-sm font-bold text-gray-800 ">
                            Twitter Profile Link
                          </label>
                          <input
                            value={twitterAcount}
                            onChange={(e) => setTwitterAcount(e.target.value)}
                            className="  py-4 pl-4  rounded text-sm focus:outline-none  bg-gray-100 resize-none text-gray-800 "
                            placeholder="https://twitter.com/**********"
                          />
                        </div>
                        <div className="mt-8 flex flex-col   w-full">
                          <label className="pb-2 text-sm font-bold text-gray-800 ">
                            Instagram Profile Link
                          </label>
                          <input
                            value={InstaAccount}
                            onChange={(e) => setInstaAccount(e.target.value)}
                            className="  py-4 pl-4  rounded text-sm focus:outline-none  bg-gray-100 resize-none text-gray-800 "
                            placeholder="https://www.instagram.com/*******"
                          />
                        </div>
                        <div className="mt-8 flex flex-col   w-full">
                          <label className="pb-2 text-sm font-bold text-gray-800 ">
                            LinkedIn Profile Link
                          </label>
                          <input
                            id="about"
                            name="about"
                            maxlength="60"
                            value={linkedInAccount}
                            onChange={(e) => setLinkedInAccount(e.target.value)}
                            className="  py-4 pl-4  rounded text-sm focus:outline-none  bg-gray-100 resize-none text-gray-800 "
                            placeholder="https://www.linkedin.com/in/********"
                          />
                        </div>
                        <div className="mt-8 flex flex-col   w-full">
                          <label className="pb-2 text-sm font-bold text-gray-800 ">
                            Dribbble Profile Link
                          </label>
                          <input
                            value={dribbleAccount}
                            onChange={(e) => setDribbleAccount(e.target.value)}
                            className="  py-4 pl-4  rounded text-sm focus:outline-none  bg-gray-100 resize-none text-gray-800 "
                            placeholder="https://dribbble.com/*********"
                          />
                        </div>
                        <div className="mt-8 flex flex-col   w-full">
                          <label className="pb-2 text-sm font-bold text-gray-800 ">
                            Behance Profile Link
                          </label>
                          <input
                            value={behanceAccount}
                            onChange={(e) => setBehanceAccount(e.target.value)}
                            className="  py-4 pl-4  rounded text-sm focus:outline-none  bg-gray-100 resize-none text-gray-800 "
                            placeholder="https://www.behance.net/*********"
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-center pb-8 pt-8">
                        <button
                          className="bg-red-400 transition duration-150 ease-in-out hover:bg-red-500 rounded text-white px-8 py-2 text-sm "
                          type="submit"
                          onClick={onUpdateProfile}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile;
