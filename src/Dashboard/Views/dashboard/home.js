import React, {useState} from "react";
import { LiveProvider, LivePreview } from "react-live";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PortfolioSite from "./../../../portfolio/Index";
// import Mac from "./../../../assets/Macbook Pro.png";
import UploadResume from "../../components/Card/uploadResume";
import Share from "../../components/Card/share";
import Bio from "../../components/Card/bio";

const Home = () => {
  const [shareScreen, setshareScreen] = useState(false)
  const scope = { PortfolioSite };

  const toggleShareScreen=()=>{
    setshareScreen(!shareScreen)
  }

  const code = `
<div><PortfolioSite /></div>
`;
  const copyText = () =>
    toast("Copy", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <div className="">
      {/* <UploadResume/> */}
      {shareScreen && <Share toggleShareScreen={toggleShareScreen}/>}
      {/* <Bio/> */}

      <div className="pt-8 pb-4 px-6">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl font-bold">Welcome, Sumit Kumar 👋</h2>
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

      <div className="w-full rounded p-4 lg:p-10">
        <div className="h-screen ">
          <div className=" border-2 shadow-lg  w-full h-full overflow-scroll rounded-lg ">
            <LiveProvider code={code} scope={scope}>
            <div className="">aaaa</div>
            <div className="">
              <LivePreview />
              </div>
              
            
            </LiveProvider>
          </div>
        </div>
        </div>
      <section class="py-8">
        <div class="container px-4 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="w-full lg:w-1/3 p-4">
              <div class="p-6 h-full  shadow-lg rounded text-center overflow-hidden">
                <img
                  class="mb-6 mx-auto h-16"
                  src="https://img.icons8.com/fluency/48/000000/copy.png"
                  alt=""
                />
                <h3 class="mb-2 text-xl font-bold">Your Site</h3>
                <p class=" mb-6 text-gray-500"> Your website is ready</p>
                <div onClick={copyText}>
                  <CopyToClipboard text="https://sumit.pfolio.me">
                    <p className="py-2 px-3 bg-gray-200 rounded cursor-pointer text-xs text-black font-medium transform hover:scale-105 transition duration-150">
                      https://sumit.pfolio.tech
                    </p>
                  </CopyToClipboard>
                </div>
              </div>
            </div>

            <div class="w-full lg:w-1/3 p-4">
              <div class="p-6 h-full shadow-lg rounded text-center overflow-hidden">
              <img
                  class="mb-6 mx-auto h-16"
                  src="https://img.icons8.com/fluency/48/000000/link.png"
                  alt=""
                />
                <h3 class="mb-2 text-xl font-bold">Invite Member</h3>
                <p class="mb-6 text-gray-500">Event for your team members</p>
                <p onClick={toggleShareScreen} class="py-2 px-3 bg-red-400 hover:bg-red-500 rounded text-xs text-white">
                  Send invitation
                </p>
              </div>
            </div>
            <div class="w-full lg:w-1/3 p-4">
              <div class="p-6 h-full  shadow-lg rounded text-center overflow-hidden">
              <img
                  class="mb-6 mx-auto h-16"
                  src="https://img.icons8.com/fluency/48/000000/link.png"
                  alt=""
                />
                <h3 class="mb-2 text-xl font-bold">Invite Member</h3>
                <p class="mb-6 text-gray-500">Event for your team members</p>
                <p onClick={toggleShareScreen} class="py-2 px-3 bg-red-400 hover:bg-red-500 rounded text-xs text-white">
                  Send invitation
                </p>
              </div>
            </div>


          </div>
          <div className="w-full flex md:flex-col flex-col-reverse items-center justify-center pt-24  py-12">
                <img src="https://i.ibb.co/KFN84NL/bgImg.png" className="w-full object-center object-fill md:mt-0 mt-6 xl:block hidden" alt="background image" />
                <img src="https://i.ibb.co/Lxn1MTX/tabley.png" className="w-full object-center object-fill md:mt-0 mt-6 xl:hidden" alt="background image" />
                <div className="md:absolute flex flex-col items-center justify-center px-4">
                    <h1 className="lg:text-5xl text-center text-3xl font-bold text-gray-800">OvonRueden Is For Everyone</h1>
                    <p className="text-base leading-6 text-center text-gray-600 mt-4 lg:w-8/12 sm:w-10/12">A good idiom for kids is "It's raining cats and dogs." Kids know what both cats and dogs are from an early age</p>
                    <div>
                        <button role="button" aria-label="view all" className="text-base font-medium leading-4 py-4 px-7 text-white bg-indigo-700 rounded mt-12 hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">
                            View All
                        </button>
                    </div>
                </div>
            </div>

        </div>
      </section>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Home;
