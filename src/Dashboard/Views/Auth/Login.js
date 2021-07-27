import React from "react";

const Login = () => {
  return (
    <div>
      <section class="relative py-20">
        <div class="container px-4 mx-auto">
          <div class="max-w-md mx-auto py-6 lg:py-12 px-4 lg:px-8 bg-white border rounded-xl text-center">
            <span class="inline-block mb-4 text-xs text-blue-400 font-semibold">
              Sign In
            </span>
            <div className="flex justify-center items-center mb-12">
              <img
                src="https://res.cloudinary.com/sumit9988/image/upload/v1626467520/Peach_Abstract_Design_Brand_Letter_P_Logo_1_pp0dmw.svg"
                className="w-24 h-24"
                alt="logo"
              />
            </div>

            <form action="#">
              <p class="flex items-center justify-center py-4 mb-6 bg-blue-400 hover:bg-blue-500  rounded">
                <span class="inline-block mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="34"
                    height="34"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    ></path>
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    ></path>
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                  </svg>
                </span>{" "}
                <span class="text-sm text-white">Sign in with Google</span>
              </p>
              <p class="block  mb-4 text-sm font-semibold ">Or</p>{" "}
              <div class="relative flex flex-wrap mb-6 pt-">
                <input
                  class="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded"
                  type="email"
                  placeholder="e.g sumit@pfolio.me"
                />
                <span class="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
                  Your email address
                </span>
              </div>
              <div class="relative flex flex-wrap mb-6">
                <input
                  class="relative mb-2 md:mb-0 w-full py-4 pl-4 text-sm border rounded"
                  type="password"
                  placeholder="******"
                />
                <span class="absolute top-0 left-0 ml-4 -mt-2 px-1 inline-block bg-white text-gray-500 text-xs">
                  Password
                </span>
              </div>
              <button class="w-full inline-block py-4 mb-4 text-sm text-white font-medium leading-normal bg-red-400 hover:bg-red-300 rounded transition duration-200">
                Get Started
              </button>
              <p class="block pb-6 mb-6 text-sm font-semibold hover:underline ">
                Forgot password?
              </p>{" "}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
