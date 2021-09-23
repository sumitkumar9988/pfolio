import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="pt-24 md:pt-32">
        <img
          src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHw5fHxtZW58ZW58MHx8fHwxNjMyNDI2Njgy&ixlib=rb-1.2.1&q=80&w=1080"
          alt="me"
          className="border border-gray-700 rounded-full w-28 h-28 md:w-32 md:h-32 mt-36"
        />
        <div className="flex items-center">
          <h1 className="mt-6 mb-6 text-4xl font-bold md:mt-8 md:mb-8 md:text-5xl text-black-900 dark:text-white-900">
            Hi, I'm Timka! 👋
          </h1>
          {/* <HandWave className="text-4xl md:text-5xl" /> */}
        </div>
        <p className="text-xl font-bold tracking-normal md:text-3xl text-black-700 dark:text-white-700">
          Full-stack ninja, student, indie hacker Currently SWE Intern
        </p>
        {/* <div className="flex mt-8">
          <MediaIcon
            icon={<FaGithub className="w-6 h-6 md:w-7 md:h-7" />}
            href="https://github.com/ironsoul0"
            className="mr-4"
          />
          <MediaIcon
            icon={<FaTelegram className="w-6 h-6 md:w-7 md:h-7" />}
            href="https://t.me/iamironsoul"
            className="mr-4"
          />
          <MediaIcon
            icon={<FaLinkedin className="w-6 h-6 md:w-7 md:h-7" />}
            href="https://www.linkedin.com/in/ironsoul/"
            className="mr-4"
          />
          <MediaIcon
            icon={<FaTwitter className="w-6 h-6 md:w-7 md:h-7" />}
            href="https://twitter.com/ironsoul0"
          />
        </div> */}
        <div className="mt-10">
          <p className="mb-8 text-base md:text-xl dark:text-white-700 text-black-700">
            I am a rising junior at Nazarbayev University majoring in CS. I
            enjoy creating high-quality software products with a complex logic
            behind it. My technology stack includes React, TypeScript and
            Golang. I am also currently learning more about Ethereum blockchain
            and cybersecurity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
