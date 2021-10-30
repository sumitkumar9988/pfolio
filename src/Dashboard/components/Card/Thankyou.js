import React from "react";
import {Link } from 'react-router-dom'
import welcomeSvg from "./../../../Assets/welcome.svg";
const ThankyouTab = () => {
  return (
    <div>
      <div class="w-full overflow-hidden h-full fixed block top-0 left-0  ">
        

        <div class="flex min-h-screen justify-center items-center ">
          <div className="w-full bg-white  rounded ">
            <div className="w-full flex items-center justify-center ">
              <h1 className="text-2xl font-bold pt-4 text-red-400">
                Welcome
              </h1>
            </div>
            <div className="flex items-center justify-center">
              <p className="  pt-6 w-72 text-sm font-medium  text-center text-gray-800">
                Thankyou for joing pfolio .<br/> Add all your Education , Experience , skills add your custom Domain for free
              </p>
            </div>
            <div className="pt-10 px-16 flex items-center justify-center">
              <img
                src={welcomeSvg}
                className="h-40 w-full"
                alt="set one comment"
              />
            </div>
              
            <div className="flex items-center justify-center mt-7 mb-6">
              <Link to="/home">
              <button className=" focus:outline-none focus:ring-2 focus:ring-offset-2  hover:bg-red-500 text-sm font-medium leading-none text-center text-white bg-red-400 rounded px-5 py-3">
                Welcome
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankyouTab;
