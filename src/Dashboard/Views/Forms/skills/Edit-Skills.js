import React from "react";
import ReactGA from "react-ga";
import Loader from "./../../../../utils/loader";
import ToastContainer from "./../../../../utils/toast";
import { useDispatch, useSelector } from "react-redux";
import {
  getSkillbyID,
  deleteSkills,
  getSkills,
} from "./../../../../redux/action/dashboardAction";

const EditSkills = ({ id, onskillClick }) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.state);
  const { skill } = useSelector((state) => state.store);

  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const deleletSkills = (e) => {
    e.preventDefault();
    dispatch(deleteSkills(id));
    dispatch(getSkills());
    onskillClick(null);
  };

  React.useEffect(() => {
    dispatch(getSkillbyID(id));
  }, [error]);

  React.useEffect(() => {
    dispatch(getSkillbyID(id));
  }, [dispatch, id]);

  return (
    <div>
      <Loader />
      <ToastContainer />
      <div class="w-full overflow-hidden h-full fixed block top-0 left-0 bg-gray-100 bg-opacity-90 backdrop-filter backdrop-blur-sm z-50">
        <div className="absolute right-0 pt-8 pr-8">
          <div
            className="transform hover:scale-125 h-full w-full transition duration-300"
            onClick={() => onskillClick(null)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>

        {skill && skill.data ? (
          <div class="flex h-screen justify-center items-center ">
            <div className="w-full bg-white shadow rounded ">
              <div className="w-full flex items-center justify-center ">
                <h1 className="text-2xl font-semibold pt-4 ">
                  {skill.data.skill}
                </h1>
              </div>

              <div className="pt-10 px-16 flex items-center justify-center">
                <img
                  src={skill.data.logo}
                  alt="set one comment"
                  className="w-24"
                />
              </div>

              <div className="flex items-center justify-center mt-7 mb-6">
                <button
                  onClick={deleletSkills}
                  className=" focus:outline-none focus:ring-2 focus:ring-offset-2  hover:bg-red-500 text-sm font-medium leading-none text-center text-white bg-red-400 rounded px-5 py-3"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default EditSkills;
