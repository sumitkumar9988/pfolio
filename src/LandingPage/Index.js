import React,{useState} from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import dashboardImage from "./../Assets/dashboard.jpg";
const Index = () => {

  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [message,setMessage]=useState('')


  const[emailSent,setEmailSent]=useState(false);
  const[Subscribe,setSubscribe]=useState(false);

  let to="s@pfolio.me";
  const sendEmail=(e)=>{

    e.preventDefault();
    const data={
      to,
      name,
      from:email,
      message,
    }
    console.log(data)
      axios.post('https://nighteye.co/api/v1/home/sendEmail',data,{
      headers: {"Content-Type": "application/json"}
    }).then((res)=>{
      console.log(res.data)
      setEmailSent(true)
      setName('')
      setEmail('')
      setMessage('')
    }).catch((err)=>{
      console.log(err)
    })
  }

  const newsletter=(e)=>{
    e.preventDefault();
    const data={
      email
    }
    console.log(data);
    axios.post('https://nighteye.co/api/v1/home/newsletter',data,{
      headers: {"Content-Type": "application/json"}
    }).then((res)=>{
      console.log(res.data)
      setSubscribe(true)
      setEmail('')
    }).catch((err)=>{
      console.log(err)
    })
  }



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
              <div class="pt-20 text-center">
                <div class=" mx-auto mb-8">
                  <h1 class="focus:outline-none text-4xl lg:text-7xl pt-4 font-extrabold font-rubik text-center leading-tight text-gray-800 ">
                    Build Your
                    <br /> Portfolio Site
                  </h1>
                  <h2 class="text-gray-900 font-bold font-rubik  text-2xl leading-relaxed pt-8">
                    on Custom Domain for free
                  </h2>
                </div>
                <div>
                  <Link to="/signup">
                    <p class=" inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-red-400 hover:bg-red-500 rounded">
                       Get Started
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div class=" max-w-6xl mt-16 md:mt-44 mb-8 mx-auto pb-24">
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
                      simple few minutes on Custom Domain
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
                      Analytics of 30 days
                    </h2>
                    <p
                      tabindex="0"
                      class="focus:outline-none text-base text-white leading-normal xl:w-10/12 pt-2"
                    >
                     Get Analytics of your site of 30 days to know how many people visit your site
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
                      Import Your Project 
                    </h2>
                    <p
                      tabindex="0"
                      class="focus:outline-none text-base text-white leading-normal xl:w-10/12 pt-2"
                    >
                      Import your project from Github, Dribbble also Add Custsom Project
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
                    <Link to="/signup">
                    <p class="inline-block py-4 px-8 text-xs text-red-400 hover:text-white font-semibold leading-none bg-white hover:bg-red-400 border hover:border-white rounded transition duration-300">
                      Get Started
                    </p>
                    </Link>
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
                      <p>s@pfolio.com</p>
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
                        class="w-full p-4 text-xs font-semibold leading-none bg-blue-50 rounded outline-none"
                        type="text"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        placeholder="Name"
                      />
                    </div>
                    <div class="mb-4">
                      <input
                        class="w-full p-4 text-xs font-semibold leading-none bg-blue-50 rounded outline-none"
                        type="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        placeholder="name@example.com"
                      />
                    </div>
                    <div class="mb-4">
                      <textarea
                        class="w-full h-24 p-4 text-xs font-semibold leading-none resize-none bg-blue-50 rounded outline-none"
                        type="text"
                        placeholder="Message..."
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)}
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
                        onClick={sendEmail}
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
                        type="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        placeholder="Type your e-mail"
                      />
                    </div>
                    <button
                      class="w-full md:w-auto py-4 px-8 text-xs  text-red-500 hover:text-white font-semibold leading-none border hover:border-red-200 bg-white hover:bg-red-400 rounded transition duration-300 ease-in-out"
                      type="submit"
                      onClick={newsletter}
                    >
                      Subscribe
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
                    Build your portfolio site on Custom Domain
                  </p>
                </div>
                <div class="w-full lg:w-1/5 px-3 mb-8 lg:mb-0">
                  <p class="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">
                    Office
                  </p>
                  <p class="lg:text-lg text-blueGray-400">Remote</p>
                </div>
                <div class="w-full lg:w-1/5 px-3">
                  <p class="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">
                    Contacts
                  </p>
                  <p class="lg:text-lg text-blueGray-400">
                    s@pfolio.me
                  </p>
                </div>
              </div>
              <div class="flex flex-col lg:flex-row items-center lg:justify-between">
                <p class="text-xs text-blueGray-400">
                  © 2021. All rights reserved.
                </p>
                <div class="order-first lg:order-last -mx-2 mb-4 lg:mb-0">
                  <a class="inline-block px-2" href="https://www.linkedin.com/company/pfolio-me" target="_blank" rel="noopener noreferrer">
                    <img
                      className="h-10"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACjklEQVRoge2ZT2gTQRTGv9m0pu0mEAu2ikuJDQqCNNbWniJ6qViwFg+i0osXvTeCDfSmElIPAQ8eRK8FsQiilXqzgvWgLbbpQRFUrD0YW0ItCSbY3edFlCQ7SSd1divM7/bmvZ39vn37Z3YXUCgUCjdh1Qo8idQAiIaIoRuA7oAmAMgR2GsNlDRj4ceVCisa0EbnEiA2/G+1CRO3YuERXpJrwJNIDRDooRxNYjCN+s0rByfschp3K6IhaYoEsSwW5eW4BoihS44ccRjQzcvxOwD4JGipFT8vUcmALfuavZgaDGEtegDPB0PYu927OWmbRNjAnT4DRwwder2GiKHjdp8hQ9eGETbQ2dpYFHeVxE4jbOBN+kdRPFsSO42wgYuTS3ixlEPup4WpxSwuTX6RoWvD1Ilu8D5TwNGxDzK01IRwB7Yawh0whzvKxjyjqar53f56XO7Zgd6gD+0BLwqmhYXlPO6/XcXd+QwKJolKAVCDgVoItzTg6dl2tDT93V1DnQcRQ0fE0HGhoxn945/wNbcuPLcjp9D46WCR+FIOtTZi7FRb9bW9DY4YCAW2Va051ubDiRB3xcDFEQMWATdnVtB77yPOP1rEs89Z27pz+wPCcztyDVydTuPadPpP/ODdd0ycCeL4nuIj3rOrSXhuRzpwa3alKDaJEH/5raxupy5+PKUbIACZvFk2vrCcLxvzez3C80s3wLuzrBbKTW3Zu5BMlAG3UQbcRhlwm//eAPfZoSXma3vDkIQVC9tqrdQB+yWjK7A1Xob/bRRsRo4YcQjE1cI1oIGScuSIo8HiauEa+P1nJC5FkRB03Yx1PuFlq/9iujF30rJYlAGH4dwX6ywBrzRYyUriFQqFwn1+AXvFo7bcPPZdAAAAAElFTkSuQmCC"
                      alt=""
                    />
                  </a>{" "}
                  <a class="inline-block px-2" href="https://twitter.com/pfolio_me" target="_blank" rel="noopener noreferrer">
                    <img
                      className="h-10"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADz0lEQVRoge2XTWgdVRiGn+/MpGnv3LRoqC4UhCz8I8RFRClSXdgqWkuV4CRpi1gqglZTuhFXkiDdCVIKBfEHo1Bzr0JRtGAqWhTBQhsaFX9ADbZisbXaJnPb5t6Z+VyotU0yc89MYlGYZzcz73fO+84ZzjcHCgoKCgoK/sfIJZ2tOnmdq+ZxYLXCNUCowvdG9b3QNbvo8Y7NLFm0O+iqry9/njRk0wDOSO2e6JvS+wxKnNv4oBr3hmBIkacBN8FKgLIt6vNe4u0Tbc65xXch8gSxfBn1eU/mC1A9Xna09JPAcNhb3prXvzMy9QIij1rKDwFdQAtwLJKoE3/Zb0likzqxercDyxQGnJHaLqrqWLv+e4xqsD6DeYBu/jR/0gj30lB13wjuTBKnBlCJO85fiD7maG0P1dOXW1tRFWJ91lr/DyHI/ljZ4bjud8bheJIwNQA66/laR51xtxqstnHRUjlzMyIdzZWzcEF7gFsQ2VT3y18kCVMDCGZijttXqzLqVKb28Nbk9Wn1Mdpp53dOfhXiVZHvvZMmSg0QLT6zHySY+6nc70TmK6cSvOtUamvZq60zFSralsXxDAbC3qWfNhMlbGl/sW75lFSCVxQGEhQCrAFd40zVJqnU9in6mREdC018VCJJ3D2aojptI2veyF5Tz22tjSlcm9tMDkS5O+wrjzbTpW+jI8EGZ1GtR2LpUxhfOHvNMYZZXXkuUj8hFW0XZEcsisDZhbFmhdbPeT/YCNNXQOTjCy6XzMtSBgS+5iGp2WhTAzT88mGEAwtjyx5FP7HVpjcywCBbgMa8HGXGpO79FymbCRq+dwjVDVy6ECcjKX1gK24aACDqa3vTqNyGcDC/LztEeRFf6rZ6qwAAsXAVyCDKq4BVk8nB2VBlZ5aC9E58MatQ3fJvnuEEdtLv/ZylxnoFIomHgF8yu7LnSNiY3p61yDoAftsJE5t1wO9ZJ7EgFuERNrZPZi20DwA0+ksHIie6Ffgw60RpqMhQ6Jf35anN/UW3VGvdkXKfiK5ESTzyWTAc+d4mRDRPcaYVuJDGg6UxgaMo3XnHAIYj8TbnNQ95VmCvtjpBrV9hmyhdOedVRZ6J/dL2+ZiHlAAtI8FNGHFVY0+FK1SlQ+AOYCUwn5PWhKCbw962j+YxxnkS+0CjtfGjW295SpGtKKUF2P5PK/JcPF163vZP04bmvnYHVxqHjcDDApkP6QrjqL4ct4av88Blp/KYTCPbi61O3ehgVhDrCgydxLockXZgKXAKZRLDBKrfouZgZMwo/pIjC226oKCgoKCg4L/CH/2pQ2x506tNAAAAAElFTkSuQmCC"
                      alt=""
                    />
                  </a>{" "}
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
