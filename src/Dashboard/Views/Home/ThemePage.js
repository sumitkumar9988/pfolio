import React, { useState } from "react";
import themeData from "./../../../utils/themeData.json";
const Index = () => {
  const [theme, setTheme] = useState();
  console.log(theme);
  return (
    <div className=" w-full sm:w-11/12 md:w-8/12 lg:w-6/12 mt-8 mx-auto">
      <div className="container mx-auto grid grid-cols-4 p-8">
        {themeData.map((item, i) => (
          <div
            onClick={() => setTheme(item)}
            className="flex transform hover:scale-125 duration-200 flex-row m-2 items-center justify-center mx-auto"
          >
            <div
              className={`h-12 w-6  ${item.bgColor1}  rounded-l-full `}
            ></div>
            <div
              className={`h-12 w-6  ${item.bgColor2}  rounded-r-full `}
            ></div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mx-auto">
        <button className="w-36 h-12 shadow-lg text-white bg-gradient-to-l from-red-400 to-red-500 rounded-xl ">
          Save
        </button>
      </div>
    </div>
  );
};

export default Index;
