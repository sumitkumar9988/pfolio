import React from "react";
import { ReactComponent as BlogSVG } from "./../../../assets/blog-section.svg";

const blog = () => {
  return (
    <section className="mx-auto container py-20">
      <div className="flex justify-center items-center flex-col">
        <div className="flex lg:flex-row flex-col ">
          <div className="flex justify-center items-center">
            <div className="flex flex-col justify-end h-40 w-3/4 mt-12  pb-12">
              <div className="md:mb-6 mb-2">
                <h2 className="lg:text-3xl md:text-2xl text-1xl font-bold pt-12 leading-10 text-gray-800 ">
                  Sign Up
                </h2>
              </div>
              <div className="flex justify-start items-center">
                <p className="md:text-xl text-base leading-7 text-gray-600 ">
                  Already have an account? Log In. Continue with Facebook.
                  Continue with Google. Continue with Apple. By getting started,
                  you acknowledge and agree to our terms.
                </p>
              </div>
              <div className="flex justify-between items-center md:mt-8 mt-4">
                <div>
                  <button className="  w-36 h-12 rounded-lg text-white bg-gradient-to-l from-red-400 to-red-500">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex lg:justify-start justify-center items-start">
            <div className="flex justify-center items-center mb-10 lg:mt-0 w-56 md:w-full">
              <img src="https://i.ibb.co/ZcJhy6Y/mobile.png" alt="iphone" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default blog;
