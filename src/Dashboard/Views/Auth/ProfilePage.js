import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createProfile, getUserDetails } from './../../../redux/action/dashboardAction'
import Loader from "../../../utils/loader";
import ToastContainer from "../../../utils/toast";

const Profile = ({ history }) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.state)
  const { profile, user } = useSelector((state) => state.store)

  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    error && toast.error(error);
    profile && history.push('/home/Get-started/bio')
  }, [error, profile])

  useEffect(() => {
    if (!user) { dispatch(getUserDetails()) }
    if (user) {
      setImage(user.data.photo)
      setName(user.data.name)
      setEmail(user.data.email)
    };
  }, [user])

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      name, username, email, image
    }
    dispatch(createProfile(data));
  };

  return (
    <div>
      <div>
        {loading && <Loader />}
        <ToastContainer />
        <section class="relative py-20">
          <div class="container px-4 mx-auto">
            <div class="max-w-md mx-auto py-6 lg:py-12 px-4 lg:px-8 bg-white border rounded-xl text-center">
              <span class="inline-block mb-4 text-base text-blue-400 font-semibold">
                Create Profile
              </span>
              <div className="flex justify-center items-center mb-12">
                <img
                  src="https://res.cloudinary.com/sumit9988/image/upload/v1626467520/Peach_Abstract_Design_Brand_Letter_P_Logo_1_pp0dmw.svg"
                  className="w-24 h-24"
                  alt="logo"
                />
              </div>

              <form>
                <div className="flex items-center justify-start mx-auto  w-full mt-8 mb-8 ">
                  <div className="w-full  bg-gray-100 rounded-lg flex items-center justify-between p-4">
                    <input
                      placeholder="Your site"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="text-base  focus:outline-none bg-gray-100 font-medium leading-6  "
                    ></input>
                    <div className=" text-base font-medium leading-6 pr-8 text-red-400 ">
                      .pfolio.me
                    </div>
                  </div>
                </div>

                <button
                  onClick={submitHandler}
                  className="w-full inline-block py-4 mb-4 text-sm text-white font-medium leading-normal bg-red-400 hover:bg-red-300 rounded transition duration-200"
                >
                  Next
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Profile;
