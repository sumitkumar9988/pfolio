import React from "react";

const share = ({ toggleShareScreen }) => {
  return (
    <div>
      <div class="w-full overflow-hidden h-full fixed block top-0 left-0 bg-gray-100  bg-opacity-95 backdrop-filter backdrop-blur-sm z-50">
        <div className="absolute right-0 pt-8 pr-8">
          <div
            onClick={toggleShareScreen}
            className="transform hover:scale-125 h-full w-full transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-0 mx-auto pb-8 w-full  text-center">
          <p class=" text-lg font-semibold transform hover:scale-105 text-center mx-auto transition duration-300 text-blue-700 hover:underline">
            Skip
          </p>
        </div>

        <div class="flex h-screen justify-center items-center ">
          <div className="-mt-16">
            <h1 class="text-2xl mb-6 leading-tight font-bold font-heading text-center text-red-400">
              Share
            </h1>
            <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2  gap-8">
              <div className="flex justify-center items-center rounded transform hover:scale-110 transition duration-300">
                <img
                  src="https://img.icons8.com/cute-clipart/64/000000/linkedin.png"
                  alt=""
                />
              </div>
              <div className="flex justify-center rounded transform hover:scale-110 transition duration-300">
                <img
                  src="https://img.icons8.com/cute-clipart/64/000000/twitter.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default share;
