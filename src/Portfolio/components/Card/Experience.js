import React from "react";

const Experience = ({ title, place, date, last}) => {
  return (
    <div>
      <div className="relative flex items-center mt-14">
        {!last && (
          <div className="absolute h-20 mt-32 ml-1 w-0.5 bg-white bg-white-700" />
        )}
        <div className="w-2 h-2 rounded-full bg-white" />
        <div className="ml-8 text-white">
          <p className="text-base font-rubik font-medium">{title}</p>
          <p className="text-base">{place}</p>
          <p className="flex items-center text-sm mt-0.5 text-white">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
