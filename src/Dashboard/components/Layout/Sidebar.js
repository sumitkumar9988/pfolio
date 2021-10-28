import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout, getUserProfileAction } from './../../../redux/action/authAction'
import "./style.css";
import Loader from './../../../utils/loader'
import TopBar from "../Card/TopBar";
import SidebarItem from "../SidebarItem";
import SidebarItemList from "./SidebarItemList";


const Sidebar = (props) => {

  const dispatch = useDispatch();
  const history = useHistory();

  const [open, setOpen] = React.useState(false);
  const [sidebarItem, setItem] = React.useState(SidebarItemList);

  const { user, loading, error } = useSelector((state) => state.login);
  const { profile, loading: profileLoading, error: profileError } = useSelector((state) => state.getProfile);
  console.log("profile", profile)
  console.log("")
  console.log("profileError", profileError)


  useEffect(() => {
    dispatch(getUserProfileAction());
    console.log(user)
    if (!user) { dispatch(logout()) }
  }, [user]);

  const onflipSide = () => { setOpen(!open); };

  return (
    <div>
      {loading && <Loader />}
      {profileLoading && <Loader />}

      <body className="antialiased bg-body text-body font-body">
        <div>
          <div>
            <nav className="lg:hidden py-6 px-6 ">
              <div className="flex items-center justify-between">
                <p className="text-2xl font-semibold">
                  <img
                    src="https://res.cloudinary.com/sumit9988/image/upload/v1626467520/Peach_Abstract_Design_Brand_Letter_P_Logo_1_pp0dmw.svg"
                    alt="Pfolio"
                    width="40px"
                    height="40px"
                  />
                </p>
                <button
                  onClick={onflipSide}
                  className="navbar-burger flex items-center rounded focus:outline-none"
                >
                  <svg
                    className="text-white bg-red-400  block h-8 w-8 p-2 rounded"
                    viewbox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                  >
                    <title>Mobile menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                  </svg>
                </button>
              </div>
            </nav>
            {open ? (
              <div className=" lg:block navbar-menu relative z-30">
                <div
                  onClick={onflipSide}
                  className="navbar-backdrop fixed lg:hidden inset-0 bg-black opacity-10"
                ></div>
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-3/4 lg:w-80 sm:max-w-xs pt-6 pb-8 bg-white  overflow-y-auto">
                  <div className="flex w-full items-center px-6 pb-6 mb-6 lg:border-b border-blue-50">
                    <p className="text-xl flex item-center text-center font-semibold">
                      <img
                        src="https://res.cloudinary.com/sumit9988/image/upload/v1626467520/Peach_Abstract_Design_Brand_Letter_P_Logo_1_pp0dmw.svg"
                        alt="Pfolio"
                        width="45px"
                        height="45px"
                      />
                    </p>
                  </div>
                  <div className="px-4 pb-6">
                    <ul className="mb-8 text-sm font-medium">
                      {sidebarItem.map((item, i) => (
                        <SidebarItem item={item} />
                      ))}
                    </ul>
                  </div>
                </nav>
              </div>
            ) : null}
            <div className="hidden lg:block navbar-menu relative z-30">
              <div
                onClick={onflipSide}
                className="navbar-backdrop fixed lg:hidden inset-0 bg-gray-800 opacity-10"
              ></div>
              <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-3/4 lg:w-80 sm:max-w-xs pt-6 pb-8 bg-white border-r overflow-y-auto">
                <div className="flex w-full items-center px-6 pb-6 mb-6  border-blue-50">
                  <p className="text-xl flex item-center text-center font-semibold">
                    <img
                      src="https://res.cloudinary.com/sumit9988/image/upload/v1626467520/Peach_Abstract_Design_Brand_Letter_P_Logo_1_pp0dmw.svg"
                      alt="Pfolio"
                      width="45px"
                      height="45px"
                    />
                  </p>
                </div>
                <div className="px-4 pb-6">
                  <ul className="mb-8 text-sm font-medium">
                    {sidebarItem.map((item, i) => (
                      <SidebarItem item={item} />
                    ))}
                  </ul>
                </div>
              </nav>
            </div>
            <div className="mx-auto lg:ml-80 ">
              {profile && <TopBar name={profile.data.name} profession={profile.data.profession} image={profile.data.photo} />}
              <div className=" h-full">{props.children}</div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Sidebar;
