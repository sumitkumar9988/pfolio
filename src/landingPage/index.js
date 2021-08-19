import React from "react";
import dashboardImage from "./../assets/home.PNG";
const Index = () => {
  return (
    <>
      <body class="antialiased bg-body text-body font-body">
        <div>
          <section class="xl:bg-contain bg-top bg-no-repeat">
            <div class="container px-4 mx-auto">
              <nav class="flex justify-between items-center py-6">
                <p class="text-3xl font-semibold leading-none">
                  <img
                    class="h-10"
                    src="https://res.cloudinary.com/sumit9988/image/upload/v1626200253/Peach_Abstract_Design_Brand_Letter_P_Logo_1_dbfhbz.svg"
                    alt=""
                    width="auto"
                  />
                </p>

                {/* <div class="block">
                  <p class="mr-2 inline-block px-4 py-3 text-xs text-red-300 hover:text-red-400 font-semibold leading-none border border-red-200 hover:border-red-300 rounded">
                    Log In
                  </p>
                  <p class="inline-block px-4 py-3 text-xs font-semibold leading-none bg-red-400 hover:bg-red-500 text-white rounded">
                    Sign Up
                  </p>
                </div> */}
              </nav>
              <div class="pt-12 text-center">
                <div class="max-w-lg mx-auto mb-8">
                <h1 class="focus:outline-none text-4xl lg:text-5xl pt-4 font-extrabold text-center leading-tight text-gray-800 ">
                  Create Beautiful Landing Pages 
                </h1>
                 
                  <p class="text-gray-400 leading-relaxed pt-8">
                    The quick brown fox jumps over the lazy dog.
                  </p>
                </div>
                <div>
                  <p class=" inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-red-400 hover:bg-red-500 rounded">
                    Check Now
                  </p>
                </div>
              </div>
            </div>
            <div class=" max-w-6xl mt-16 md:mt-8 mb-8 mx-auto pb-24">
              <div class="">
                <img class="rounded" src={dashboardImage} alt="" />
              </div>
            </div>
          </section>

          <section class="mx-auto container bg-white pt-16">
            <div class="px-4 lg:px-0">
              <div role="contentinfo" class="flex items-center flex-col px-4">
                <h1 class=" text-3xl md:text-4xl mb-4 font-bold font-heading">
                  Create Beautiful 
                </h1>
              </div>
            </div>
          </section>
          <section class="bg-gradient-to-b from-red-500 to-red-400 py-12 mt-20">
            <div
              tabindex="0"
              aria-label="group of cards"
              class="focus:outline-none px-4 lg:px-0"
            >
              <div class="mx-auto container flex flex-wrap px-2 md:px-24">
                <div
                  tabindex="0"
                  aria-label="card 1"
                  class="focus:outline-none flex sm:w-full md:w-1/2 lg:border-r md:border-r sm:border-r-0 border-white pb-10 lg:pt-10"
                >
                  <div class="mr-5 text-white">
                    <svg
                      tabindex="0"
                      aria-label="drawer"
                      class="focus:outline-none"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <rect x="3" y="4" width="18" height="4" rx="2" />
                      <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" />
                      <line x1="10" y1="12" x2="14" y2="12" />
                    </svg>
                  </div>
                  <div class="md:w-9/12 lg:w-9/12 mt-1">
                    <h2
                      tabindex="0"
                      class="focus:outline-none text-lg font-bold leading-tight text-white"
                    >
                      Ready to use components
                    </h2>
                    <p
                      tabindex="0"
                      class="focus:outline-none text-base text-white leading-normal xl:w-10/12 pt-2"
                    >
                      It provides a very simple start, no need to write a lot of
                      code, you just import it and start the primitive
                      components and create the ones you need.
                    </p>
                  </div>
                </div>
                <div
                  tabindex="0"
                  aria-label="card 2"
                  class="focus:outline-none flex sm:w-full md:w-1/2 lg:pb-10 lg:pt-10"
                >
                  <div class="sm:ml-0 md:ml-10 lg:ml-10 mr-5 text-white">
                    <svg
                      tabindex="0"
                      aria-label="check"
                      class="focus:outline-none"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx="12" cy="12" r="9" />
                      <path d="M9 12l2 2l4 -4" />
                    </svg>
                  </div>
                  <div class="md:w-9/12 lg:w-9/12 mt-1">
                    <h2
                      tabindex="0"
                      class="focus:outline-none text-lg font-bold leading-tight text-white"
                    >
                      Hight Quality UI you can reply on
                    </h2>
                    <p
                      tabindex="0"
                      class="focus:outline-none text-base text-white leading-normal xl:w-10/12 pt-2"
                    >
                      Modify the visual appearance of your site – including
                      colors, fonts, margins and other style-related properties
                      – with a sophisticated style.
                    </p>
                  </div>
                </div>
                <div
                  tabindex="0"
                  aria-label="card 3"
                  class="focus:outline-none flex sm:w-full md:w-1/2 lg:border-t md:border-t sm:border-t-0 lg:border-r md:border-r sm:border-r-0 border-white pt-10 lg:pb-20"
                >
                  <div class="mr-5 text-white">
                    <svg
                      tabindex="0"
                      aria-label="html tag"
                      class="focus:outline-none"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="7 8 3 12 7 16" />
                      <polyline points="17 8 21 12 17 16" />
                      <line x1="14" y1="4" x2="10" y2="20" />
                    </svg>
                  </div>
                  <div class="md:w-9/12 lg:w-9/12 mt-1">
                    <h2
                      tabindex="0"
                      class="focus:outline-none text-lg font-bold leading-tight text-white"
                    >
                      Coded by Developers for Developers
                    </h2>
                    <p
                      tabindex="0"
                      class="focus:outline-none text-base text-white leading-normal xl:w-10/12 pt-2"
                    >
                      Instead of just giving you the tools to create your own
                      site, they offer you a list of themes you can choose from.
                      Thus a handy product.
                    </p>
                  </div>
                </div>
                <div
                  tabindex="0"
                  aria-label="card 4"
                  class="focus:outline-none flex sm:w-full md:w-1/2 lg:border-t md:border-t sm:border-t-0 border-white pt-10 lg:pb-20"
                >
                  <div class="sm:ml-0 md:ml-10 lg:ml-10 mr-5 text-white">
                    <svg
                      tabindex="0"
                      aria-label="monitor"
                      class="focus:outline-none"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <rect x="3" y="4" width="18" height="12" rx="1" />
                      <line x1="7" y1="20" x2="17" y2="20" />
                      <line x1="9" y1="16" x2="9" y2="20" />
                      <line x1="15" y1="16" x2="15" y2="20" />
                    </svg>
                  </div>
                  <div class="md:w-9/12 lg:w-9/12 mt-1">
                    <h2
                      tabindex="0"
                      class="focus:outline-none text-lg font-bold leading-tight text-white"
                    >
                      The Last UI kit you’ll ever need
                    </h2>
                    <p
                      tabindex="0"
                      class="focus:outline-none text-base text-white leading-normal xl:w-10/12 pt-2"
                    >
                      We have chosen the bright color palettes that arouse the
                      only positive emotions. The kit that simply assures to be
                      loved by everyone.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          <div class="pt-20 pb-24 ">
            <div class="container px-4 mx-auto">
              <div class="max-w-xl mx-auto text-center">
                <span class="inline-block text-xs py-1 px-3 bg-red-200 text-gray-800 font-semibold rounded-xl">
                  Lorem ipsum
                </span>
                <h2 class="my-3 text-3xl md:text-4xl text-white font-bold font-heading">
                  Lorem ipsum dolor sit amet consectutar domor
                </h2>
                <p class="text-sm md:text-base text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  luctus eget justo et iaculis.
                </p>
                <div class="mt-10">
                  <p class="inline-block py-4 px-8 text-xs text-red-400 hover:text-white font-semibold leading-none bg-white hover:bg-red-400 border hover:border-white rounded transition duration-300">
                    Get Started
                  </p>
                </div>
              </div>
            </div>
          </div>
          </section>

          <section class="py-20">
            <div class="container px-4 mx-auto">
              <div class="flex flex-wrap -mx-3">
                <div class="text-center md:text-left w-full lg:w-1/2 px-3">
                    <h2 class="mt-2  text-4xl font-bold font-heading">
                      Contact Us
                    </h2>
                  <div class="mt-10 lg:mt-12">
                    <div class="mb-10 leading-relaxed">
                      <h3 class="text-sm text-blueGray-400">Phone</h3>
                      <p>+ 48 654-430-309</p>
                    </div>
                    <div class="mb-10 leading-relaxed">
                      <h4 class="text-sm text-blueGray-400">E-mail</h4>
                      <p>info@metis.com</p>
                    </div>
                    <div class="mb-10 leading-relaxed">
                      <h4 class="text-sm text-blueGray-400">Address</h4>
                      <p>11567 E Broadview Dr</p>
                      <p>Kiowa, Colorado(CO), 80117</p>
                    </div>
                  </div>
                </div>
                <div class="w-full pt-14 lg:w-1/2 px-3">
                  <form class="pt-8">
                    <div class="mb-4">
                      <input
                        class="w-full p-4  text-xs font-semibold leading-none bg-blue-50 rounded outline-none"
                        type="text"
                        placeholder="Subject"
                      />
                    </div>
                    <div class="mb-4">
                      <input
                        class="w-full p-4 text-xs font-semibold leading-none bg-blue-50 rounded outline-none"
                        type="text"
                        placeholder="Name"
                      />
                    </div>
                    <div class="mb-4">
                      <input
                        class="w-full p-4 text-xs font-semibold leading-none bg-blue-50 rounded outline-none"
                        type="email"
                        placeholder="name@example.com"
                      />
                    </div>
                    <div class="mb-4">
                      <textarea
                        class="w-full h-24 p-4 text-xs font-semibold leading-none resize-none bg-blue-50 rounded outline-none"
                        type="text"
                        placeholder="Message..."
                      ></textarea>
                    </div>
                    <div class="flex justify-between items-center">
                      <label>
                        <input
                          class="mr-1 text-red-400"
                          type="checkbox"
                          name="terms"
                          value="1"
                        />
                        <span class="text-sm font-semibold text-gray-600">
                          Notify me for new update and feature
                        </span>
                      </label>
                      <button
                        class="py-4 px-8 text-sm text-white font-semibold leading-none bg-red-400 hover:bg-red-500 rounded"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <section class="relative py-20 bg-red-400 mt-8 overflow-hidden">
            <div class="relative container px-4 mx-auto z-10">
              <div class="flex flex-wrap justify-center items-center -mx-3">
                <div class="w-full lg:w-1/2 px-3 mb-8 text-center lg:text-left">
                  <h2 class="text-3xl mb-4 text-white lg:text-4xl font-bold font-heading">
                    <span>Lorem ipsum</span>{" "}
                    {/* <span class="text-gray-700">dolor sit</span>{" "}
                    <span>amet, consectetur adipiscing.</span> */}
                  </h2>
                  <p class="text-gray-300 font-semibold">
                    Integer felis tellus, rhoncus ac pulvinar vitae.
                  </p>
                </div>
                <div class="w-full lg:w-1/2 px-3">
                  <div class="flex flex-wrap max-w-lg mx-auto">
                    <div class="flex w-full md:w-2/3 px-3 mb-3 md:mb-0 md:ml-auto md:mr-6 bg-red-400 border border-red-200 rounded">
                      <svg
                        class="h-6 w-6 my-auto text-red-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewbox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                      <input
                        class="w-full pl-3 py-4 text-xs text-white placeholder-white font-semibold leading-none bg-red-400 outline-none"
                        type="text"
                        placeholder="Type your e-mail"
                      />
                    </div>
                    <button
                      class="w-full md:w-auto py-4 px-8 text-xs  text-red-500 hover:text-white font-semibold leading-none border hover:border-red-200 bg-white hover:bg-red-400 rounded transition duration-300 ease-in-out"
                      type="submit"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <img
              class="hidden lg:block absolute left-0 top-0 h-192 -mt-48 pb-16"
              src="metis-assets/elements/square-rotated.svg"
              alt=""
            />
          </section>
          <section class="py-20">
            <div class="container px-4 mx-auto">
              <div class="flex flex-wrap mb-12 lg:mb-20 -mx-3 text-center lg:text-left">
                <div class="w-full lg:w-1/5 px-3 mb-6 lg:mb-0">
                  <p class="inline-block mx-auto lg:mx-0 text-3xl font-semibold leading-none">
                    <img
                      class="h-10"
                      src="https://res.cloudinary.com/sumit9988/image/upload/v1626200253/Peach_Abstract_Design_Brand_Letter_P_Logo_1_dbfhbz.svg"
                      alt=""
                      width="auto"
                    />
                  </p>
                </div>
                <div class="w-full lg:w-2/5 px-3 mb-8 lg:mb-0">
                  <p class="max-w-md mx-auto lg:max-w-full lg:mx-0 lg:pr-32 lg:text-lg text-blueGray-400 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    luctus eget justo.
                  </p>
                </div>
                <div class="w-full lg:w-1/5 px-3 mb-8 lg:mb-0">
                  <p class="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">
                    Office
                  </p>
                  <p class="lg:text-lg text-blueGray-400">
                    359 Hidden Valley Road, NY
                  </p>
                </div>
                <div class="w-full lg:w-1/5 px-3">
                  <p class="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">
                    Contacts
                  </p>
                  <p class="lg:text-lg text-blueGray-400">hello@gmail.com</p>
                </div>
              </div>
              <div class="flex flex-col lg:flex-row items-center lg:justify-between">
                <p class="text-xs text-blueGray-400">
                  © 2020. All rights reserved.
                </p>
                <div class="order-first lg:order-last -mx-2 mb-4 lg:mb-0">
                  <p class="inline-block px-2">
                    <img src="metis-assets/icons/facebook-blue.svg" alt="" />
                  </p>{" "}
                  <p class="inline-block px-2">
                    <img src="metis-assets/icons/twitter-blue.svg" alt="" />
                  </p>{" "}
                  <p class="inline-block px-2">
                    <img src="metis-assets/icons/instagram-blue.svg" alt="" />
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </body>
    </>
  );
};

export default Index;
