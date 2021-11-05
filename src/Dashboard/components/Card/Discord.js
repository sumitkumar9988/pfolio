import React from "react";

const Discord = () => {
  return (
    <div>
      <div className="w-full flex md:flex-col flex-col-reverse items-center justify-center pt-24  py-12">
        <img
          src="https://i.ibb.co/KFN84NL/bgImg.png"
          className="w-full object-center object-fill md:mt-0 mt-6 xl:block hidden"
          alt=""
        />
        <img
          src="https://i.ibb.co/Lxn1MTX/tabley.png"
          className="w-full object-center object-fill md:mt-0 mt-6 xl:hidden"
          alt=""
        />
        <div className="md:absolute flex flex-col items-center justify-center px-4">
          <h1 className="lg:text-5xl text-center text-3xl font-bold text-gray-800">
            Join Our Discord
          </h1>
          <p className="text-base leading-6 text-center text-gray-600 mt-4 lg:w-8/12 sm:w-10/12">
            Join Our Community and connect with people know anout new product
            feature and update
          </p>
          <div className="pt-8">
            <a
              className="text-base font-medium leading-4  py-4 px-7 text-white bg-red-400 rounded mt-12 hover:bg-red-500 "
              target="_blank"
              href="https://discord.gg/fCC3kkwC8H"
            >
              Join Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discord;
