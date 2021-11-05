import React from "react";
import { AiFillGithub, AiOutlineDribbble } from "react-icons/ai";
import { FcDribbble } from "react-icons/fc";
const ImportProject = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mx-auto pt-40">
        <div className="w-60">
          <a
            aria-label="Continue with github"
            role="button"
            href="#github"
            className=" bg-white  py-4 px-4 border rounded-lg border-gray-400 flex items-center w-full mt-4"
          >
            <AiFillGithub size="24px" />
            <p className="text-base  font-bold ml-4 text-gray-900">
              Import from Github
            </p>
          </a>
        </div>
        <div className="pt-12">
          <p className="underline text-base font-rubik font-medium leading-lg">
            Coming Soon
          </p>
        </div>
        <div className="w-60">
          <p className=" bg-white  py-4 px-4 border rounded-lg border-gray-400 flex items-center w-full mt-4">
            <FcDribbble size="24px" />
            <p className="text-base  font-medium ml-4 text-gray-900">
              Import from Dribbble
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImportProject;
