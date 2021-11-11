import React from "react";
import Heading from "./Heading";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getSkills } from "./../../redux/action/dashboardAction";
import EditSkills from "./../../Dashboard/Views/Forms/skills/Edit-Skills";
import AddSkills from "./../../Dashboard/Views/Forms/skills/Add-Skills";

const Skills = () => {
  const dispatch = useDispatch("");
  const { error } = useSelector((state) => state.state);
  const { skills } = useSelector((state) => state.store);

  const [editSkill, setEditSkill] = React.useState(false);
  const [addSkillCard, setaddSkillCard] = React.useState(false);
  const [editSkillID, setEditSkillID] = React.useState("");

  React.useEffect(() => {
    dispatch(getSkills());
  }, [dispatch, editSkill, addSkillCard]);

  React.useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const onskillClick = (id) => {
    setEditSkill(!editSkill);
    setEditSkillID(id);
  };

  const flipAddScreen = () => {
    setaddSkillCard(!addSkillCard);
  };

  return (
    <div>
      {addSkillCard && <AddSkills flipAddScreen={flipAddScreen} />}
      {editSkill && <EditSkills id={editSkillID} onskillClick={onskillClick} />}
      <Heading title="Skills" number={skills.length} />

      <div className="mt-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-x-10 gap-x-2 md:gap-y-10 gap-y-2 px-8 md:px-0">
          {skills.data &&
            skills.data.map((item, i) => (
              <div
                onClick={() => onskillClick(item._id)}
                className="flex items-center justify-center w-full h-full px-6 py-9 cursor-pointer   transform hover:scale-105 transition duration-300 rounded-xl bg-white shadow-xl"
              >
                <img
                  src={item.logo}
                  className="w-12 object-center"
                  alt={item.skill}
                />
              </div>
            ))}

          <div className="w-full flex-1">
            <div
              onClick={() => flipAddScreen()}
              className="flex items-center justify-center flex-1 h-full px-6 py-9 cursor-pointer transform hover:scale-105 transition duration-300 rounded-xl bg-white shadow-xl"
            >
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
    </div>
  );
};

export default Skills;
