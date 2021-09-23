import React from "react";
const edu = [
  {
    course: "B.tech",
    logo: "https://upload.wikimedia.org/wikipedia/en/f/fd/Indian_Institute_of_Technology_Delhi_Logo.svg",
    institute: " IIT Delhi",
    from: "2021-06",
    to: "2021-06",
  },
  {
    course: "MBA",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/IIM_Bangalore_Logo.svg/1200px-IIM_Bangalore_Logo.svg.png",
    institute: " IIM ",
    from: "2021-06",
    to: "",
  },
  {
    course: "High School",
    logo: "http://www.dpsjhakri.com/images/dps_logo1.png",
    institute: "DPS",
    from: "2021-06",
    to: "2021-06",
  },
];

const exp = [
  {
    postion: "Software Developer",
    logo: "data:image/png;base64,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",
    company: "Google",
    from: "2021-06",
    to: "2021-06",
  },
  {
    postion: "Software Developer",
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEXxURuAzCgAre/7vAn////xTxfxVCDyWiyFzjSEzS8Ir+8dsfD7vxz7vhLyWCfxTRLyYjeL0D4ptPD7wSkDOo23AAABHUlEQVR4nO3PSRKCQBAAwVZAYFhc+P9fPToXrk2MkfWBioxHJDWM/a/pltUchISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhOfCGJJ67hcJxz2rVyV8z1NW0f97hO1H2H6E7UfYfoTtF0vJ6lNtj23NKso9q1IJ1y6tROFyiXAjJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkPBd+AR2XhmxGp3JaAAAAAElFTkSuQmCC",
    company: "Microsoft",
    from: "2021-06",
    to: "2021-06",
  },
  {
    postion: "Software Developer",
    logo: "https://pngimg.com/uploads/amazon/amazon_PNG27.png",
    company: "Amazon",
    from: "2021-06",
    to: "2021-06",
  },
];

