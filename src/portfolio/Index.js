import React from "react";
import Loader from "./../utils/loader";
import { Helmet } from "react-helmet";
const Index = () => {
  const data = {
    bgTheme: "bg-black",
    mainTheme: "blue-500",
    mainThemeDark: "blue-600",
    // textColor: "text-gray-50",
    backgroundColor: "#17202A",
    textColor: "#FDFEFE",
  };

  const [loading] = React.useState(false);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Sumit kumar</title>
            <link rel="canonical" href="https://sumit.pfolio.me" />
          </Helmet>
          {/* ${data.bgTheme} ${data.textColor} */}
          <body
            className={`antialiased font-body `}
            style={{
              backgroundColor: `${data.backgroundColor}`,
              color: `${data.textColor}`,
            }}
          >
            <div>
              {/* <section>
                <div class="container px-4 mx-auto">
                  <nav class="flex items-center py-6">
                    <p class="block mx-auto text-lg font-bold leading-none">
                      Sumit .
                    </p>
                  </nav>
                </div>
              </section> */}
              {/* <section className="py-20">
                <div className="container px-4 mx-auto">
                  <div className="max-w-3xl pt-8 mx-auto text-center">
                    <h2 className="mt-2 text-4xl lg:text-5xl font-bold font-heading">
                      Hey 👋 I am{" "}
                    </h2>
                    <h2
                      className={` mb-4 text-4xl lg:text-6xl  font-extrabold font-heading`}
                    >
                      Sumit Kumar
                    </h2>
                    <p className={`mb-12 text-lg  font-semibold leading-loose`} style={{color:`${data.textColor}`}}>
                      I full-stack web developer and UI/UX designer. Check out
                      my project,mostly built with React and Node js I love
                      tailwind css. I have work with multiple and startup help
                      built there project Feel free to take a look at my latest
                      projects on the web portfolio page.
                    </p>
                    <div className="mb-16">
                      <a
                        className={`inline-block w-full sm:w-auto px-6 py-2 text-sm text-white font-bold leading-loose  rounded transition duration-200 bg-${data.mainTheme} hover:bg-${data.mainThemeDark}`}
                        href="#project"
                      >
                        Know More
                      </a>
                    </div>
                  </div>
                </div>
              </section> */}
           
              <div className="h-full">
                <div className="py-24 w-full sm:w-3/5 md:w-3/6 lg:2/5 ">
                  <div className="m-4 ml-4 sm:ml-12  md:ml-16 lg:ml-40 text-left">
                    <div className="mt-4 font-bold md:font-extrabold  text-3xl md:text-5xl">
                      <h1> Hello,</h1>
                      <h1 className="pt-4">I'm Sumit kumar</h1>
                    </div>
                    {/* <div className="pt-8 ">
                      <p className="font-normal md:font-medium w-11/12">
                        I full-stack web developer and UI/UX designer. Check out  my project,mostly built with React and Node js I love
                        tailwind css. I have work with multiple and startup help
                        built there project Feel free to take a look at my
                        latest projects on the web portfolio page.
                      </p>
                    </div>
                    <div className="mb-4 pt-12 " >
                      <a
                        className={`inline-block w-full sm:w-auto px-6 py-2 text-sm text-black font-bold leading-loose  rounded transition duration-200 `}
                        href="#project"
                        style={{background:`${data.textColor}`}}
                      >
                        Know More
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>

              <section id="project">
                <div className="py-20">
                  <div className="container px-4 mx-auto">
                    <div className="mb-16 flex flex-wrap justify-center md:justify-between items-center">
                      <div className="text-center lg:text-left">
                        <h2 className="text-3xl lg:text-4xl font-bold font-heading">
                          Featured Projects
                        </h2>
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-4 mb-4">
                      <div className="group relative mb-4 w-full md:w-1/2 lg:w-1/3 px-4">
                        <div className="relative h-80 mb-5 mx-auto rounded-lg">
                          <img
                            className="h-80 w-full relative h-full rounded-lg object-cover  "
                            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                            alt="project"
                          />
                          <div className="absolute inset-0 bg-gray-900 transition duration-500 opacity-0 group-hover:opacity-75 rounded-lg"></div>
                          <div className="absolute inset-0 p-6 flex flex-col items-start">
                            <span className="opacity-0 group-hover:opacity-100 ">
                              2021
                            </span>
                            <p className="opacity-0 group-hover:opacity-100 mb-auto text-xl lg:text-2xl text-white font-bold">
                              Lorem ipsum dolor sit amet consectutar
                            </p>
                            <p className="opacity-0 group-hover:opacity-100 inline-block py-2 px-4 border-2 border-gray-400 hover:border-white bg-transparent text-gray-50 hover:bg-white hover:text-gray-900 transition duration-200 rounded-l-xl rounded-t-xl font-bold leading-loose">
                              View Project
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* 2 */}
                      <div className="group relative mb-4 w-full md:w-1/2 lg:w-1/3 px-4">
                        <div className="relative h-80 mb-5 mx-auto rounded-lg">
                          <img
                            className="h-80 w-full relative h-full rounded-lg object-cover  "
                            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                            alt=""
                          />
                          <div className="absolute inset-0 bg-gray-900 transition duration-500 opacity-0 group-hover:opacity-75 rounded-lg"></div>
                          <div className="absolute inset-0 p-6 flex flex-col items-start">
                            <span className="opacity-0 group-hover:opacity-100 text-gray-400">
                              2021
                            </span>
                            <p className="opacity-0 group-hover:opacity-100 mb-auto text-xl lg:text-2xl text-white font-bold">
                              Lorem ipsum dolor sit amet consectutar
                            </p>
                            <p className="opacity-0 group-hover:opacity-100 inline-block py-2 px-4 border-2 border-gray-400 hover:border-white bg-transparent text-gray-50 hover:bg-white hover:text-gray-900 transition duration-200 rounded-l-xl rounded-t-xl font-bold leading-loose">
                              View Project
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* 3 */}
                      <div className="group relative mb-4 w-full md:w-1/2 lg:w-1/3 px-4">
                        <div className="relative h-80 mb-5 mx-auto rounded-lg">
                          <img
                            className="h-80 w-full relative h-full rounded-lg object-cover  "
                            src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1055&amp;q=80"
                            alt=""
                          />
                          <div className="absolute inset-0 bg-gray-900 transition duration-500 opacity-0 group-hover:opacity-75 rounded-lg"></div>
                          <div className="absolute inset-0 p-6 flex flex-col items-start">
                            <span className="opacity-0 group-hover:opacity-100 text-gray-400">
                              2021
                            </span>
                            <p className="opacity-0 group-hover:opacity-100 mb-auto text-xl lg:text-2xl text-white font-bold">
                              Lorem ipsum dolor sit amet consectutar
                            </p>
                            <p className="opacity-0 group-hover:opacity-100 inline-block py-2 px-4 border-2 border-gray-400 hover:border-white bg-transparent text-gray-50 hover:bg-white hover:text-gray-900 transition duration-200 rounded-l-xl rounded-t-xl font-bold leading-loose">
                              View Project
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* 4 */}
                      <div className="group relative mb-4 w-full md:w-1/2 lg:w-1/3 px-4">
                        <div className="relative h-80 mb-5 mx-auto rounded-lg">
                          <img
                            className="h-80 w-full relative h-full rounded-lg object-cover  "
                            src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                            alt=""
                          />
                          <div className="absolute inset-0 bg-gray-900 transition duration-500 opacity-0 group-hover:opacity-75 rounded-lg"></div>
                          <div className="absolute inset-0 p-6 flex flex-col items-start">
                            <span className="opacity-0 group-hover:opacity-100 text-gray-400">
                              2021
                            </span>
                            <p className="opacity-0 group-hover:opacity-100 mb-auto text-xl lg:text-2xl text-white font-bold">
                              Lorem ipsum dolor sit amet consectutar
                            </p>
                            <p className="opacity-0 group-hover:opacity-100 inline-block py-2 px-4 border-2 border-gray-400 hover:border-white bg-transparent text-gray-50 hover:bg-white hover:text-gray-900 transition duration-200 rounded-l-xl rounded-t-xl font-bold leading-loose">
                              View Project
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* 5 */}
                      <div className="group relative mb-4 w-full md:w-1/2 lg:w-1/3 px-4">
                        <div className="relative h-80 mb-5 mx-auto rounded-lg">
                          <img
                            className="h-80 w-full relative h-full rounded-lg object-cover  "
                            src="https://images.unsplash.com/photo-1476610182048-b716b8518aae?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1127&amp;q=80"
                            alt=""
                          />
                          <div className="absolute inset-0 bg-gray-900 transition duration-500 opacity-0 group-hover:opacity-75 rounded-lg"></div>
                          <div className="absolute inset-0 p-6 flex flex-col items-start">
                            <span className="opacity-0 group-hover:opacity-100 text-gray-400">
                              2021
                            </span>
                            <p className="opacity-0 group-hover:opacity-100 mb-auto text-xl lg:text-2xl text-white font-bold">
                              Lorem ipsum dolor sit amet consectutar
                            </p>
                            <p className="opacity-0 group-hover:opacity-100 inline-block py-2 px-4 border-2 border-gray-400 hover:border-white bg-transparent text-gray-50 hover:bg-white hover:text-gray-900 transition duration-200 rounded-l-xl rounded-t-xl font-bold leading-loose">
                              View Project
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* 6 */}
                      <div className="group relative mb-4 w-full md:w-1/2 lg:w-1/3 px-4">
                        <div className="relative h-80 mb-5 mx-auto rounded-lg">
                          <img
                            className="h-80 w-full relative h-full rounded-lg object-cover  "
                            src="https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=968&amp;q=80"
                            alt=""
                          />
                          <div className="absolute inset-0 bg-gray-900 transition duration-500 opacity-0 group-hover:opacity-75 rounded-lg"></div>
                          <div className="absolute inset-0 p-6 flex flex-col items-start">
                            <span className="opacity-0 group-hover:opacity-100 text-gray-400">
                              2021
                            </span>
                            <p className="opacity-0 group-hover:opacity-100 mb-auto text-xl lg:text-2xl text-white font-bold">
                              Lorem ipsum dolor sit amet consectutar
                            </p>
                            <p className="opacity-0 group-hover:opacity-100 inline-block py-2 px-4 border-2 border-gray-400 hover:border-white bg-transparent text-gray-50 hover:bg-white hover:text-gray-900 transition duration-200 rounded-l-xl rounded-t-xl font-bold leading-loose">
                              View Project
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="text-center">
               <p
                 className=" inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-gray-50 font-bold leading-loose transition duration-200"
                 
               >
                 View More Projects
               </p>
             </div> */}
                  </div>
                </div>
              </section>

              <section class="py-24 ">
                <div class="container mx-auto px-4">
                  <div class="flex flex-wrap -m-px">
                    <div class="w-full lg:w-1/2 p-px">
                      <img
                        class="w-full h-72 object-cover"
                        src="https://images.unsplash.com/photo-1536851101967-55988a52f455?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                        alt=""
                      />
                    </div>
                    <div class="w-full lg:w-1/2 p-px">
                      <img
                        class="w-full h-72 object-cover"
                        src="https://images.unsplash.com/photo-1553949345-eb786bb3f7ba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                        alt=""
                      />
                    </div>
                    <div class="w-full lg:w-1/3 p-px">
                      <img
                        class="w-full h-72 object-cover"
                        src="https://images.unsplash.com/photo-1552844657-1d8b11fad02e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1003&amp;q=80"
                        alt=""
                      />
                    </div>
                    <div class="w-full lg:w-1/3 p-px">
                      <img
                        class="w-full h-72 object-cover"
                        src="https://images.unsplash.com/photo-1593776805861-74972b600999?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                        alt=""
                      />
                    </div>
                    <div class="w-full lg:w-1/3 p-px">
                      <img
                        class="w-full h-72 object-cover"
                        src="https://images.unsplash.com/photo-1551043077-b55224769403?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div className="py-20  ">
                  <div className="container mx-auto px-4">
                    <div className="max-w-xl mx-auto mb-10 text-center">
                      <h2 className="text-4xl lg:text-5xl font-bold font-heading">
                        Education
                      </h2>
                    </div>
                    <div className="flex flex-wrap">
                      <div className="transform hover:scale-105 transition duration-300 mb-6 w-full md:w-1/2 lg:w-1/3 px-3">
                        <div className="py-24 bg-white rounded shadow text-center">
                          <img
                            className="mx-auto mb-8 w-24 h-24 rounded-full object-cover"
                            src="https://upload.wikimedia.org/wikipedia/en/f/fd/Indian_Institute_of_Technology_Delhi_Logo.svg"
                            alt=""
                          />
                          <h4 className="mb-2 text-gray-800 text-2xl font-bold font-heading">
                            IIT Delhi
                          </h4>
                          <p className="text-gray-500">B.tech (CSE)</p>
                        </div>
                      </div>
                      <div className="mb-6 w-full md:w-1/2 lg:w-1/3 px-3">
                        <div className="py-24 transform hover:scale-105 transition duration-300 bg-white rounded shadow text-center">
                          <img
                            className="mx-auto mb-8 w-24 h-24 rounded-full object-cover"
                            src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/IIM_Bangalore_Logo.svg/1200px-IIM_Bangalore_Logo.svg.png"
                            alt=""
                          />
                          <h4 className="mb-2 text-gray-800 text-2xl font-bold font-heading">
                            IIIM Banglore
                          </h4>
                          <p className="text-gray-500">MBA</p>
                        </div>
                      </div>

                      <div className="transform hover:scale-105 transition duration-300 mb-6 w-full md:w-1/2 lg:w-1/3 px-3">
                        <div className="py-24 bg-white rounded shadow text-center">
                          <img
                            className="mx-auto mb-8 w-24 h-24 rounded-full object-cover"
                            src="http://www.dpsjhakri.com/images/dps_logo1.png"
                            alt=""
                          />
                          <h4 className="mb-2 text-gray-800 text-2xl font-bold font-heading">
                            Delhi Public School
                          </h4>
                          <p className="text-gray-500">High School</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div className="py-20  ">
                  <div className="container mx-auto px-4">
                    <div className="max-w-xl mx-auto mb-10 text-center">
                      <h2 className="text-4xl lg:text-5xl font-bold font-heading">
                        Experience
                      </h2>
                    </div>
                    <div className="flex flex-wrap">
                      <div className="transform hover:scale-105 transition duration-300 mb-6 w-full md:w-1/2 lg:w-1/3 px-3">
                        <div className="py-24 bg-white rounded shadow text-center">
                          <img
                            className="mx-auto mb-8 w-24 h-24 rounded-full object-cover"
                            src="data:image/png;base64,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"
                            alt=""
                          />
                          <h4 className="mb-2 text-gray-800 text-2xl font-bold font-heading">
                            Google
                          </h4>
                          <p className="text-gray-500">Software developer</p>
                        </div>
                      </div>
                      <div className="transform hover:scale-105 transition duration-300 mb-6 w-full md:w-1/2 lg:w-1/3 px-3">
                        <div className="py-24 bg-white rounded shadow text-center">
                          <img
                            className="mx-auto mb-8 w-24 h-24 rounded-full object-cover"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEXxURuAzCgAre/7vAn////xTxfxVCDyWiyFzjSEzS8Ir+8dsfD7vxz7vhLyWCfxTRLyYjeL0D4ptPD7wSkDOo23AAABHUlEQVR4nO3PSRKCQBAAwVZAYFhc+P9fPToXrk2MkfWBioxHJDWM/a/pltUchISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhOfCGJJ67hcJxz2rVyV8z1NW0f97hO1H2H6E7UfYfoTtF0vJ6lNtj23NKso9q1IJ1y6tROFyiXAjJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkPBd+AR2XhmxGp3JaAAAAAElFTkSuQmCC"
                            alt=""
                          />
                          <h4 className="mb-2 text-gray-800 text-2xl font-bold font-heading">
                            Microsoft
                          </h4>
                          <p className="text-gray-500">Head of Development</p>
                        </div>
                      </div>

                      <div className="transform hover:scale-105 transition duration-300 mb-6 w-full md:w-1/2 lg:w-1/3 px-3">
                        <div className="py-24 bg-white rounded shadow text-center">
                          <img
                            className="mx-auto mb-8 w-24 h-24 rounded-full object-cover"
                            src="https://pngimg.com/uploads/amazon/amazon_PNG27.png"
                            alt=""
                          />
                          <h4 className="mb-2 text-gray-800 text-2xl font-bold font-heading">
                            Amazon
                          </h4>
                          <p className="text-gray-500">Product Designer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* <section className="py-20">
                <div className="container px-4 mx-auto">
                  <div className="max-w-xl mx-auto text-center">
                    <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading">
                      <span>Subscribe</span>
                    </h2>
                    <p className="mb-8 text-blueGray-400">
                      Drop your email to get update about me
                    </p>
                    <div className="flex flex-wrap max-w-lg mx-auto">
                      <div className="flex w-full md:w-2/3 px-3 mb-3 md:mb-0 md:mr-6 bg-gray-200 rounded">
                        <svg
                          className="h-6 w-6 my-auto text-blueGray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>
                        <input
                          className="w-full pl-3 py-4 text-xs bg-gray-200 text-blueGray-400 font-semibold leading-none  outline-none"
                          type="text"
                          placeholder="Type your e-mail"
                        />
                      </div>
                      <button
                        className={`"w-full flex md:justify-center md:items-center md:w-auto mx-auto py-4 px-8 text-xs text-white font-semibold leading-none bg-${data.mainTheme} hover:bg-${data.mainThemeDark} rounded`}
                        type="submit"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </section> */}

              <section className="py-20">
                <div className="container px-4 mx-auto">
                  <div className="flex flex-wrap -mx-4">
                    <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                      <div className="max-w-lg">
                        <h2 className="mb-6 lg:mb-12 text-4xl lg:text-5xl font-bold font-heading">
                          Get in touch
                        </h2>
                        <h3 className="mb-1 text-2xl font-bold">Address</h3>
                        <p className="mb-6 text-lg  leading-loose">
                          1686 Geraldine Lane New York, NY 10013
                        </p>
                        <h3 className="mb-1 text-2xl font-bold">Contact Us</h3>
                        <p className="text-lg  leading-loose">
                          hello@wireframes.org
                        </p>
                        <p className="text-lg  leading-loose">
                          + 7-843-672-431
                        </p>
                      </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-4">
                      <form action="#">
                        <input
                          className="w-full py-3 pl-3 mb-4 border rounded"
                          type="text"
                          placeholder="Name"
                        />
                        <input
                          className="w-full py-3 pl-3 mb-4 border rounded"
                          type="email"
                          placeholder="E-mail"
                        />
                        <textarea
                          className="mb-4 w-full p-3 border rounded resize-none"
                          id="1"
                          name="message"
                          cols="30"
                          rows="10"
                          placeholder="Your Message..."
                        ></textarea>
                        <button
                          style={{ background: `${data.textColor}` }}
                          className={`w-full inline-block px-6 py-3 mr-4 text-sm text-white font-bold leading-loose rounded transition duration-200`}
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
              <footer class="py-20">
                <div class="container px-4 mx-auto text-center">
                  <p class="inline-block mx-auto pb-8  font-bold text-2xl leading-none">
                    Sumit Kumar
                  </p>
                  <div>
                    <p class="inline-block mr-2 lg:mr-10">
                      <img src="mockup-assets/socials/facebook.svg" alt="" />
                    </p>
                    <p class="inline-block mr-2 lg:mr-10">
                      <img src="mockup-assets/socials/twitter.svg" alt="" />
                    </p>
                    <p class="inline-block mr-2 lg:mr-10">
                      <img src="mockup-assets/socials/github.svg" alt="" />
                    </p>
                    <p class="inline-block mr-2 lg:mr-10">
                      <img src="mockup-assets/socials/instagram.svg" alt="" />
                    </p>
                    <p class="inline-block">
                      <img src="mockup-assets/socials/linkedin.svg" alt="" />
                    </p>
                  </div>
                </div>
              </footer>
            </div>
          </body>
        </div>
      )}
    </div>
  );
};

export default Index;
