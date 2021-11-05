import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./../../../redux/action/authAction";
import { getprofile } from "./../../../redux/action/dashboardAction";
import "./style.css";
import Loader from "./../../../utils/loader";
import TopBar from "../Card/TopBar";
import SidebarItem from "../SidebarItem";
import SidebarItemList from "./SidebarItemList";

const Sidebar = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [open, setOpen] = React.useState(false);
  const [sidebarItem, setItem] = React.useState(SidebarItemList);

  const { user } = useSelector((state) => state.login);
  const { loading, error } = useSelector((state) => state.state);
  const { profile } = useSelector((state) => state.store);

  useEffect(() => {
    if (!profile) {
      dispatch(getprofile());
    }
    if (!user) {
      dispatch(logout());
    }
  }, [dispatch]);

  const onflipSide = () => {
    setOpen(!open);
  };

  return (
    <div>
      {loading && <Loader />}

      <body className="antialiased bg-body text-body font-body">
        <div className="">
          <div className="">
            <nav className="lg:hidden  py-6 px-6 ">
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
              <div className=" lg:block navbar-menu relative z-40 ">
                <div
                  onClick={onflipSide}
                  className="navbar-backdrop fixed lg:hidden inset-0 bg-black opacity-10"
                ></div>
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-3/4 lg:w-80 sm:max-w-xs pt-6 pb-8 bg-white  overflow-y-auto">
                  <div className="flex w-full items-center px-6 pb-6 mb-6  ">
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
            <div className="hidden lg:block navbar-menu relative z-30 ">
              <div
                onClick={onflipSide}
                className="navbar-backdrop fixed lg:hidden inset-0 bg-gray-800 opacity-10"
              ></div>
              <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-3/4 lg:w-80 sm:max-w-xs pt-6 pb-8 bg-white  overflow-y-auto">
                <div className="flex w-full items-center px-6 pb-6 mb-6  ">
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
              {profile.data && (
                <TopBar
                  name={profile.data.name}
                  profession={profile.data.profession}
                  image={profile.data.photo}
                />
              )}
              <div className=" h-full">{props.children}</div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Sidebar;
