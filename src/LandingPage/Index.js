import React from "react";
import {Link} from 'react-router-dom'
import dashboardImage from "./../Assets/demo.png";
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

                <div class="block">
                  <Link to="/login">
                  <p class="mr-2 inline-block px-4 py-3 text-xs text-red-300 hover:text-red-400 font-semibold leading-none border border-red-200 hover:border-red-300 rounded">
                    Log In
                  </p>
                  </Link>
                  <Link to="/signup">
                  <p class="inline-block px-4 py-3 text-xs font-semibold leading-none bg-red-400 hover:bg-red-500 text-white rounded">
                    Sign Up
                  </p>
                  </Link>
                </div>
              </nav>
              <div class="pt-12 text-center">
                <div class="max-w-lg mx-auto mb-8">
                  <h1 class="focus:outline-none text-4xl lg:text-5xl pt-4 font-extrabold text-center leading-tight text-gray-800 ">
                    Build Your
                    <br /> Portfolio Site
                  </h1>

                  <p class="text-gray-400 leading-relaxed pt-8">
                    Showcase Your work, project, Skills and find a new
                    opportunity
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
                  Top Features
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
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <div class="md:w-9/12 lg:w-9/12 mt-1">
                    <h2
                      tabindex="0"
                      class="focus:outline-none text-lg font-bold leading-tight text-white"
                    >
                      Build Your Portfolio Site
                    </h2>
                    <p
                      tabindex="0"
                      class="focus:outline-none text-base text-white leading-normal xl:w-10/12 pt-2"
                    >
                      Build your Portfolio without any effort in just a few
                      simple within just a few minutes
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
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                      />
                    </svg>
                  </div>
                  <div class="md:w-9/12 lg:w-9/12 mt-1">
                    <h2
                      tabindex="0"
                      class="focus:outline-none text-lg font-bold leading-tight text-white"
                    >
                      Change theme and Analytics of 90 days
                    </h2>
                    <p
                      tabindex="0"
                      class="focus:outline-none text-base text-white leading-normal xl:w-10/12 pt-2"
                    >
                      Change color theme according to of portfolio according to
                      you and get Analytics of your site of about 90 days
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
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  <div class="md:w-9/12 lg:w-9/12 mt-1">
                    <h2
                      tabindex="0"
                      class="focus:outline-none text-lg font-bold leading-tight text-white"
                    >
                      Import Your Project and Background
                    </h2>
                    <p
                      tabindex="0"
                      class="focus:outline-none text-base text-white leading-normal xl:w-10/12 pt-2"
                    >
                      Import your project from Github, Dribbble, Instagram,
                      Youtube and import background from Linkedin and also you
                      can add custom project
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
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div class="md:w-9/12 lg:w-9/12 mt-1">
                    <h2
                      tabindex="0"
                      class="focus:outline-none text-lg font-bold leading-tight text-white"
                    >
                      Find New opportunity
                    </h2>
                    <p
                      tabindex="0"
                      class="focus:outline-none text-base text-white leading-normal xl:w-10/12 pt-2"
                    >
                      Find new opportunities of the startup, Gig work and
                      explore job opportunities and remote work by your
                      portfolio
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="pt-20 pb-24 ">
              <div class="container px-4 mx-auto">
                <div class="max-w-xl mx-auto text-center">
                  <span class="inline-block text-xs py-1 px-3 bg-red-200 text-gray-800 font-semibold rounded-xl">
                    It's free
                  </span>
                  <h2 class="my-3 text-3xl md:text-4xl text-white font-bold font-heading">
                    Explore New Opportunities
                  </h2>
                  <p class="text-sm md:text-base text-white">
                    We are building the simplest and most affordable portfolio
                    site builder and you can share your details with recruiters
                    and your peers
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
                      <p>+91 89680 33002</p>
                    </div>
                    <div class="mb-10 leading-relaxed">
                      <h4 class="text-sm text-blueGray-400">E-mail</h4>
                      <p>sumit.firstletter@gmail.com</p>
                    </div>
                    {/* <div class="mb-10 leading-relaxed">
                      <h4 class="text-sm text-blueGray-400">Address</h4>
                      <p>11567 E Broadview Dr</p>
                      <p>Kiowa, Colorado(CO), 80117</p>
                    </div> */}
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
                  <h2 class="text-3xl mb-4 text-white lg:text-4xl font-bold font-heading text-center">
                    Subscribe
                  </h2>
                  <p class="text-gray-300 font-semibold text-center">
                    Promise we will not spam you .
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
                      class="h-14"
                      src="https://res.cloudinary.com/sumit9988/image/upload/v1626200253/Peach_Abstract_Design_Brand_Letter_P_Logo_1_dbfhbz.svg"
                      alt=""
                      width="auto"
                    />
                  </p>
                </div>
                <div class="w-full lg:w-2/5 px-4 mb-8 lg:mb-0">
                  <p class="max-w-md mx-auto lg:max-w-full lg:mx-0 lg:pr-8 w-60 text-center lg:text-lg text-blueGray-400 leading-relaxed">
                    Build your portfolio site in just few minute
                  </p>
                </div>
                <div class="w-full lg:w-1/5 px-3 mb-8 lg:mb-0">
                  <p class="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">
                    Office
                  </p>
                  <p class="lg:text-lg text-blueGray-400">Not build Yet</p>
                </div>
                <div class="w-full lg:w-1/5 px-3">
                  <p class="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">
                    Contacts
                  </p>
                  <p class="lg:text-lg text-blueGray-400">
                    sumit.firstletter@gmail.com
                  </p>
                </div>
              </div>
              <div class="flex flex-col lg:flex-row items-center lg:justify-between">
                <p class="text-xs text-blueGray-400">
                  © 2020. All rights reserved.
                </p>
                <div class="order-first lg:order-last -mx-2 mb-4 lg:mb-0">
                  <p class="inline-block px-2">
                    <img
                      className="h-10"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACjklEQVRoge2ZT2gTQRTGv9m0pu0mEAu2ikuJDQqCNNbWniJ6qViwFg+i0osXvTeCDfSmElIPAQ8eRK8FsQiilXqzgvWgLbbpQRFUrD0YW0ItCSbY3edFlCQ7SSd1divM7/bmvZ39vn37Z3YXUCgUCjdh1Qo8idQAiIaIoRuA7oAmAMgR2GsNlDRj4ceVCisa0EbnEiA2/G+1CRO3YuERXpJrwJNIDRDooRxNYjCN+s0rByfschp3K6IhaYoEsSwW5eW4BoihS44ccRjQzcvxOwD4JGipFT8vUcmALfuavZgaDGEtegDPB0PYu927OWmbRNjAnT4DRwwder2GiKHjdp8hQ9eGETbQ2dpYFHeVxE4jbOBN+kdRPFsSO42wgYuTS3ixlEPup4WpxSwuTX6RoWvD1Ilu8D5TwNGxDzK01IRwB7Yawh0whzvKxjyjqar53f56XO7Zgd6gD+0BLwqmhYXlPO6/XcXd+QwKJolKAVCDgVoItzTg6dl2tDT93V1DnQcRQ0fE0HGhoxn945/wNbcuPLcjp9D46WCR+FIOtTZi7FRb9bW9DY4YCAW2Va051ubDiRB3xcDFEQMWATdnVtB77yPOP1rEs89Z27pz+wPCcztyDVydTuPadPpP/ODdd0ycCeL4nuIj3rOrSXhuRzpwa3alKDaJEH/5raxupy5+PKUbIACZvFk2vrCcLxvzez3C80s3wLuzrBbKTW3Zu5BMlAG3UQbcRhlwm//eAPfZoSXma3vDkIQVC9tqrdQB+yWjK7A1Xob/bRRsRo4YcQjE1cI1oIGScuSIo8HiauEa+P1nJC5FkRB03Yx1PuFlq/9iujF30rJYlAGH4dwX6ywBrzRYyUriFQqFwn1+AXvFo7bcPPZdAAAAAElFTkSuQmCC"
                      alt=""
                    />
                  </p>{" "}
                  <p class="inline-block px-2">
                    <img
                      className="h-10"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADz0lEQVRoge2XTWgdVRiGn+/MpGnv3LRoqC4UhCz8I8RFRClSXdgqWkuV4CRpi1gqglZTuhFXkiDdCVIKBfEHo1Bzr0JRtGAqWhTBQhsaFX9ADbZisbXaJnPb5t6Z+VyotU0yc89MYlGYZzcz73fO+84ZzjcHCgoKCgoK/sfIJZ2tOnmdq+ZxYLXCNUCowvdG9b3QNbvo8Y7NLFm0O+iqry9/njRk0wDOSO2e6JvS+wxKnNv4oBr3hmBIkacBN8FKgLIt6vNe4u0Tbc65xXch8gSxfBn1eU/mC1A9Xna09JPAcNhb3prXvzMy9QIij1rKDwFdQAtwLJKoE3/Zb0likzqxercDyxQGnJHaLqrqWLv+e4xqsD6DeYBu/jR/0gj30lB13wjuTBKnBlCJO85fiD7maG0P1dOXW1tRFWJ91lr/DyHI/ljZ4bjud8bheJIwNQA66/laR51xtxqstnHRUjlzMyIdzZWzcEF7gFsQ2VT3y18kCVMDCGZijttXqzLqVKb28Nbk9Wn1Mdpp53dOfhXiVZHvvZMmSg0QLT6zHySY+6nc70TmK6cSvOtUamvZq60zFSralsXxDAbC3qWfNhMlbGl/sW75lFSCVxQGEhQCrAFd40zVJqnU9in6mREdC018VCJJ3D2aojptI2veyF5Tz22tjSlcm9tMDkS5O+wrjzbTpW+jI8EGZ1GtR2LpUxhfOHvNMYZZXXkuUj8hFW0XZEcsisDZhbFmhdbPeT/YCNNXQOTjCy6XzMtSBgS+5iGp2WhTAzT88mGEAwtjyx5FP7HVpjcywCBbgMa8HGXGpO79FymbCRq+dwjVDVy6ECcjKX1gK24aACDqa3vTqNyGcDC/LztEeRFf6rZ6qwAAsXAVyCDKq4BVk8nB2VBlZ5aC9E58MatQ3fJvnuEEdtLv/ZylxnoFIomHgF8yu7LnSNiY3p61yDoAftsJE5t1wO9ZJ7EgFuERNrZPZi20DwA0+ksHIie6Ffgw60RpqMhQ6Jf35anN/UW3VGvdkXKfiK5ESTzyWTAc+d4mRDRPcaYVuJDGg6UxgaMo3XnHAIYj8TbnNQ95VmCvtjpBrV9hmyhdOedVRZ6J/dL2+ZiHlAAtI8FNGHFVY0+FK1SlQ+AOYCUwn5PWhKCbw962j+YxxnkS+0CjtfGjW295SpGtKKUF2P5PK/JcPF163vZP04bmvnYHVxqHjcDDApkP6QrjqL4ct4av88Blp/KYTCPbi61O3ehgVhDrCgydxLockXZgKXAKZRLDBKrfouZgZMwo/pIjC226oKCgoKCg4L/CH/2pQ2x506tNAAAAAElFTkSuQmCC"
                      alt=""
                    />
                  </p>{" "}
                  <p class="inline-block px-2">
                    <img
                      className="h-10"
                      src="data:image/png;base64,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"
                      alt=""
                    />
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
