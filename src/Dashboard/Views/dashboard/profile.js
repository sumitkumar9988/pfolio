import React from "react";

const profile = () => {
  return (
    <div className="bg-white">
      <section className="py-8 ">
        <div className="container px-4 mx-auto ">
          <div className="relative pt-14 bg-white shadow rounded">
            <button className="absolute top-0 right-0 mr-6 mt-7  focus:outline-none">
              <svg
                className="h-3 w-3 text-white"
                viewBox="0 0 12 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 0.666504C5.26667 0.666504 4.66667 1.2665 4.66667 1.99984C4.66667 2.73317 5.26667 3.33317 6 3.33317C6.73333 3.33317 7.33333 2.73317 7.33333 1.99984C7.33333 1.2665 6.73333 0.666504 6 0.666504ZM1.33333 0.666504C0.6 0.666504 0 1.2665 0 1.99984C0 2.73317 0.6 3.33317 1.33333 3.33317C2.06667 3.33317 2.66667 2.73317 2.66667 1.99984C2.66667 1.2665 2.06667 0.666504 1.33333 0.666504ZM10.6667 0.666504C9.93333 0.666504 9.33333 1.2665 9.33333 1.99984C9.33333 2.73317 9.93333 3.33317 10.6667 3.33317C11.4 3.33317 12 2.73317 12 1.99984C12 1.2665 11.4 0.666504 10.6667 0.666504Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
            <img
              className="relative w-16 h-16 mb-4 mx-auto rounded-full object-cover object-right"
              src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
              alt=""
            />
            <div className="px-6 text-center">
              <h3 className="font-medium">Jane Thomas</h3>
              <p className="mb-6 text-sm text-gray-500">
                Designer &amp; Front-End Developer
              </p>
              <div className="flex items-center justify-center mb-6">
                <span className="mr-2">
                  <svg
                    width="18"
                    height="14"
                    viewBox="0 0 18 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.8332 0.333496H3.16656C2.50352 0.333496 1.86764 0.596888 1.3988 1.06573C0.929957 1.53457 0.666565 2.17045 0.666565 2.8335V11.1668C0.666565 11.8299 0.929957 12.4658 1.3988 12.9346C1.86764 13.4034 2.50352 13.6668 3.16656 13.6668H14.8332C15.4963 13.6668 16.1322 13.4034 16.601 12.9346C17.0698 12.4658 17.3332 11.8299 17.3332 11.1668V2.8335C17.3332 2.17045 17.0698 1.53457 16.601 1.06573C16.1322 0.596888 15.4963 0.333496 14.8332 0.333496ZM3.16656 2.00016H14.8332C15.0542 2.00016 15.2662 2.08796 15.4225 2.24424C15.5788 2.40052 15.6666 2.61248 15.6666 2.8335L8.9999 6.90016L2.33323 2.8335C2.33323 2.61248 2.42103 2.40052 2.57731 2.24424C2.73359 2.08796 2.94555 2.00016 3.16656 2.00016ZM15.6666 11.1668C15.6666 11.3878 15.5788 11.5998 15.4225 11.7561C15.2662 11.9124 15.0542 12.0002 14.8332 12.0002H3.16656C2.94555 12.0002 2.73359 11.9124 2.57731 11.7561C2.42103 11.5998 2.33323 11.3878 2.33323 11.1668V4.7335L8.56657 8.54183C8.69325 8.61497 8.83695 8.65347 8.98323 8.65347C9.12951 8.65347 9.27322 8.61497 9.3999 8.54183L15.6666 4.7335V11.1668Z"
                      fill="#382CDD"
                    ></path>
                  </svg>
                </span>
                <p className="text-sm">jane.thomas@shuffle.dev</p>
              </div>
              <div className="mb-6">
                <p className="inline-flex items-center justify-center mr-6 w-10 h-10 bg-gray-50 rounded-full">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 2.75V15.25C18 16.765 16.765 18 15.25 18H12.5V11H14.31C14.565 11 14.78 10.81 14.81 10.56L14.995 9.06C15.015 8.92 14.97 8.775 14.875 8.67C14.78 8.56 14.645 8.5 14.5 8.5H12.5V6.75C12.5 6.2 12.95 5.75 13.5 5.75H14.5C14.775 5.75 15 5.525 15 5.25V3.56C15 3.305 14.8 3.09 14.545 3.065C14.515 3.06 13.81 3 12.915 3C10.715 3 9.5 4.31 9.5 6.685V8.5H7.5C7.225 8.5 7 8.725 7 9V10.5C7 10.775 7.225 11 7.5 11H9.5V18H2.75C1.235 18 0 16.765 0 15.25V2.75C0 1.235 1.235 0 2.75 0H15.25C16.765 0 18 1.235 18 2.75Z"
                      fill="#3B5998"
                    ></path>
                  </svg>
                </p>
                <p className="inline-flex items-center justify-center mr-6 w-10 h-10 bg-gray-50 rounded-full">
                  <svg
                    width="14"
                    height="12"
                    viewBox="0 0 14 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.9063 1.435C13.808 1.33333 13.6567 1.30433 13.5277 1.36367L13.473 1.38867C13.4267 1.41 13.3803 1.43133 13.3337 1.45233C13.4693 1.236 13.577 1.00467 13.6513 0.765333C13.6927 0.633333 13.6477 0.489 13.5383 0.403667C13.429 0.318333 13.2783 0.309333 13.16 0.381667C12.7797 0.612667 12.4143 0.779 12.0367 0.895C11.4667 0.342 10.6903 0 9.83334 0C8.08434 0 6.66667 1.41767 6.66667 3.16667C6.66667 3.16833 6.66667 3.23433 6.66667 3.33333L6.33367 3.30667C3.09267 2.92333 2.17 0.743333 2.13167 0.649333C2.06967 0.492667 1.933 0.378333 1.768 0.344C1.60334 0.309 1.43234 0.360667 1.313 0.479667C1.247 0.546 0.666671 1.16 0.666671 2.33333C0.666671 3.16933 1.03934 3.84733 1.52167 4.37467C1.297 4.23767 1.166 4.12667 1.16267 4.12367C1.009 3.98967 0.789004 3.96167 0.606337 4.05433C0.424337 4.14733 0.317004 4.34167 0.335337 4.54533C0.341671 4.61567 0.483671 5.94967 2.02467 6.957L1.74367 7.008C1.57334 7.039 1.431 7.156 1.36767 7.31733C1.30467 7.479 1.32934 7.66133 1.43334 7.8C1.46834 7.847 2.11934 8.69333 3.533 9.18C2.778 9.43167 1.74067 9.66667 0.500004 9.66667C0.304004 9.66667 0.125671 9.78133 0.0446708 9.96C-0.0366625 10.1387 -0.00566249 10.3483 0.123671 10.4957C0.177337 10.5573 1.47834 12 4.83334 12C10.4043 12 13 6.82833 13 3.33333V3.16667C13 3.11733 12.9947 3.069 12.9927 3.02033C13.69 2.34633 13.9523 1.84067 13.965 1.81567C14.028 1.689 14.0047 1.53633 13.9063 1.435Z"
                      fill="#00ACEE"
                    ></path>
                  </svg>
                </p>
                <p className="inline-flex items-center justify-center w-10 h-10 bg-gray-50 rounded-full">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0)">
                      <path
                        d="M15.996 16V15.9993H16V10.1313C16 7.26065 15.382 5.04932 12.026 5.04932C10.4126 5.04932 9.32998 5.93465 8.88797 6.77398H8.84131V5.31732H5.6593V15.9993H8.97264V10.71C8.97264 9.31732 9.23664 7.97065 10.9613 7.97065C12.6606 7.97065 12.686 9.55998 12.686 10.7993V16H15.996Z"
                        fill="#0E76A8"
                      ></path>
                      <path
                        d="M0.264038 5.31787H3.58137V15.9999H0.264038V5.31787Z"
                        fill="#0E76A8"
                      ></path>
                      <path
                        d="M1.92133 0C0.860667 0 0 0.860667 0 1.92133C0 2.982 0.860667 3.86067 1.92133 3.86067C2.982 3.86067 3.84267 2.982 3.84267 1.92133C3.842 0.860667 2.98133 0 1.92133 0V0Z"
                        fill="#0E76A8"
                      ></path>
                    </g>
                  </svg>
                </p>
              </div>
            </div>
            <button className="block w-full py-4 border-t border-gray-50 text-xs text-gray-500 hover:text-gray-800 uppercase">
              View Profile
            </button>
            <button className="block w-full py-4 border-t border-gray-50 text-xs text-gray-500 hover:text-gray-800 uppercase">
              Basic Details
            </button>
            <button className="block w-full py-4 border-t border-gray-50 text-xs text-gray-500 hover:text-gray-800 uppercase">
              Edit Profile
            </button>
            <button className="block w-full py-4 border-t border-gray-50 text-xs text-gray-500 hover:text-gray-800 uppercase">
              Add Link
            </button>
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default profile;
