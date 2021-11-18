import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { userChangePassword } from "../../../redux/action/authAction";
import Loader from "../../../utils/loader";
import ToastContainer from "../../../utils/toast";
import ReactGA from "react-ga";

const ChangePassword = ({ history, match }) => {
  const [passwordCurrent, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const login = useSelector((state) => state.login);
  const { user } = login;

  const changePassword = useSelector((state) => state.changePassword);
  const { loading, success, error } = changePassword;

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  useEffect(() => {
    if (!user) {
      history.push("/login");
    }
    if (success) {
      toast.success(success);
      history.push("/home");
    }
    if (error) {
      toast.error(error);
    }
  }, [history, user, error, success]);

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      passwordCurrent,
      password,
    };
    dispatch(userChangePassword(data));
  };

  return (
    <div>
      {loading && <Loader />}
      <div>
        <section class="relative py-20">
          <div class="container px-4 mx-auto">
            <div class="max-w-md mx-auto py-6 lg:py-12 px-4 lg:px-8 bg-white border rounded-xl text-center">
              <span class="inline-block mb-4 text-xs text-blue-400 font-semibold">
                Change Password
              </span>
              <div className="flex justify-center items-center mb-12">
                <img
                  src="https://res.cloudinary.com/sumit9988/image/upload/v1626467520/Peach_Abstract_Design_Brand_Letter_P_Logo_1_pp0dmw.svg"
                  className="w-24 h-24"
                  alt="logo"
                />
              </div>

              <form action="#">
                <div class="relative flex flex-wrap mb-6">
                  <input
                    class="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded"
                    type="password"
                    value={passwordCurrent}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    placeholder="******"
                  />
                  <span class="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
                    Current Password
                  </span>
                </div>
                <div class="relative flex flex-wrap mb-6">
                  <input
                    class="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="******"
                  />
                  <span class="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
                    New Password
                  </span>
                </div>
                <button
                  onClick={submitHandler}
                  class="w-full inline-block py-4 mb-4 text-sm text-white font-medium leading-normal bg-red-400 hover:bg-red-300 rounded transition duration-200"
                >
                  Change Password
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

export default ChangePassword;
