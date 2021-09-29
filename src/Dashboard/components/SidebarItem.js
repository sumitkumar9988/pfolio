import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome,AiFillRightSquare ,AiFillProject,AiFillRocket} from 'react-icons/ai';
import clsx from "clsx";

const SidebarItem = ({ item }) => {
  return (
    <>
      <li>
        {item.logout && (
          <div className="flex items-center pl-3 py-3 pr-4  rounded">
            <p className="flex items-center text-gray-500 ">
              <span className="inline-block mr-3">
                {item.icon}
              </span>
              <span>{item.name}</span>
            </p>
          </div>
        )}
        {!item.logout && (
          <NavLink
            active-button
            activeClassName={clsx("bg-red-300 text-white")}
            to={item.link}
            exact
            className="flex items-center pl-3 py-3 pr-4  rounded"
          >
            <p className="flex items-center text-gray-500 ">
              <span className="inline-block mr-3">
              {item.icon}
              </span>{" "}
              <span>{item.name}</span>
            </p>
          </NavLink>
        )}
      </li>
    </>
  );
};

export default SidebarItem;
