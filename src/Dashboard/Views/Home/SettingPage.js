import React from "react";
import { Link } from "react-router-dom";
const setting = () => {
  return (
    <section className="py-8 overflow-hidden">
      <div className="container px-4 mx-auto ">
        <div className="relative pt-14 bg-white  rounded">
          <button className="absolute top-0 right-0 mr-6 mt-7  ">
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
          <div className="px-6 text-center pb-4">
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
              <p className="text-sm font-medium">jane.thomas@shuffle.dev</p>
            </div>
            <div className="mb-6"></div>
          </div>
          <Link to="/home/profile/edit">
            <p className=" w-full py-4 text-center border-t text-base font-semibold font-rubik border-gray-100  transform hover:scale-110 duration-200 text-gray-500 hover:text-gray-800 ">
              Edit Profile
            </p>
          </Link>

          <Link to="/home/custom-domain">
            <p className=" w-full py-4 text-center border-t text-base font-semibold font-rubik border-gray-100  transform hover:scale-110 duration-200 text-gray-500 hover:text-gray-800 ">
              Custom Domain
            </p>
          </Link>
          <Link to="/home/theme">
            <p className=" w-full py-4 text-center border-t text-base font-semibold font-rubik border-gray-100  transform hover:scale-110 duration-200 text-gray-500 hover:text-gray-800 ">
              Change Theme
            </p>
          </Link>
          <Link to="/changepassword">
            <p className=" w-full py-4 text-center border-t text-base font-semibold font-rubik border-gray-100  transform hover:scale-110 duration-200 text-gray-500 hover:text-gray-800 ">
              Change Password
            </p>
          </Link>
          <p className=" w-full py-4 text-center border-t text-base font-semibold font-rubik border-gray-100  transform hover:scale-110 duration-200 text-gray-500 hover:text-gray-800 ">
            Logout
          </p>
        </div>
      </div>
    </section>
  );
};

export default setting;
