import React from "react";

const Feedback = () => {
  return (
    <div>
      <div className=" h-80 w-80 flex flex-col justify-between bg-white  rounded-xl shadow-xl  py-5 px-4 ">
        <div>
          <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">
            Feedback
          </h4>
          <textarea
            className="text-gray-800 bg-gray-100 p-4 rounded-xl  dark:text-gray-100 text-sm h-48 w-full outline-none resize-none"
            placeholder="What we improve or any feature you want?"
          ></textarea>
        </div>
        <div className="">
          <div className="flex items-center justify-between pt-4 pb-4  text-gray-800">
            <p className="text-sm dark:text-gray-100">Sumit kumar</p>
            <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
