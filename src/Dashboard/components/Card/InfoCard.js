import React from "react";

const InfoCard = ({ heading, subheading, from, to, id, image }) => {
  return (
    <div>
      <div className="h-72 transform hover:scale-105 transition duration-300 rounded-xl bg-white justify-center items-center flex flex-col  shadow-xl text-center">
        <div className="h-32 p-4">
          <img
            className="mx-auto mb-4 h-full w-full object-contain"
            src={image}
            alt=""
          />
        </div>

        <h4 className="mb-2 pt-2 text-gray-800 text-2xl font-bold font-heading">
          {heading}
        </h4>
        <p className="text-gray-500">{subheading}</p>
        <p className="text-gray-500 text-sm font-semibold pt-2">
          {from} - {to}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
