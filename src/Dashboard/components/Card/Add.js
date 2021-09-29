import React from "react";
import {Link} from 'react-router-dom'
const Add = ({link}) => {
  return (
    <div>
        <Link to={link}>
      <div className="h-72 transform hover:scale-105 transition duration-300 rounded-xl bg-white justify-center items-center flex flex-col  shadow-xl text-center">
        <div className=" p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Add;
