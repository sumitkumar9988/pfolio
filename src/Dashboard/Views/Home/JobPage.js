import React from "react";
import exploreIllustration from "./../../../Assets/explore.svg";
const Explore = () => {
  return (
    <section className="mx-auto container py-20 overflow-hidden">
      <div className="flex justify-center items-center flex-col">
        <div className="flex lg:flex-row flex-col ">
          <div className="flex justify-center items-center">
            <div className="flex flex-col justify-end h-40 w-3/4 mt-12  pb-12">
              <div className="md:mb-6 mb-2">
                <h2 className="lg:text-3xl md:text-2xl text-1xl font-bold pt-12 leading-10 text-gray-800 ">
                  Explore Opportunity
                </h2>
              </div>
              <div className="flex justify-start items-center">
                <p className="md:text-xl text-base font-rubik font-medium leading-7 text-gray-600 ">
                  We will Let you know with email about new job and gig
                  Opportunity thats suits your profile
                </p>
              </div>
              <div className="flex justify-between items-center md:mt-8 mt-4">
                <div>
                  <button className="  w-36 h-12 rounded-lg text-white bg-gradient-to-l from-red-400 to-red-500">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex lg:justify-start justify-center items-start">
            <div className="flex justify-center items-center mb-10 lg:mt-0 w-88 md:w-full">
              <img src={exploreIllustration} className="w-8/12" alt="iphone" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
