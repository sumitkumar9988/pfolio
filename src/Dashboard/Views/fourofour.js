import React from "react";
import FourOFourSVG from "./../../Assets/404.svg";
const FourOFour = () => {
  return (
    <section class="py-20 overflow-hidden">
      <div class="container px-4 mx-auto text-center">
        <img class="mx-auto md:max-w-md mb-4 h-80" src={FourOFourSVG} alt="" />
        <span class="text-4xl text-red-500 font-bold font-heading">
          Error 404
        </span>
        <h2 class="mb-4 text-4xl font-bold font-heading">
          Something went wrong!
        </h2>
        <div>
          <p
            class="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-red-400 hover:bg-red-500 rounded"
            href="#"
          >
            Go back to Homepage
          </p>
          <p class="block sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-800 text-center font-semibold leading-none bg-blueGray-50 hover:bg-blueGray-100 rounded">
            Try Again
          </p>
        </div>
      </div>
    </section>
  );
};

export default FourOFour;
