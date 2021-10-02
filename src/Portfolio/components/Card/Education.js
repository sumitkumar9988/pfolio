import React from "react";

const Experience = ({ course, institute, date, last, theme }) => {
  return (
    <div>
      <div className="relative flex items-center mt-14">
        {!last && (
          <div
            className={`absolute h-20 mt-32 ml-1 w-0.5 ${theme.bgTextColor}`}
          />
        )}
        <div className={`w-2 h-2 rounded-full ${theme.bgTextColor}`} />
        <div className={`ml-8 ${theme.textColor2}`}>
          <p className="text-base font-rubik font-medium">{course}</p>
          <p className="text-base">{institute}</p>
          <p className={`flex items-center text-sm mt-0.5 ${theme.textColor2}`}>
            {date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
