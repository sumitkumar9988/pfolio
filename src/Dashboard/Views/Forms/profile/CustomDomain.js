import React from "react";

const CustomDomain = () => {
  return (
    <div>
      <div className=" flex justify-center   mx-auto ">
        <div className="pt-24 w-full sm:w-8/12 m-4 md:w-3/6">
          <div className="w-full ">
            <h2 className="text-2xl font-bold text-center">
              Add Your Custom Domain
            </h2>
          </div>
          <div>
            <div className=" mt-4 mb-4 ">
              <input
                type="text"
                id="name-with-label"
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                name="domain"
                placeholder="Your Domain Name"
              />
            </div>
            <div className="text-gray-700 text-base underline font-rubik font-semibold text-center">
              * We not supporting root domain right now make sure to add
              subomain like www or something else
            </div>
            <div className="flex  pt-8 items-center justify-center">
              <p className="inline-block py-3 px-6 leading-none text-white bg-red-400 hover:bg-red-500 rounded shadow">
                Save
              </p>
            </div>
            <div className="text-gray-700 pt-32 text-base  font-rubik font-normal text-start items-center">
              <div className="">
                1. We not supporting root domain right now make sure to add
                subomain like www or something else
              </div>
              <div className="pt-4">
                2. We not supporting root domain right now make sure to add
                subomain like www or something else
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomDomain;
