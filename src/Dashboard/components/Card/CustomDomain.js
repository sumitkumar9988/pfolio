import React from "react";
import { Link } from "react-router-dom";
const CustomDomain = () => {
  return (
    <div>
      <div className="w-80 h-80 flex flex-col items-center rounded-xl justify-center text-center shadow-xl">
        <div className="bg-white rounded  ">
          <img src="https://i.ibb.co/3k97G48/card-1.png" alt="empty" />
          <div className="w-20 bg-black mx-auto rounded-full">
            <p className="font-bold  text-base leading-4 mt-1 text-center text-white">
              free
            </p>
          </div>
          <p className="text-sm leading-4 mt-3 text-center text-gray-800">
            Add Your Custom Domain
          </p>
          <Link to="/home/custom-domain">
            <button className="flex items-center mx-auto justify-center px-8 py-3 bg-red-400 hover:bg-red-500 rounded-xl mt-5">
              <p className="text-sm font-medium leading-none text-center text-white">
                Add Domain
              </p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomDomain;
