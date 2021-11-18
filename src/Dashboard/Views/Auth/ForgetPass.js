import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { userforgetPassword } from "../../../redux/action/authAction";
import Loader from "../../../utils/loader";
import ToastContainer from "../../../utils/toast";
import ReactGA from "react-ga";


const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const forgetPassword = useSelector((state) => state.forgetPassword);
  const { loading, error, success } = forgetPassword;

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (success) {
      toast.success(success);
    }
  }, [error, success]);
  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      email,
    };
    dispatch(userforgetPassword(data));
  };

  return (
    <div>
      <div>
        {loading && <Loader />}
        <section class="relative py-20">
          <div class="container px-4 mx-auto">
            <div class="max-w-md mx-auto py-6 lg:py-12 px-4 lg:px-8 bg-white border rounded-xl text-center">
              <span class="inline-block mb-4 text-xs text-blue-400 font-semibold">
                Forget Password
              </span>
              <div className="flex justify-center items-center mb-12">
                <img
                  src="https://res.cloudinary.com/sumit9988/image/upload/v1626467520/Peach_Abstract_Design_Brand_Letter_P_Logo_1_pp0dmw.svg"
                  className="w-24 h-24"
                  alt="logo"
                />
              </div>

              <form action="#">
                <div class="relative flex flex-wrap mb-6 pt-">
                  <input
                    class="relative mb-2 md:mb-0 bg-gray-100 focus:outline-none w-full py-4 pl-4 text-sm border rounded"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g sumit@pfolio.me"
                  />
                  <span class="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
                    Your email address
                  </span>
                </div>

                <button
                  onClick={submitHandler}
                  class="w-full inline-block py-4 mb-4 text-sm text-white font-medium leading-normal bg-red-400 hover:bg-red-300 rounded transition duration-200"
                >
                  Send Verification
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

export default ForgetPassword;
