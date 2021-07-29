import React from "react";
import Mac from "./../../../assets/Macbook Pro.png";
import { LiveProvider, LivePreview } from "react-live";
import PortfolioSite from "./../../../portfolio/Index";
import UploadResume from "../../components/Card/uploadResume";
import Share from "../../components/Card/share";
import Bio from "../../components/Card/bio";


const home = () => {
  const scope = { PortfolioSite };

  const code = `
<div><PortfolioSite /></div>
`;

  return (
    <div className="">
      {/* <UploadResume/> */}
      {/* <Share/> */}
      {/* <Bio/> */}
      <div className="pt-8 pb-4 px-6">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl font-bold">Welcome, John Smith 👋</h2>
        </div>
      </div>

      <section class=" px-6 pb-12 ">
        <div class="flex flex-wrap items-center">
          <div class="w-full lg:w-auto flex items-center  lg:mb-0"></div>
          <div class="w-full  lg:w-auto flex py-2 px-4  md:mb-0 md:mr-4 md:ml-auto  rounded "></div>
          <p class="md:w-auto flex items-center py-2 px-4 rounded bg-red-400 hover:bg-red-500 text-white text-sm font-medium">
            <span class="inline-block mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <span>Visit Your Site</span>
          </p>
        </div>
      </section>

      <div className="relative h-full w-full ">
        <img src={Mac} className="bg-contain h-full w-full" alt="mac" />
        <div className="absolute     w-77 h-82 overflow-scroll overflow-x-hidden  mt-4 ml-12 sm:mt-4 sm:ml-16 md:ml-20 lg:mt-4 lg:ml-22 xl:mt-8 xl:ml-32 inset-0 rounded">
          <div className="transform">
            <LiveProvider code={code} scope={scope}>
              <LivePreview />
            </LiveProvider>
          </div>
        </div>
      </div>
      <section class="py-8">
        <div class="container px-4 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="w-full lg:w-1/2 p-4">
              <div class="p-6 h-full bg-white shadow rounded text-center overflow-hidden">
                <img
                  class="mb-6 mx-auto h-24"
                  src="artemis-assets/images/friends.png"
                  alt=""
                />
                <h3 class="mb-2 text-xl font-bold">Invite Member</h3>
                <p class="mb-6 text-gray-500">Event for your team members</p>
                <p class="py-2 px-3 bg-indigo-500 hover:bg-indigo-600 rounded text-xs text-white">
                  Send invitation
                </p>
              </div>
            </div>

            <div class="w-full lg:w-1/2 p-4">
              <div class="p-6 h-full bg-white shadow rounded text-center overflow-hidden">
                <img
                  class="mb-6 mx-auto h-24"
                  src="artemis-assets/images/friends.png"
                  alt=""
                />
                <h3 class="mb-2 text-xl font-bold">Invite Member</h3>
                <p class="mb-6 text-gray-500">Event for your team members</p>
                <p class="py-2 px-3 bg-indigo-500 hover:bg-indigo-600 rounded text-xs text-white">
                  Send invitation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default home;