const skills = [
  {
    name: "TypeScript",
    href: "https://typescriptlang.org",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png",
  },
  {
    name: "React",
    href: "https://reactjs.org",
    icon: "data:image/png;base64,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",
  },
  {
    name: "Golang",
    href: "https://golang.org",
    icon: "data:image/jpeg;base64,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",
  },
  {
    name: "Node.js",
    href: "https://nodejs.org",
    icon: "data:image/png;base64,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",
  },
  {
    name: "Ethereum",
    href: "https://ethereum.org",
    icon: "https://toppng.com/uploads/preview/ethereum-logo-long-115527739743rm6hktcui.png",
  },
  {
    name: "GraphQL",
    href: "https://graphql.org",
    icon: "https://spng.pngfind.com/pngs/s/62-627254_i-wanted-to-give-graphql-a-shot-for.png",
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen">
      <section class="py-8 px-6">
        <div class="flex justify-between">
          <div class="w-full  flex items-center mb-4">
            <h2 class="text-2xl font-bold pl-6">Experience </h2>
            <span class="inline-block py-1 px-2 ml-2 rounded-full text-xs text-white bg-red-400">
              0 Total
            </span>
          </div>
        </div>

        <div className="flex flex-wrap pt-8">
          <div className="mb-4 w-full md:w-1/2 lg:w-1/3 px-3 rounded-lg">
            <div className="h-72 transform hover:scale-105 transition duration-300 rounded-xl bg-white justify-center items-center flex flex-col  shadow-xl text-center">
              <div className="h-32 p-4">
                <img
                  className="mx-auto mb-4 h-full w-full object-contain"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEXxURuAzCgAre/7vAn////xTxfxVCDyWiyFzjSEzS8Ir+8dsfD7vxz7vhLyWCfxTRLyYjeL0D4ptPD7wSkDOo23AAABHUlEQVR4nO3PSRKCQBAAwVZAYFhc+P9fPToXrk2MkfWBioxHJDWM/a/pltUchISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhOfCGJJ67hcJxz2rVyV8z1NW0f97hO1H2H6E7UfYfoTtF0vJ6lNtj23NKso9q1IJ1y6tROFyiXAjJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkPBd+AR2XhmxGp3JaAAAAAElFTkSuQmCC"
                  alt=""
                />
              </div>

              <h4 className="mb-2 pt-2 text-gray-800 text-2xl font-bold font-heading">
                Microsoft
              </h4>
              <p className="text-gray-500">Head of Development</p>
              <p className="text-gray-500 text-sm font-semibold pt-2">
                2021 feb - 2022 Oct
              </p>
            </div>
          </div>

          <div className="mb-4 w-full md:w-1/2 lg:w-1/3 px-3 rounded-lg">
            <div className="h-72 transform hover:scale-105 transition duration-300 rounded-xl bg-white justify-center items-center flex flex-col  shadow-xl text-center">
              <div className="h-32 p-4">
                <img
                  className="mx-auto mb-4 h-full w-full object-contain"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEXxURuAzCgAre/7vAn////xTxfxVCDyWiyFzjSEzS8Ir+8dsfD7vxz7vhLyWCfxTRLyYjeL0D4ptPD7wSkDOo23AAABHUlEQVR4nO3PSRKCQBAAwVZAYFhc+P9fPToXrk2MkfWBioxHJDWM/a/pltUchISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhOfCGJJ67hcJxz2rVyV8z1NW0f97hO1H2H6E7UfYfoTtF0vJ6lNtj23NKso9q1IJ1y6tROFyiXAjJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkPBd+AR2XhmxGp3JaAAAAAElFTkSuQmCC"
                  alt=""
                />
              </div>

              <h4 className="mb-2 pt-2 text-gray-800 text-2xl font-bold font-heading">
                Microsoft
              </h4>
              <p className="text-gray-500">Head of Development</p>
              <p className="text-gray-500 text-sm font-semibold pt-2">
                2021 feb - 2022 Oct
              </p>
            </div>
          </div>

          <div className="mb-4 w-full md:w-1/2 lg:w-1/3 px-3 rounded-lg">
            <div className="h-72 transform hover:scale-105 transition duration-300 rounded-xl bg-white justify-center items-center flex flex-col  shadow-xl text-center">
              <div className=" p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>

              {/* <h4 className="mb-2 pt-2 text-gray-800 text-2xl font-bold font-heading">
                Add Experience
              </h4> */}
            </div>
          </div>
        </div>
      </section>

      <section class="py-8 px-6">
        <div class="flex justify-between">
          <div class="w-full  flex items-center mb-4">
            <h2 class="text-2xl font-bold pl-6">Educations </h2>
            <span class="inline-block py-1 px-2 ml-2 rounded-full text-xs text-white bg-red-400">
              0 Total
            </span>
          </div>
        </div>

        <div className="flex flex-wrap pt-8">
          <div className="mb-4 w-full md:w-1/2 lg:w-1/3 px-3 rounded-lg">
            <div className="h-72 transform hover:scale-105 transition duration-300 rounded-xl bg-white justify-center items-center flex flex-col  shadow-xl text-center">
              <div className="h-32 p-4">
                <img
                  className="mx-auto mb-4 h-full w-full object-contain"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEXxURuAzCgAre/7vAn////xTxfxVCDyWiyFzjSEzS8Ir+8dsfD7vxz7vhLyWCfxTRLyYjeL0D4ptPD7wSkDOo23AAABHUlEQVR4nO3PSRKCQBAAwVZAYFhc+P9fPToXrk2MkfWBioxHJDWM/a/pltUchISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhOfCGJJ67hcJxz2rVyV8z1NW0f97hO1H2H6E7UfYfoTtF0vJ6lNtj23NKso9q1IJ1y6tROFyiXAjJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkPBd+AR2XhmxGp3JaAAAAAElFTkSuQmCC"
                  alt=""
                />
              </div>

              <h4 className="mb-2 pt-2 text-gray-800 text-2xl font-bold font-heading">
                Microsoft
              </h4>
              <p className="text-gray-500">Head of Development</p>
              <p className="text-gray-500 text-sm font-semibold pt-2">
                2021 feb - 2022 Oct
              </p>
            </div>
          </div>{" "}
          <div className="mb-4 w-full md:w-1/2 lg:w-1/3 px-3 rounded-lg">
            <div className="h-72 transform hover:scale-105 transition duration-300 rounded-xl bg-white justify-center items-center flex flex-col  shadow-xl text-center">
              <div className="h-32 p-4">
                <img
                  className="mx-auto mb-4 h-full w-full object-contain"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEXxURuAzCgAre/7vAn////xTxfxVCDyWiyFzjSEzS8Ir+8dsfD7vxz7vhLyWCfxTRLyYjeL0D4ptPD7wSkDOo23AAABHUlEQVR4nO3PSRKCQBAAwVZAYFhc+P9fPToXrk2MkfWBioxHJDWM/a/pltUchISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhOfCGJJ67hcJxz2rVyV8z1NW0f97hO1H2H6E7UfYfoTtF0vJ6lNtj23NKso9q1IJ1y6tROFyiXAjJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkPBd+AR2XhmxGp3JaAAAAAElFTkSuQmCC"
                  alt=""
                />
              </div>

              <h4 className="mb-2 pt-2 text-gray-800 text-2xl font-bold font-heading">
                Microsoft
              </h4>
              <p className="text-gray-500">Head of Development</p>
              <p className="text-gray-500 text-sm font-semibold pt-2">
                2021 feb - 2022 Oct
              </p>
            </div>
          </div>
          <div className="mb-4 w-full md:w-1/2 lg:w-1/3 px-3 rounded-lg">
            <div className="h-72 transform hover:scale-105 transition duration-300 rounded-xl bg-white justify-center items-center flex flex-col  shadow-xl text-center">
              <div className=" p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>

              {/* <h4 className="mb-2 pt-2 text-gray-800 text-2xl font-bold font-heading">
                Add Experience
              </h4> */}
            </div>
          </div>
        </div>
      </section>

      <section class="py-8 px-6">
        <div class="flex justify-between">
          <div class="w-full  flex items-center mb-4">
            <h2 class="text-2xl font-bold pl-6">Skills </h2>
            <span class="inline-block py-1 px-2 ml-2 rounded-full text-xs text-white bg-red-400">
              0 Total
            </span>
          </div>
        </div>

        <div className="mt-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-x-10 gap-x-2 md:gap-y-10 gap-y-2 px-8 md:px-0">
            <div className="w-full flex-1">
              <div className="flex items-center justify-center flex-1 h-full px-6 py-9 cursor-pointer hover:bg-gray-100  transform hover:scale-105 transition duration-300 rounded-xl bg-white shadow-xl">
                <svg
                  className="flex-1 h-full rounded-lg"
                  width={122}
                  height={26}
                  viewBox="0 0 122 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path
                      d="M43.0636 14.9752L42.3365 17.031H42.2759C42.1547 16.5674 41.9325 15.862 41.5689 15.0155L37.6706 5.24029H33.853V20.8201H36.3779V11.2062C36.3779 10.6015 36.3779 9.91626 36.3577 9.06975C36.3375 8.6465 36.2971 8.32402 36.2769 8.08215H36.3375C36.4587 8.68681 36.6 9.13022 36.701 9.41239L41.3871 20.7798H43.1646L47.8103 9.31161C47.9113 9.0496 48.0123 8.52557 48.1133 8.08215H48.1739C48.1133 9.23099 48.0729 10.2589 48.0527 10.8837V20.7597H50.7391V5.19998H47.063L43.0636 14.9752ZM53.2841 9.59378H55.91V20.7597H53.2841V9.59378ZM54.6173 4.8775C54.1729 4.8775 53.8093 5.03874 53.5063 5.32091C53.2034 5.60309 53.0418 5.96588 53.0418 6.40929C53.0418 6.83254 53.2034 7.19533 53.5063 7.4775C53.8093 7.75967 54.1729 7.90076 54.6173 7.90076C55.0616 7.90076 55.4454 7.73952 55.7282 7.4775C56.0312 7.19533 56.1928 6.83254 56.1928 6.40929C56.1928 5.98603 56.0312 5.62324 55.7282 5.32091C55.4656 5.03874 55.0818 4.8775 54.6173 4.8775ZM65.2216 9.49301C64.7368 9.39223 64.2318 9.33177 63.7471 9.33177C62.5553 9.33177 61.4646 9.59378 60.5557 10.1178C59.6467 10.6418 58.9196 11.3674 58.455 12.2744C57.9702 13.2015 57.7279 14.2698 57.7279 15.4992C57.7279 16.5674 57.9702 17.5147 58.4348 18.3814C58.8994 19.2279 59.5457 19.9132 60.4143 20.3767C61.2424 20.8403 62.212 21.0822 63.3027 21.0822C64.555 21.0822 65.6255 20.8201 66.4739 20.3364L66.4941 20.3163V17.8977L66.3931 17.9783C66.0093 18.2605 65.5649 18.5023 65.1206 18.6434C64.656 18.8046 64.2318 18.8853 63.8683 18.8853C62.8179 18.8853 61.9898 18.5829 61.404 17.9178C60.7981 17.2729 60.4951 16.386 60.4951 15.2775C60.4951 14.1287 60.7981 13.2217 61.4242 12.5566C62.0504 11.8915 62.8785 11.5488 63.8885 11.5488C64.7368 11.5488 65.6053 11.831 66.3931 12.3953L66.4941 12.476V9.91626L66.4739 9.89611C66.1305 9.75502 65.7467 9.59378 65.2216 9.49301ZM73.8868 9.41239C73.2404 9.41239 72.6345 9.61394 72.1093 10.0372C71.6649 10.4 71.362 10.924 71.0994 11.5488H71.0792V9.59378H68.4534V20.7597H71.0792V15.0558C71.0792 14.0884 71.2812 13.2822 71.7255 12.6977C72.1699 12.093 72.7355 11.7907 73.4222 11.7907C73.6646 11.7907 73.907 11.8511 74.21 11.8915C74.4928 11.9721 74.6947 12.0527 74.8361 12.1535L74.9371 12.2341V9.61394L74.8765 9.59378C74.6947 9.47285 74.3312 9.41239 73.8868 9.41239ZM81.0371 9.35192C79.1991 9.35192 77.7245 9.89611 76.6944 10.9643C75.6441 12.0325 75.1391 13.5039 75.1391 15.3581C75.1391 17.0915 75.6643 18.5023 76.6742 19.5302C77.6841 20.538 79.0577 21.062 80.7745 21.062C82.5722 21.062 84.0063 20.5178 85.0365 19.4294C86.0868 18.3411 86.5918 16.8899 86.5918 15.0961C86.5918 13.3225 86.107 11.9116 85.1173 10.8837C84.1679 9.8558 82.7742 9.35192 81.0371 9.35192ZM83.1378 17.938C82.653 18.5628 81.8855 18.8651 80.9361 18.8651C79.9868 18.8651 79.2192 18.5628 78.6739 17.8977C78.1285 17.2729 77.8659 16.3659 77.8659 15.217C77.8659 14.0279 78.1487 13.1209 78.6739 12.476C79.2192 11.831 79.9666 11.5085 80.9159 11.5085C81.8451 11.5085 82.5722 11.8108 83.0974 12.4356C83.6226 13.0604 83.9053 13.9674 83.9053 15.1566C83.8649 16.3659 83.6428 17.3132 83.1378 17.938ZM92.4494 14.2294C91.6212 13.8868 91.0961 13.6248 90.8537 13.4031C90.6517 13.2015 90.5507 12.9194 90.5507 12.5566C90.5507 12.2542 90.6719 11.9519 90.9749 11.7504C91.2779 11.5488 91.6212 11.448 92.1262 11.448C92.5706 11.448 93.0351 11.5287 93.4795 11.6496C93.9239 11.7705 94.3279 11.9519 94.651 12.1938L94.752 12.2744V9.81549L94.6914 9.79533C94.3884 9.6744 93.9845 9.55347 93.4997 9.4527C93.0149 9.37208 92.5706 9.33177 92.207 9.33177C90.9547 9.33177 89.9245 9.63409 89.1166 10.2992C88.3087 10.924 87.9249 11.7705 87.9249 12.7581C87.9249 13.2822 88.0057 13.7457 88.1875 14.1287C88.3692 14.5116 88.6318 14.8744 88.9954 15.1767C89.359 15.4589 89.8841 15.7814 90.6113 16.0837C91.2173 16.3457 91.6818 16.5473 91.9646 16.7085C92.2474 16.8698 92.4292 17.0511 92.5706 17.1922C92.6716 17.3535 92.7322 17.555 92.7322 17.817C92.7322 18.5628 92.1666 18.9256 91.0153 18.9256C90.5709 18.9256 90.1063 18.8449 89.561 18.6636C89.0156 18.4822 88.5106 18.2201 88.0865 17.9178L87.9855 17.8372V20.3969L88.0461 20.417C88.4298 20.5984 88.8944 20.7194 89.46 20.8605C90.0255 20.9612 90.5305 21.0418 90.9749 21.0418C92.3282 21.0418 93.4391 20.7395 94.2269 20.0744C95.0348 19.4294 95.459 18.6031 95.459 17.5349C95.459 16.7891 95.257 16.124 94.8126 15.6201C94.2269 15.1364 93.4997 14.6325 92.4494 14.2294ZM102.387 9.35192C100.549 9.35192 99.0745 9.89611 98.0444 10.9643C97.0143 12.0325 96.4891 13.5039 96.4891 15.3581C96.4891 17.0915 97.0143 18.5023 98.0242 19.5302C99.0341 20.538 100.408 21.062 102.125 21.062C103.922 21.062 105.356 20.5178 106.386 19.4294C107.437 18.3411 107.942 16.8899 107.942 15.0961C107.942 13.3225 107.457 11.9116 106.467 10.8837C105.518 9.8558 104.124 9.35192 102.387 9.35192ZM104.468 17.938C103.983 18.5628 103.215 18.8651 102.266 18.8651C101.296 18.8651 100.549 18.5628 100.004 17.8977C99.4583 17.2729 99.1957 16.3659 99.1957 15.217C99.1957 14.0279 99.4785 13.1209 100.004 12.476C100.549 11.831 101.296 11.5085 102.246 11.5085C103.155 11.5085 103.902 11.8108 104.427 12.4356C104.952 13.0604 105.235 13.9674 105.235 15.1566C105.235 16.3659 104.973 17.3132 104.468 17.938ZM121.98 11.7504V9.59378H119.334V6.28836L119.253 6.30851L116.748 7.05425L116.688 7.0744V9.59378H112.729V8.18293C112.729 7.53797 112.89 7.03409 113.173 6.71161C113.456 6.38913 113.88 6.22789 114.405 6.22789C114.769 6.22789 115.153 6.30851 115.577 6.48991L115.678 6.55037V4.27285L115.617 4.2527C115.254 4.13177 114.769 4.05115 114.143 4.05115C113.355 4.05115 112.668 4.23254 112.042 4.53487C111.416 4.8775 110.951 5.34107 110.608 5.96588C110.265 6.57053 110.083 7.2558 110.083 8.04185V9.59378H108.245V11.7302H110.083V20.7597H112.729V11.7504H116.688V17.4946C116.688 19.8527 117.799 21.0418 120.021 21.0418C120.384 21.0418 120.768 20.9814 121.131 20.9209C121.515 20.8403 121.798 20.7395 121.96 20.6589L121.98 20.6387V18.4822L121.879 18.5628C121.717 18.6636 121.576 18.7442 121.333 18.8046C121.131 18.8651 120.95 18.8853 120.808 18.8853C120.283 18.8853 119.92 18.7643 119.657 18.462C119.415 18.1798 119.293 17.7163 119.293 17.031V11.7504H121.98Z"
                      fill="#737373"
                    />
                    <path d="M0 0H12.3818V12.355H0V0Z" fill="#F25022" />
                    <path
                      d="M13.6743 0H26.0561V12.355H13.6743V0Z"
                      fill="#7FBA00"
                    />
                    <path d="M0 13.645H12.3818V26H0V13.645Z" fill="#00A4EF" />
                    <path
                      d="M13.6743 13.645H26.0561V26H13.6743V13.645Z"
                      fill="#FFB900"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width={122} height={26} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="w-full flex-1">
              <div className="flex items-center justify-center flex-1 h-full px-6 py-9 cursor-pointer hover:bg-gray-100 bg-white shadow">
                <svg
                  className="w-20 h-8 rounded-lg"
                  width={84}
                  height={32}
                  viewBox="0 0 84 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M69.0639 30.64C77.0423 30.64 83.534 24.0432 83.534 15.936C83.534 7.824 77.0423 1.23199 69.0639 1.23199C61.0839 1.23199 54.5937 7.824 54.5937 15.936C54.5937 24.0432 61.0839 30.64 69.0639 30.64ZM69.0639 10.6928C71.9072 10.6928 74.2227 13.0448 74.2227 15.9344C74.2227 18.824 71.9056 21.1728 69.0623 21.1728C66.2174 21.1728 63.905 18.824 63.905 15.9328C63.905 13.04 66.2189 10.6896 69.0623 10.6896L69.0639 10.6928ZM14.4702 30.64C22.4486 30.64 28.9404 24.0432 28.9404 15.936C28.9404 7.824 22.4486 1.23199 14.4702 1.23199C6.49336 1.23199 0 7.824 0 15.936C0 24.0432 6.49336 30.64 14.4702 30.64ZM14.4702 10.6928C17.3151 10.6928 19.6291 13.0448 19.6291 15.9344C19.6291 18.824 17.3151 21.1728 14.4702 21.1728C11.6269 21.1728 9.31449 18.824 9.31449 15.9328C9.31449 13.04 11.6285 10.6896 14.4702 10.6896V10.6928ZM41.7591 10.3616L37.3166 1.42399H26.9149L36.6303 20.976V30.1808H46.8894V20.976L56.6049 1.42399H46.1984L41.7607 10.3616H41.7591Z"
                    fill="#EE2E24"
                  />
                </svg>
              </div>
            </div>
            <div className="w-full flex-1">
              <div className="flex items-center justify-center flex-1 h-full px-6 py-9 cursor-pointer hover:bg-gray-100 bg-white shadow">
                <svg
                  className="w-28 h-7 rounded-lg"
                  width={120}
                  height={28}
                  viewBox="0 0 120 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path
                      d="M42.7048 9.95924V11.5461H42.7535C43.3267 10.6965 44.2782 9.69594 46.3874 9.69594C48.0284 9.69594 49.2871 10.528 49.8266 11.7848H49.8753C50.3361 11.1494 50.8643 10.6684 51.4563 10.3279C52.1568 9.92413 52.9361 9.69243 53.9176 9.69243C56.1392 9.69243 58.1061 11.1318 58.1061 14.7618V21.6463H54.7193V15.2428C54.7193 13.4032 54.0525 12.3395 52.6663 12.3395C51.6511 12.3395 50.913 12.9784 50.6321 13.7648C50.5347 14.0351 50.4897 14.4037 50.4897 14.7127V21.6498H47.103V14.983C47.103 13.4208 46.4624 12.336 45.0949 12.336C44.001 12.336 43.3154 13.1434 43.0344 13.835C42.9146 14.1299 42.8771 14.4704 42.8771 14.7899V21.6463H39.4866V9.95924H42.7048ZM75.5866 9.95924V12.1639H75.6802C76.3021 10.4788 77.7782 9.69594 79.0744 9.69594C79.4004 9.69594 79.5802 9.72052 79.8424 9.76966V12.831C79.5315 12.7888 79.243 12.7467 78.8384 12.7467C77.3699 12.7467 76.3471 13.5471 76.0886 14.8004C76.0324 15.0602 76.0137 15.3411 76.0137 15.6641V21.6498H72.537V9.95924H75.5866ZM84.5629 6.08698V9.76615H87.5V12.7432H84.5629V17.135C84.5629 18.5569 84.9487 19.245 86.0951 19.245C86.6346 19.245 87.0317 19.1818 87.3764 19.101L87.4213 21.569C86.9605 21.7305 85.979 21.906 84.9825 21.906C83.8098 21.906 82.832 21.5234 82.2364 20.9301C81.5545 20.2525 81.2398 19.1431 81.2398 17.5633V6.08698H84.5629ZM37.1264 21.6463H33.7547V6.08698H37.1264V21.6463ZM28.1352 17.4721C28.1352 17.6862 28.1164 17.9109 28.0528 18.104C27.7905 18.915 26.8951 19.5995 25.7787 19.5995C24.8459 19.5995 24.1041 19.1045 24.1041 18.0548C24.1041 16.4505 25.9923 16.0046 28.1389 16.0151V17.4721H28.1352ZM31.5032 14.6741C31.5032 12.0235 30.2968 9.69594 26.217 9.69594C24.1228 9.69594 22.4594 10.2471 21.5528 10.7386L22.2159 12.8661C23.0439 12.3746 24.3663 11.9709 25.6176 11.9709C27.6894 11.9673 28.0265 13.0697 28.0265 13.7753V13.9438C23.5122 13.9368 20.6612 15.4008 20.6612 18.3848C20.6612 20.2069 22.111 21.9131 24.6361 21.9131C26.1908 21.9131 27.4871 21.3338 28.2663 20.4035H28.3412C28.3412 20.4035 28.8582 22.4221 31.698 21.6498C31.5481 20.8072 31.4994 19.912 31.4994 18.8342V14.6741H31.5032ZM3.72388 6.08698C4.07229 7.73348 5.06133 12.515 5.06133 12.515C5.47718 14.481 5.85931 16.5417 6.14778 18.1707H6.20023C6.4812 16.4399 6.92327 14.8005 7.39532 12.7713L9.06245 6.08698H12.7526L14.3111 12.9433C14.7195 14.8496 15.0454 16.3206 15.3039 18.0935H15.3526C15.6336 16.303 16.0007 14.7724 16.4016 12.8134L17.9001 6.08698H21.4404L17.0534 21.6463C14.2586 22.2185 13.1872 21.1653 12.8051 19.4942C12.4229 17.8196 11.6737 14.6354 11.6737 14.6354C11.2878 12.8906 10.9881 11.6619 10.7783 9.87147H10.7258C10.4261 11.6444 10.1114 12.8871 9.64688 14.6319L7.80742 21.6498C4.95269 22.1834 3.96365 21.3935 3.41668 19.2485C2.94464 17.4124 0 6.09049 0 6.09049H3.72388V6.08698ZM66.9175 17.4721C66.9175 17.6862 66.8988 17.9109 66.8351 18.104C66.5728 18.915 65.6775 19.5995 64.561 19.5995C63.6282 19.5995 62.8864 19.1045 62.8864 18.0548C62.8864 16.4505 64.7746 16.0046 66.9212 16.0151V17.4721H66.9175ZM70.2855 14.6741C70.2855 12.0235 69.0791 9.69594 64.9994 9.69594C62.9051 9.69594 61.2418 10.2471 60.3351 10.7386L60.9982 12.8661C61.8262 12.3746 63.1487 11.9709 64.3999 11.9709C66.4679 11.9673 66.8089 13.0697 66.8089 13.7753V13.9438C62.2982 13.9368 59.4473 15.4008 59.4473 18.3848C59.4473 20.2069 60.9008 21.9131 63.4221 21.9131C64.9731 21.9131 66.2731 21.3338 67.0486 20.4035H67.1273C67.1273 20.4035 67.6443 22.4221 70.484 21.6498C70.3342 20.8072 70.2855 19.912 70.2855 18.8342V14.6741Z"
                      fill="#041E42"
                    />
                    <path
                      d="M101.168 16.2875C101.5 16.8557 101.478 17.4899 101.123 17.7795L94.9912 21.999C94.3527 22.3619 93.3967 21.922 92.8552 21.0018C92.31 20.078 92.4071 19.0479 93.0457 18.685L99.8347 15.5837C100.26 15.4224 100.835 15.7193 101.168 16.2875ZM109.238 16.2875C109.574 15.7193 110.145 15.426 110.571 15.58L117.364 18.6813C118.002 19.0443 118.096 20.0744 117.554 20.9982C117.009 21.9183 116.049 22.3545 115.414 21.9953L109.283 17.7759C108.931 17.4899 108.905 16.8521 109.238 16.2875ZM105.201 18.575C105.869 18.575 106.418 18.9123 106.493 19.3559L107.154 26.6803C107.154 27.4061 106.291 28 105.205 28C104.122 28 103.255 27.4061 103.255 26.6803L103.913 19.3559C103.987 18.9123 104.536 18.575 105.201 18.575ZM109.283 10.2241L115.414 6.00105C116.049 5.63812 117.009 6.07436 117.554 6.99817C118.096 7.92197 118.002 8.95208 117.364 9.315L110.571 12.42C110.145 12.574 109.57 12.2807 109.238 11.7125C108.905 11.1443 108.931 10.5101 109.283 10.2241ZM99.8347 12.42L93.0457 9.315C92.4108 8.95208 92.3137 7.92197 92.8552 6.99817C93.3967 6.07436 94.3564 5.63812 94.9912 6.00105L101.123 10.2241C101.478 10.5064 101.5 11.1443 101.168 11.7125C100.835 12.2807 100.26 12.574 99.8347 12.42ZM103.913 8.64415L103.255 1.31972C103.255 0.593873 104.118 0 105.205 0C106.291 0 107.154 0.593873 107.154 1.31972L106.493 8.64415C106.418 9.08405 105.869 9.42498 105.201 9.42498C104.536 9.42498 103.987 9.08405 103.913 8.64415ZM119.212 21.9696V21.7863H119.38C119.436 21.7863 119.473 21.823 119.473 21.878C119.473 21.9293 119.436 21.9696 119.38 21.9696H119.212ZM119.074 22.3032C119.074 22.3216 119.089 22.3399 119.111 22.3399H119.182C119.201 22.3399 119.22 22.3216 119.22 22.3032V22.0943H119.335L119.429 22.3142C119.436 22.3289 119.447 22.3399 119.462 22.3399H119.548C119.574 22.3399 119.593 22.3142 119.582 22.2886C119.548 22.2226 119.515 22.1529 119.481 22.0833C119.537 22.0649 119.623 22.01 119.623 21.878C119.623 21.7387 119.507 21.658 119.391 21.658H119.111C119.093 21.658 119.074 21.6764 119.074 21.6947V22.3032ZM118.771 21.999C118.771 21.702 119.018 21.4601 119.32 21.4601C119.623 21.4601 119.869 21.6983 119.869 21.999C119.869 22.2959 119.627 22.5378 119.32 22.5378C119.014 22.5378 118.771 22.2959 118.771 21.999ZM118.641 21.999C118.641 22.3655 118.943 22.6661 119.32 22.6661C119.694 22.6661 120 22.3655 120 21.999C120 21.6324 119.694 21.3318 119.32 21.3318C118.943 21.3318 118.641 21.6324 118.641 21.999Z"
                      fill="#FFC124"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width={120} height={28} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="w-full flex-1">
              <div className="flex items-center justify-center flex-1 h-full px-6 py-9 cursor-pointer hover:bg-gray-100 bg-white shadow">
                <svg
                  width={104}
                  height={33}
                  viewBox="0 0 104 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.5261 23.321C30.3645 22.9308 30.2131 22.5206 30.0515 22.1704L29.3042 20.4994L29.2739 20.4694C27.0524 15.6666 24.6793 10.7838 22.1649 5.98099L22.0639 5.78087C21.8115 5.3106 21.559 4.7903 21.2965 4.31002C20.9734 3.73969 20.6603 3.12933 20.1453 2.549C19.6433 1.94178 19.0115 1.45255 18.2956 1.11662C17.5796 0.780697 16.7973 0.606445 16.0051 0.606445C15.2129 0.606445 14.4306 0.780697 13.7147 1.11662C12.9987 1.45255 12.3669 1.94178 11.8649 2.549C11.3903 3.12933 11.0369 3.73969 10.7137 4.31002C10.4613 4.83032 10.2088 5.34062 9.94629 5.81089L9.84531 6.011C7.37129 10.8138 4.95786 15.6966 2.73629 20.4994L2.6757 20.5594C2.45355 21.0797 2.191 21.62 1.93855 22.2004C1.77698 22.5506 1.61541 22.9308 1.45384 23.351C1.01764 24.4515 0.878346 25.6455 1.04969 26.8155C1.22103 27.9855 1.6971 29.0911 2.43097 30.0233C3.16484 30.9555 4.13119 31.6821 5.23477 32.1316C6.33836 32.581 7.54109 32.7378 8.72443 32.5864C9.85891 32.4384 10.9513 32.064 11.9356 31.4858C13.2483 30.7553 14.5106 29.6947 15.9243 28.1638C17.3381 29.6947 18.6306 30.7553 19.9131 31.4958C21.1463 32.213 22.5429 32.6089 23.9725 32.6464C25.6279 32.6532 27.2299 32.0664 28.4827 30.9942C29.7356 29.922 30.5546 28.4369 30.7886 26.813C31.0591 25.6461 30.9676 24.4255 30.5261 23.311V23.321ZM16.0253 24.982C14.2884 22.7807 13.1575 20.7595 12.7737 19.0285C12.6148 18.3871 12.5805 17.7215 12.6728 17.0674C12.7434 16.5571 12.9353 16.1068 13.1979 15.7266C13.8037 14.8561 14.864 14.3158 16.0253 14.3158C16.5768 14.2991 17.1238 14.4184 17.6173 14.6629C18.1108 14.9074 18.5353 15.2694 18.8528 15.7166C19.1153 16.1169 19.3072 16.5571 19.3678 17.0674C19.4687 17.6477 19.4284 18.3181 19.2668 19.0285C18.8831 20.7295 17.7521 22.7707 16.0253 24.982ZM28.8902 26.4628C28.7755 27.2873 28.4447 28.0675 27.9309 28.7258C27.4171 29.3842 26.7382 29.8976 25.9618 30.215C25.1943 30.5352 24.3461 30.6253 23.5181 30.5352C22.7102 30.4351 21.9024 30.175 21.0743 29.6947C19.6995 28.8527 18.4632 27.8066 17.4087 26.5929C19.5293 23.9914 20.8118 21.62 21.2965 19.5088C21.5287 18.5082 21.559 17.6077 21.4581 16.7772C21.332 15.9901 21.0357 15.2392 20.5896 14.576C20.0803 13.8568 19.4004 13.2727 18.6098 12.8749C17.8192 12.4771 16.9421 12.2778 16.0556 12.2946C14.1875 12.2946 12.5213 13.1551 11.5115 14.566C11.0569 15.2275 10.7631 15.9844 10.6532 16.7772C10.5219 17.6177 10.5522 18.5483 10.8147 19.5088C11.2994 21.62 12.6122 24.0214 14.7025 26.6129C13.6659 27.8498 12.4267 28.9051 11.0369 29.7347C10.1987 30.215 9.401 30.4652 8.59315 30.5652C7.33684 30.7247 6.06779 30.3864 5.06183 29.6238C4.05588 28.8612 3.39433 27.7361 3.221 26.4929C3.12002 25.6924 3.1907 24.8919 3.51384 23.9914C3.61482 23.6712 3.76629 23.351 3.92786 22.9708C4.15002 22.4505 4.41257 21.9102 4.66502 21.3699L4.70541 21.2999C6.88659 16.5271 9.26972 11.6543 11.7437 6.88151L11.8447 6.68139C12.0972 6.20111 12.3496 5.69082 12.6122 5.21054C12.8747 4.70024 13.1575 4.20996 13.521 3.80973C13.8357 3.43753 14.2288 3.13821 14.6729 2.93284C15.1169 2.72746 15.6009 2.62103 16.0909 2.62103C16.581 2.62103 17.065 2.72746 17.509 2.93284C17.953 3.13821 18.3462 3.43753 18.6609 3.80973C19.0143 4.20996 19.3072 4.70024 19.5697 5.21054C19.8222 5.69082 20.0746 6.21112 20.3372 6.68139L20.4382 6.88151C22.9021 11.6543 25.2852 16.5271 27.5068 21.2999L27.5371 21.3299C27.7996 21.8502 28.0218 22.4305 28.2742 22.9308C28.4358 23.321 28.5974 23.6312 28.6983 23.9614C28.8902 24.8619 28.9912 25.6624 28.8902 26.4628ZM42.9467 24.7619C42.1858 24.7729 41.4321 24.614 40.7416 24.297C40.0511 23.9801 39.4415 23.5131 38.958 22.9308C37.8715 21.69 37.2948 20.0902 37.3423 18.4482C37.3256 16.7704 37.9209 15.1431 39.0185 13.8656C39.5263 13.2758 40.1583 12.8036 40.8701 12.482C41.582 12.1605 42.3563 11.9975 43.1385 12.0045C43.8746 11.9845 44.6037 12.1504 45.2573 12.4864C45.9109 12.8225 46.4675 13.3177 46.8748 13.9256L46.9758 12.3547H49.9244V24.4417H46.9657L46.8647 22.6807C46.4448 23.3297 45.8644 23.8616 45.1787 24.2258C44.493 24.5901 43.7246 24.7746 42.9467 24.7619ZM43.7141 21.8802C44.2998 21.8802 44.8148 21.7201 45.2995 21.4299C45.7438 21.1097 46.1074 20.6895 46.3901 20.1792C46.6426 19.6689 46.7738 19.0586 46.7738 18.3782C46.8132 17.7872 46.6971 17.1963 46.4369 16.6631C46.1767 16.1299 45.7813 15.6728 45.2894 15.3364C44.8168 15.0446 44.271 14.8899 43.7141 14.8899C43.1572 14.8899 42.6115 15.0446 42.1388 15.3364C41.6945 15.6566 41.331 16.0768 41.0482 16.5871C40.7812 17.1499 40.6498 17.7665 40.6645 18.3882C40.6252 18.9791 40.7412 19.5701 41.0014 20.1032C41.2616 20.6364 41.657 21.0935 42.1489 21.4299C42.6235 21.7201 43.1385 21.8802 43.7141 21.8802ZM54.9734 9.09279C54.9734 9.44299 54.9129 9.76318 54.7513 10.0233C54.5897 10.2735 54.3676 10.5036 54.0747 10.6637C53.7819 10.8238 53.4688 10.8838 53.1457 10.8838C52.8226 10.8838 52.4994 10.8238 52.2066 10.6637C51.9296 10.5109 51.6967 10.2905 51.53 10.0233C51.3736 9.73829 51.2969 9.41704 51.3079 9.09279C51.3079 8.73258 51.3785 8.41239 51.53 8.16225C51.6916 7.86208 51.9238 7.68197 52.2066 7.52188C52.4994 7.36179 52.8125 7.29175 53.1457 7.29175C53.4671 7.28441 53.785 7.35984 54.0682 7.51067C54.3514 7.6615 54.5902 7.88256 54.7614 8.15224C54.9083 8.44396 54.9811 8.76684 54.9734 9.09279ZM51.5401 24.4017V12.3347H54.7513V24.4217H51.53L51.5401 24.4017ZM63.3346 15.4965V15.5365C63.1831 15.4665 62.9812 15.4365 62.8297 15.4064C62.6278 15.3664 62.4662 15.3664 62.2743 15.3664C61.3756 15.3664 60.699 15.6266 60.2547 16.1669C59.77 16.7172 59.5479 17.4876 59.5479 18.4782V24.4117H56.3266V12.3247H59.2853L59.3863 14.1557C59.7094 13.5153 60.0931 13.0351 60.6384 12.6749C61.1808 12.3249 61.8194 12.1501 62.4662 12.1746C62.6984 12.1746 62.9206 12.1946 63.1125 12.2346C63.2134 12.2646 63.274 12.2646 63.3346 12.2946V15.4965ZM64.6272 24.4017V7.37179H67.8383V13.8756C68.2928 13.2952 68.8078 12.845 69.454 12.4948C70.4772 11.9977 71.6395 11.8567 72.7534 12.0945C73.8673 12.3323 74.8679 12.9351 75.5936 13.8055C76.6825 15.0488 77.2593 16.6527 77.2093 18.2981C77.226 19.9759 76.6307 21.6032 75.533 22.8808C75.0253 23.4705 74.3933 23.9428 73.6815 24.2643C72.9696 24.5858 72.1953 24.7489 71.4131 24.7418C70.677 24.7618 69.9479 24.596 69.2943 24.2599C68.6407 23.9238 68.0841 23.4286 67.6768 22.8207L67.5758 24.3916L64.6272 24.4217V24.4017ZM70.8375 21.8802C71.4131 21.8802 71.928 21.7201 72.4128 21.4299C72.8571 21.1097 73.2206 20.6895 73.5033 20.1792C73.7659 19.6689 73.8871 19.0586 73.8871 18.3782C73.8871 17.7078 73.7659 17.0974 73.5033 16.5871C73.2382 16.0951 72.8656 15.6678 72.4128 15.3364C71.9401 15.0446 71.3944 14.8899 70.8375 14.8899C70.2806 14.8899 69.7348 15.0446 69.2622 15.3364C68.8078 15.6566 68.4543 16.0768 68.1615 16.5871C67.8944 17.1499 67.7631 17.7665 67.7778 18.3882C67.7384 18.9791 67.8545 19.5701 68.1147 20.1032C68.3749 20.6364 68.7702 21.0935 69.2622 21.4299C69.7368 21.7201 70.2518 21.8802 70.8375 21.8802ZM78.4211 24.4117V12.3247H81.3798L81.4808 13.8956C81.8526 13.2934 82.38 12.8006 83.0085 12.4681C83.637 12.1357 84.3437 11.9756 85.0555 12.0045C85.8695 11.9905 86.6696 12.2147 87.3557 12.649C88.0418 13.0832 88.5835 13.7082 88.9129 14.4459C89.2664 15.2063 89.4582 16.1469 89.4582 17.1975V24.4417H86.237V17.6177C86.237 16.7772 86.0451 16.1169 85.6614 15.6266C85.2776 15.1463 84.7526 14.8861 84.0861 14.8861C83.6014 14.8861 83.1773 14.9862 82.8036 15.2063C82.4502 15.4365 82.1574 15.7266 81.9352 16.1369C81.7106 16.5516 81.5992 17.0172 81.6121 17.4876V24.4117H78.4211ZM91.0638 24.4117V7.36179H94.2851V13.8656C94.7214 13.282 95.289 12.8072 95.9428 12.4789C96.5967 12.1507 97.3187 11.9779 98.0517 11.9745C98.8126 11.9634 99.5663 12.1223 100.257 12.4393C100.947 12.7563 101.557 13.2232 102.04 13.8055C103.122 15.0488 103.694 16.6477 103.646 18.2881C103.664 19.966 103.068 21.5936 101.97 22.8708C101.462 23.4605 100.83 23.9327 100.118 24.2543C99.4063 24.5758 98.632 24.7388 97.8497 24.7318C97.1136 24.7518 96.3845 24.586 95.7309 24.2499C95.0773 23.9138 94.5207 23.4186 94.1134 22.8107L94.0226 24.3816L91.0638 24.4117ZM97.3044 21.8802C97.8901 21.8802 98.4051 21.7201 98.8797 21.4299C99.3341 21.1097 99.6876 20.6895 99.9804 20.1792C100.233 19.6689 100.364 19.0586 100.364 18.3782C100.403 17.7872 100.287 17.1963 100.027 16.6631C99.767 16.1299 99.3716 15.6728 98.8797 15.3364C98.4071 15.0446 97.8613 14.8899 97.3044 14.8899C96.7475 14.8899 96.2018 15.0446 95.7291 15.3364C95.2848 15.6566 94.9213 16.0768 94.6385 16.5871C94.3567 17.1449 94.2245 17.7651 94.2548 18.3882C94.2154 18.9791 94.3315 19.5701 94.5917 20.1032C94.8519 20.6364 95.2473 21.0935 95.7392 21.4299C96.2138 21.7201 96.6985 21.8802 97.3044 21.8802Z"
                    fill="#FF385C"
                  />
                </svg>
              </div>
            </div>
            <div className="w-full flex-1">
              <div className="flex items-center justify-center flex-1 h-full px-6 py-9 cursor-pointer hover:bg-gray-100 bg-white shadow">
                <img
                  src="https://i.ibb.co/XJGLJcy/Fed-Ex-Logo.png"
                  alt="Fed-Ex-Logo"
                />
              </div>
            </div>
            <div className="w-full flex-1">
              <div className="flex items-center justify-center flex-1 h-full px-6 py-9 cursor-pointer hover:bg-gray-100 bg-white shadow">
                <svg
                  width={121}
                  height={35}
                  viewBox="0 0 121 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M76.2002 10.31L74.2002 6.93001L70.6502 8.62001L68.6502 5.23001L65.1002 6.93001L63.1102 3.53001L59.5602 5.23001L57.5602 1.84001L54.0102 3.54001L52.0202 0.140015L48.4602 1.84001L40.9302 26.36L50.0802 29.16C50.4248 28.0548 51.1535 27.1094 52.1344 26.4945C53.1153 25.8797 54.2838 25.636 55.4287 25.8075C56.5736 25.979 57.6194 26.5544 58.3771 27.4296C59.1348 28.3049 59.5545 29.4223 59.5602 30.58V30.68C59.5802 31.12 59.5302 31.56 59.4002 32L68.7002 34.85L76.2002 10.31Z"
                    fill="#D61920"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M48.78 24.34C48.5487 24.3017 48.3388 24.1818 48.1884 24.002C48.0379 23.8222 47.9569 23.5944 47.96 23.36V11.36C47.9587 11.2283 47.9837 11.0976 48.0334 10.9757C48.0832 10.8538 48.1568 10.743 48.25 10.6499C48.3431 10.5568 48.4539 10.4832 48.5758 10.4334C48.6977 10.3836 48.8284 10.3586 48.96 10.36H57.6301C58.1409 10.3587 58.647 10.458 59.1194 10.6523C59.5919 10.8465 60.0215 11.132 60.3836 11.4923C60.7458 11.8525 61.0334 12.2806 61.2301 12.7521C61.4268 13.2236 61.5287 13.7291 61.53 14.24V23.36C61.5298 23.5073 61.497 23.6527 61.434 23.7858C61.371 23.9189 61.2794 24.0365 61.1658 24.1301C61.0521 24.2237 60.9191 24.2911 60.7764 24.3274C60.6336 24.3637 60.4846 24.368 60.34 24.34C60.1106 24.2996 59.903 24.1788 59.7546 23.9992C59.6061 23.8196 59.5265 23.593 59.53 23.36V14.25C59.53 13.7461 59.3299 13.2628 58.9736 12.9065C58.6172 12.5502 58.134 12.35 57.6301 12.35H55.7401V23.35C55.7408 23.484 55.7147 23.6167 55.6631 23.7404C55.6116 23.8641 55.5357 23.9762 55.44 24.07C55.3262 24.1829 55.1866 24.2664 55.0333 24.3135C54.88 24.3605 54.7176 24.3696 54.5601 24.34C54.3287 24.3017 54.1188 24.1818 53.9684 24.002C53.8179 23.8222 53.7369 23.5944 53.7401 23.36V12.35H49.96V23.35C49.961 23.4971 49.9294 23.6426 49.8677 23.7761C49.8059 23.9096 49.7155 24.0279 49.6028 24.1224C49.4901 24.217 49.3579 24.2855 49.2157 24.3231C49.0735 24.3607 48.9247 24.3665 48.78 24.34ZM63.2001 29.57C62.967 29.5315 62.7557 29.4101 62.605 29.2282C62.4544 29.0463 62.3745 28.8161 62.3801 28.58C62.3812 28.3176 62.4853 28.0662 62.67 27.88C62.8547 27.6916 63.1063 27.5837 63.37 27.58C64.22 27.58 64.9501 27.04 65.1901 26.23L66.2201 22.8L62.85 11.53C62.8099 11.4039 62.7951 11.2712 62.8066 11.1394C62.818 11.0076 62.8556 10.8794 62.917 10.7622C62.9783 10.645 63.0624 10.5411 63.1642 10.4566C63.266 10.3722 63.3835 10.3087 63.51 10.27C63.7619 10.2002 64.031 10.2297 64.2618 10.3525C64.4925 10.4753 64.6673 10.682 64.75 10.93L67.25 19.33L69.7901 10.93C69.9101 10.47 70.4201 10.16 70.9401 10.26L71.0101 10.27C71.5501 10.44 71.8501 11.01 71.6901 11.54L68.2201 23.1L67.1201 26.8C66.8732 27.5962 66.3837 28.2955 65.7201 28.8C65.045 29.3063 64.2239 29.58 63.3801 29.58C63.3199 29.5823 63.2596 29.5789 63.2001 29.57Z"
                    fill="#FEFEFE"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.0801 22.15H4.0401C4.56258 22.15 5.06365 21.9424 5.4331 21.573C5.80255 21.2035 6.0101 20.7025 6.0101 20.18V14.41C6.01142 14.1513 5.96176 13.8949 5.86398 13.6553C5.76619 13.4158 5.62218 13.1979 5.44018 13.0141C5.25817 12.8302 5.04174 12.684 4.80323 12.5838C4.56472 12.4836 4.3088 12.4313 4.0501 12.43H2.0801V22.13V22.15ZM0.8501 24.21C0.609987 24.1694 0.392309 24.0443 0.236414 23.8572C0.0805202 23.6702 -0.00330232 23.4335 9.96254e-05 23.19V5.26999C-0.00166797 5.13289 0.0239572 4.99681 0.0754726 4.86974C0.126988 4.74267 0.203356 4.62716 0.3001 4.52999C0.417145 4.40846 0.562256 4.31754 0.722676 4.26523C0.883095 4.21292 1.05391 4.20082 1.2201 4.22999C1.7201 4.32999 2.0801 4.74999 2.0801 5.25999V10.36H4.0401C4.57148 10.3587 5.0979 10.4622 5.58921 10.6646C6.08052 10.8671 6.52707 11.1645 6.90328 11.5397C7.27949 11.915 7.57797 12.3608 7.78162 12.8516C7.98527 13.3424 8.0901 13.8686 8.0901 14.4V20.17C8.08746 21.2407 7.66097 22.2667 6.90389 23.0238C6.14682 23.7809 5.12076 24.2074 4.0501 24.21H1.0401C0.973268 24.2139 0.906204 24.2106 0.8401 24.2L0.8501 24.21Z"
                    fill="#333545"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.14 12.35C15.0277 12.3304 14.914 12.3204 14.8 12.32C14.5406 12.3174 14.2832 12.3665 14.043 12.4645C13.8028 12.5626 13.5845 12.7076 13.4011 12.8911C13.2176 13.0745 13.0726 13.2928 12.9745 13.533C12.8765 13.7732 12.8273 14.0306 12.83 14.29V20.3C12.8287 20.5591 12.8787 20.8159 12.9773 21.0555C13.0758 21.2951 13.2209 21.5128 13.4041 21.696C13.5873 21.8792 13.805 22.0242 14.0446 22.1228C14.2842 22.2213 14.5409 22.2714 14.8 22.27C15.3225 22.27 15.8236 22.0625 16.193 21.693C16.5625 21.3236 16.77 20.8225 16.77 20.3V14.3C16.77 13.33 16.08 12.52 15.14 12.35ZM14.09 24.3C13.1524 24.1351 12.3032 23.6443 11.6921 22.9144C11.0811 22.1844 10.7474 21.262 10.75 20.31V14.3C10.7483 13.7681 10.8526 13.2412 11.0569 12.7502C11.2613 12.2591 11.5615 11.8137 11.94 11.44C12.3155 11.0646 12.7615 10.7672 13.2523 10.5647C13.7431 10.3621 14.2691 10.2586 14.8 10.26C15.8715 10.26 16.8991 10.6857 17.6567 11.4433C18.4144 12.201 18.84 13.2286 18.84 14.3V20.31C18.84 21.39 18.42 22.41 17.65 23.18C17.2761 23.5547 16.8318 23.8518 16.3427 24.0543C15.8536 24.2568 15.3294 24.3607 14.8 24.36C14.562 24.361 14.3245 24.341 14.09 24.3ZM25.89 12.36C25.7778 12.3404 25.664 12.3303 25.55 12.33C25.2906 12.3274 25.0332 12.3765 24.793 12.4745C24.5528 12.5726 24.3345 12.7176 24.1511 12.9011C23.9676 13.0845 23.8226 13.3028 23.7245 13.543C23.6265 13.7832 23.5773 14.0406 23.58 14.3V20.31C23.5787 20.5691 23.6287 20.8259 23.7273 21.0655C23.8258 21.3051 23.9709 21.5228 24.1541 21.706C24.3373 21.8892 24.555 22.0342 24.7946 22.1328C25.0342 22.2313 25.2909 22.2814 25.55 22.28C25.8091 22.2814 26.0659 22.2313 26.3055 22.1328C26.5451 22.0342 26.7628 21.8892 26.946 21.706C27.1292 21.5228 27.2742 21.3051 27.3728 21.0655C27.4713 20.8259 27.5213 20.5691 27.52 20.31V14.3C27.52 13.34 26.83 12.53 25.89 12.36ZM24.84 24.3C23.9043 24.133 23.0574 23.6413 22.4483 22.9115C21.8392 22.1818 21.507 21.2606 21.51 20.31V14.3C21.5116 13.7107 21.6418 13.1288 21.8915 12.5949C22.1412 12.0611 22.5043 11.5882 22.9557 11.2092C23.407 10.8302 23.9357 10.5543 24.5046 10.4007C25.0736 10.2472 25.6693 10.2196 26.25 10.32C27.1878 10.4826 28.038 10.971 28.6509 11.6991C29.2637 12.4272 29.5999 13.3483 29.6 14.3V20.31C29.6012 20.8442 29.4957 21.3733 29.2897 21.8661C29.0836 22.359 28.7811 22.8057 28.4 23.18C28.0261 23.5547 27.5818 23.8518 27.0927 24.0543C26.6036 24.2568 26.0794 24.3607 25.55 24.36C25.31 24.36 25.07 24.34 24.84 24.3ZM33.11 24.34C32.8699 24.2995 32.6522 24.1743 32.4963 23.9873C32.3404 23.8002 32.2566 23.5635 32.26 23.32V5.27004C32.26 4.99004 32.36 4.72004 32.56 4.53004C32.678 4.41359 32.8223 4.32733 32.9807 4.27858C33.1392 4.22983 33.307 4.22004 33.47 4.25004C33.97 4.33004 34.34 4.76004 34.34 5.27004V15.95L39.12 10.59C39.36 10.33 39.72 10.21 40.08 10.27C40.2615 10.3004 40.4316 10.3789 40.5725 10.4972C40.7134 10.6156 40.8201 10.7696 40.8813 10.9431C40.9426 11.1167 40.9562 11.3034 40.9208 11.484C40.8854 11.6646 40.8023 11.8325 40.68 11.97L37.07 16L40.8 22.83C40.8672 22.9452 40.9106 23.0727 40.9278 23.2049C40.945 23.3372 40.9355 23.4715 40.9 23.6C40.8614 23.7325 40.7962 23.8558 40.7086 23.9623C40.6209 24.0689 40.5125 24.1566 40.39 24.22C40.1783 24.3418 39.9302 24.3843 39.69 24.34C39.5406 24.3148 39.3986 24.2569 39.2742 24.1705C39.1497 24.084 39.0459 23.9712 38.97 23.84L35.61 17.66L34.33 19.07V23.32C34.33 23.5959 34.2204 23.8604 34.0254 24.0554C33.8304 24.2505 33.5658 24.36 33.29 24.36C33.22 24.36 33.16 24.36 33.09 24.34H33.11ZM78.92 24.33C78.3577 24.2358 77.8234 24.0173 77.3563 23.6903C76.8892 23.3633 76.501 22.9362 76.22 22.44C76.0826 22.197 76.0467 21.9095 76.12 21.64C76.2 21.38 76.37 21.16 76.6 21.02C76.8136 20.9034 77.061 20.8645 77.3 20.91C77.6 20.96 77.87 21.14 78.02 21.41C78.29 21.87 78.72 22.17 79.25 22.26C79.5233 22.3075 79.8037 22.2926 80.0704 22.2164C80.3371 22.1402 80.5831 22.0047 80.79 21.82C81.19 21.45 81.39 20.92 81.34 20.4C81.3289 20.1335 81.2552 19.8733 81.1249 19.6405C80.9947 19.4077 80.8114 19.2089 80.59 19.06L77.79 17.07C77.3338 16.7497 76.9539 16.3327 76.6774 15.8487C76.4008 15.3647 76.2344 14.8257 76.19 14.27C76.1538 13.7094 76.2458 13.1479 76.4589 12.6281C76.672 12.1083 77.0007 11.6439 77.42 11.27C77.8291 10.8897 78.3178 10.6053 78.8506 10.4376C79.3834 10.2698 79.9468 10.2228 80.5 10.3C81.68 10.5 82.64 11.18 83.19 12.14C83.3225 12.3799 83.357 12.6618 83.2861 12.9266C83.2153 13.1914 83.0446 13.4184 82.81 13.56C82.5983 13.6818 82.3502 13.7243 82.11 13.68C81.9606 13.6548 81.8186 13.5969 81.6942 13.5105C81.5697 13.424 81.4659 13.3112 81.39 13.18C81.2646 12.9679 81.0937 12.7861 80.8897 12.6478C80.6857 12.5095 80.4536 12.418 80.21 12.38C79.9609 12.3349 79.7046 12.3485 79.4616 12.4197C79.2186 12.4908 78.9955 12.6176 78.81 12.79C78.6289 12.9609 78.4876 13.1696 78.396 13.4011C78.3044 13.6327 78.2648 13.8815 78.28 14.13C78.3 14.62 78.58 15.1 79 15.38L81.8 17.33C82.2753 17.6628 82.6684 18.0998 82.9491 18.6076C83.2299 19.1153 83.3909 19.6805 83.42 20.26C83.4663 20.8368 83.3775 21.4165 83.1605 21.9529C82.9435 22.4893 82.6043 22.9677 82.17 23.35C81.7476 23.7425 81.243 24.036 80.6929 24.209C80.1428 24.3819 79.5611 24.4301 78.99 24.35L78.91 24.33H78.92ZM86.95 24.36C86.7098 24.3178 86.4921 24.1926 86.3349 24.0061C86.1777 23.8197 86.091 23.5839 86.09 23.34V5.29004C86.0887 5.15309 86.1147 5.01725 86.1665 4.89047C86.2183 4.76369 86.2948 4.64851 86.3917 4.55167C86.4885 4.45483 86.6037 4.37827 86.7305 4.32648C86.8572 4.27469 86.9931 4.2487 87.13 4.25004L87.33 4.26004C87.83 4.36004 88.17 4.77004 88.17 5.29004V10.39H90.14C90.6709 10.3887 91.1969 10.4923 91.6876 10.6949C92.1784 10.8974 92.6243 11.195 92.9997 11.5704C93.3751 11.9458 93.6726 12.3917 93.8752 12.8824C94.0777 13.3732 94.1813 13.8991 94.18 14.43V23.33C94.1809 23.481 94.1485 23.6304 94.0853 23.7675C94.022 23.9046 93.9294 24.0261 93.8139 24.1234C93.6985 24.2207 93.563 24.2915 93.4172 24.3306C93.2714 24.3698 93.1187 24.3764 92.97 24.35C92.47 24.26 92.11 23.83 92.11 23.32V14.42C92.11 14.1618 92.059 13.9061 91.9599 13.6677C91.8608 13.4292 91.7155 13.2127 91.5324 13.0306C91.3494 12.8484 91.1321 12.7043 90.8932 12.6064C90.6542 12.5084 90.3983 12.4587 90.14 12.46H88.17V23.33C88.1712 23.482 88.1386 23.6324 88.0748 23.7704C88.0109 23.9083 87.9173 24.0304 87.8007 24.1279C87.6841 24.2254 87.5473 24.2959 87.4003 24.3343C87.2532 24.3727 87.0994 24.3781 86.95 24.35V24.36ZM101.23 12.37C100.947 12.3186 100.655 12.3302 100.377 12.4042C100.099 12.4781 99.84 12.6124 99.6195 12.7976C99.3989 12.9828 99.2219 13.2144 99.101 13.4758C98.9801 13.7372 98.9183 14.022 98.92 14.31V20.32C98.9187 20.5783 98.9684 20.8342 99.0663 21.0732C99.1642 21.3121 99.3084 21.5294 99.4905 21.7124C99.6727 21.8955 99.8892 22.0408 100.128 22.1399C100.366 22.239 100.622 22.29 100.88 22.29C101.4 22.29 101.9 22.09 102.27 21.72C102.455 21.5372 102.602 21.3191 102.702 21.0787C102.801 20.8382 102.852 20.5803 102.85 20.32V14.3C102.85 13.34 102.17 12.52 101.22 12.36L101.23 12.37ZM100.17 24.29C99.2351 24.1251 98.3884 23.6355 97.7792 22.9073C97.17 22.1792 96.8374 21.2594 96.84 20.31V14.3C96.8401 13.7098 96.9692 13.1268 97.2183 12.5917C97.4674 12.0567 97.8304 11.5825 98.2819 11.2024C98.7334 10.8224 99.2625 10.5456 99.8322 10.3914C100.402 10.2373 100.998 10.2095 101.58 10.31C102.519 10.4729 103.371 10.9627 103.984 11.6929C104.597 12.4231 104.932 13.3466 104.93 14.3V20.31C104.93 20.8426 104.825 21.37 104.619 21.8611C104.412 22.3522 104.11 22.7972 103.73 23.17C103.271 23.6306 102.708 23.9731 102.088 24.1682C101.468 24.3633 100.81 24.4051 100.17 24.29Z"
                    fill="#333545"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M120.9 11.54C120.934 11.413 120.943 11.2805 120.926 11.1501C120.909 11.0197 120.866 10.8939 120.8 10.78C120.725 10.6587 120.626 10.5536 120.509 10.4712C120.392 10.3888 120.26 10.3306 120.12 10.3C119.862 10.2513 119.596 10.3028 119.374 10.444C119.153 10.5853 118.994 10.8056 118.93 11.06C118.93 11.11 117.81 15.62 116.93 19.05L116.91 19.12L116.89 19.05L114.89 11.07C114.852 10.8752 114.754 10.6969 114.611 10.5592C114.468 10.4215 114.286 10.3311 114.09 10.3C114.031 10.2883 113.971 10.2816 113.91 10.28C113.45 10.28 113.05 10.6 112.92 11.06C112.91 11.11 111.79 15.62 110.92 19.05L110.9 19.12L110.88 19.05C110.03 15.62 108.88 11.11 108.88 11.06C108.833 10.8686 108.731 10.695 108.588 10.5601C108.444 10.4252 108.264 10.3349 108.07 10.3C107.904 10.2706 107.732 10.283 107.572 10.3361C107.411 10.3893 107.267 10.4815 107.151 10.6044C107.035 10.7274 106.951 10.8773 106.907 11.0406C106.864 11.2039 106.861 11.3755 106.9 11.54L109.91 23.57C109.967 23.7905 110.095 23.9862 110.274 24.1271C110.452 24.268 110.672 24.3463 110.9 24.35C111.39 24.35 111.78 24.03 111.88 23.57L113.88 15.58L113.91 15.51L113.93 15.58C114.81 19.05 115.93 23.58 115.93 23.58C115.99 23.7962 116.117 23.9876 116.294 24.1262C116.47 24.2647 116.686 24.3432 116.91 24.35C117.141 24.3572 117.366 24.2829 117.547 24.1403C117.728 23.9976 117.853 23.7957 117.9 23.57L120.9 11.54Z"
                    fill="#333545"
                  />
                </svg>
              </div>
            </div>
            <div className="w-full flex-1">
              <div className="flex items-center justify-center flex-1 h-full px-6 py-9 cursor-pointer hover:bg-gray-100 bg-white shadow">
                <img
                  src="https://i.ibb.co/C72pSTh/Amazon-Logo.png"
                  alt="Amazon-Logo"
                />
              </div>
            </div>
            <div className="w-full flex-1">
              <div className="flex items-center justify-center flex-1 h-full px-6 py-9 cursor-pointer hover:bg-gray-100 bg-white shadow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
