import React from "react";

const TopBar = ({name,profession,image}) => {
  return (
    <>
      <section className="py-6 px-6 bg-white ">
        <nav className="relative">
          <div className="flex items-center">
            <div className="flex items-center mr-auto"> </div>

            <ul className="flex lg:justify-end ml-auto mr-6">
              <li className="mr-6">
             
              </li>
              <li>
              
              </li>
            </ul>
            <div>
              <button className="flex items-center ">
                <div className="mr-3">
                  <p className="text-sm">{name}</p>
                  <p className="text-sm text-gray-500">{profession}</p>
                </div>
                <div className="mr-2">
                  <img
                    className="w-10 h-10 rounded-full object-cover object-right"
                    src={image}
                    alt=""
                  />
                </div>
              </button>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default TopBar;
