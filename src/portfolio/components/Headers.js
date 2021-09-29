import React, { useRef } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useHeaderVisible } from "./../utils/useHeaderVisible";

const Headers = () => {
  const visible = useHeaderVisible();
  return (
    <div
      className={clsx(
        "sticky z-30 w-full opacity-90 bg-gray-900 transition-top  flex items-center transform transition duration-200 justify-center mx-auto py-8",
        visible ? "top-0" : "-top-32"
      )}
    >
      <div className="w-full md:w-10/12 lg:w-7/12 ">
        <div>
          <Link href="/">
            <div className="text-white text-2xl mx-8 font-rubik font-semibold ">
              Sumit .
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Headers;
