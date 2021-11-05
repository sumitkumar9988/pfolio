import React from "react";

const Heading = ({ title, number }) => {
  return (
    <div>
      <div class="flex justify-between">
        <div class="w-full  flex items-center mb-4">
          <h2 class="text-2xl font-bold pl-6">{title} </h2>
          <span class="inline-block py-1 px-2 ml-2 rounded-full text-xs text-white bg-red-400">
            {number} Total
          </span>
        </div>
      </div>
    </div>
  );
};

export default Heading;
