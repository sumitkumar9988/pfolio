import React, { useState } from "react";
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
  const [shareScreen, setshareScreen] = useState(false);
  const scope = { PortfolioSite };

  const toggleShareScreen = () => {
    setshareScreen(!shareScreen);
  };

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
      {shareScreen && <Share toggleShareScreen={toggleShareScreen} />}
      {/* <Bio/> */}

      {/* <div className="pt-8 pb-4 px-6">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl font-bold">Welcome, Sumit Kumar 👋</h2>
        </div>
      </div> */}

      {/* <section class=" px-6 pb-12 ">
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
      </section> */}

      <div className="w-full rounded lg:p-10">
        <div className="h-screen ">
          <div className=" border-2 shadow-xl  w-full h-full overflow-scroll rounded-lg ">
            <LiveProvider code={code} scope={scope} >
              <div className="flex flex-row mx-4 my-2 ">
                {" "}
                <div className="w-4 h-4 bg-red-500 rounded-full mx-1" />
                <div className="w-4 h-4 bg-yellow-500 rounded-full mx-1" />
                <div className="w-4 h-4 bg-green-500 rounded-full mx-1" />
              </div>

              <div className="">
                <LivePreview />
              </div>
            </LiveProvider>
          </div>
        </div>
      </div>
      <section class="py-8 px-8">
          <div class="flex  gap-4">
          <div class="w-full lg:w-1/3  ">
                <div className=" h-80 flex flex-col justify-between bg-white  rounded-xl shadow-xl mb-6 py-5 px-4">
                  <div>
                    <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">
                      13 things to work on
                    </h4>
                    <p className="text-gray-800 dark:text-gray-100 text-sm">
                      Probabo, inquit, sic agam, ut labore et voluptatem sequi
                      nesciunt, neque porro quisquam est, quid malum, sensu
                      iudicari, sed ut alterum.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-gray-800">
                      <p className="text-sm dark:text-gray-100">Sumit kumar</p>
                      <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">
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
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
            </div>

            <div class="w-full lg:w-1/3  flex flex-col items-center justify-center h-80 shadow-xl ">
              <div className="bg-white rounded  ">
                <img src="https://i.ibb.co/3k97G48/card-1.png" alt="empty" />
                <p className="text-sm leading-4 mt-3 text-center text-gray-800">
                  Looks kinda empty here
                </p>
                <button className="flex items-center justify-center px-8 py-3 bg-indigo-700 hover:bg-indigo-600 rounded mt-5">
                  <p className="text-sm font-medium leading-none text-center text-white">
                    Add Widget
                  </p>
                </button>
              </div>
            </div>

          
            <div class="w-full lg:w-1/3 p-4  h-80 flex justify-center items-center flex-col  shadow-xl rounded-lg">
              <h3 className="text-gray-800 dark:text-gray-100 leading-4 tracking-normal text-base mb-6 font-bold">
                Social Media Integrations
              </h3>
              <div className="flex justify-between items-center w-full mb-5">
                <div className="flex items-center">
                  <p className="font-medium text-gray-600 dark:text-gray-400 text-base tracking-normal leading-4">
                    Facebook
                  </p>
                </div>
                <button className="focus:outline-none px-6 py-2 bg-indigo-700 hover:bg-indigo-600 text-white font-normal text-xs leading-3 rounded">
                  Connect
                </button>
              </div>
              <div className="flex justify-between items-center w-full mb-5">
                <div className="flex items-center">
                  <p className="font-medium text-gray-600 dark:text-gray-400 text-base tracking-normal leading-4">
                    Facebook
                  </p>
                </div>
                <button className="focus:outline-none px-6 py-2 bg-indigo-700 hover:bg-indigo-600 text-white font-normal text-xs leading-3 rounded">
                  Connect
                </button>
              </div>{" "}
              <div className="flex justify-between items-center w-full mb-5">
                <div className="flex items-center">
                  <p className="font-medium text-gray-600 dark:text-gray-400 text-base tracking-normal leading-4">
                    Facebook
                  </p>
                </div>
                <button className="focus:outline-none px-6 py-2 bg-indigo-700 hover:bg-indigo-600 text-white font-normal text-xs leading-3 rounded">
                  Connect
                </button>
              </div>
            </div>
          </div>
          <div className="w-full flex md:flex-col flex-col-reverse items-center justify-center pt-24  py-12">
            <img
              src="https://i.ibb.co/KFN84NL/bgImg.png"
              className="w-full object-center object-fill md:mt-0 mt-6 xl:block hidden"
              alt="background image"
            />
            <img
              src="https://i.ibb.co/Lxn1MTX/tabley.png"
              className="w-full object-center object-fill md:mt-0 mt-6 xl:hidden"
              alt="background image"
            />
            <div className="md:absolute flex flex-col items-center justify-center px-4">
              <h1 className="lg:text-5xl text-center text-3xl font-bold text-gray-800">
                OvonRueden Is For Everyone
              </h1>
              <p className="text-base leading-6 text-center text-gray-600 mt-4 lg:w-8/12 sm:w-10/12">
                A good idiom for kids is "It's raining cats and dogs." Kids know
                what both cats and dogs are from an early age
              </p>
              <div>
                <button
                  role="button"
                  aria-label="view all"
                  className="text-base font-medium leading-4 py-4 px-7 text-white bg-indigo-700 rounded mt-12 hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700"
                >
                  View All
                </button>
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
