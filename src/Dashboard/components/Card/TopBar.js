import React from "react";

const TopBar = () => {
  return (
    <>
      <section className="py-6 px-6 bg-white shadow-sm">
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
                  <p className="text-sm">Sumit Kumar</p>
                  <p className="text-sm text-gray-500">Developer</p>
                </div>
                <div className="mr-2">
                  <img
                    className="w-10 h-10 rounded-full object-cover object-right"
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
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
