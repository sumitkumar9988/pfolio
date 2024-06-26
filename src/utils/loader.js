import React from "react";

import BeatLoader from "react-spinners/BeatLoader";

const Loader = ({ color = "#f48c8c" }) => {
  return (
    <div>
      <div class="w-full overflow-hidden h-full fixed block top-0 left-0  bg-opacity-80 backdrop-filter backdrop-blur-lg z-50">
        <div class="text-blue-500 flex h-screen justify-center items-center ">
          <BeatLoader color={color} />
        </div>
      </div>
    </div>
  );
};

export default Loader;
