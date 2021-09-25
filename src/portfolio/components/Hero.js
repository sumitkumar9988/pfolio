import React from "react";
import {
  AiOutlineGithub,
  AiOutlineDribbble,
  AiFillTwitterCircle,
  AiFillBehanceCircle,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";

const Hero = () => {
  return (
    <div className="bg-gray-900 h-full ">
      <div className="w-full md:w-10/12 lg:w-7/12 mx-auto">
        <div className="pt-24 p-8 lg:p-16 md:pt-32  pb-32">
          <img
            src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwyM3x8bWVufGVufDB8fHx8MTYzMjQ3MTI0Ng&ixlib=rb-1.2.1&q=80&w=1080"
            alt="me"
            className="border border-gray-100 rounded-full w-24 h-24 object-cover  md:w-36 md:h-36 mt-36"
          />
          <div className="flex items-center">
            <h1 className="mt-6 mb-6 text-4xl font-rubik font-bold md:mt-8 md:mb-8 md:text-5xl text-white">
              Hi, I'm Timka! 👋
            </h1>
            {/* <HandWave className="text-4xl md:text-5xl" /> */}
          </div>
          <p className="text-xl font-extrabold tracking-normal md:text-3xl text-black-700 font-rubik   text-gray-200">
            Full-stack ninja, student, indie hacker Currently SWE Intern
          </p>
          <div className="flex flex-row mt-8">
            <div className="">
              <AiOutlineGithub className="h-8 w-8 m-1 text-white" />
            </div>
            <div className="">
              <AiOutlineDribbble className="h-8 w-8 m-1 text-white" />
            </div>{" "}
            <div className="">
              <AiFillTwitterCircle className="h-8 w-8  m-1 text-white" />
            </div>{" "}
            <div className="">
              <AiFillBehanceCircle className="h-8 w-8 m-1 text-white" />
            </div>{" "}
            <div className="">
              <AiFillLinkedin className="h-8 w-8 m-1 text-white" />
            </div>
          </div>

          <div className="mt-10">
            <p className="mb-8 text-base md:text-xl font-rubik   text-gray-200 ">
              I am a rising junior at Nazarbayev University majoring in CS. I
              enjoy creating high-quality software products with a complex logic
              behind it aaa. Maaay technology stack includes React, TypeScript
              and Golang. I am also currently learning more about Ethereum
              blockchain and cybersecurity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
