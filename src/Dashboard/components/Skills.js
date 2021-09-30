import React from "react";
import Heading from "./Heading";
import EditSkills from "./../../Dashboard/Views/Forms/skills/Edit-Skills";
import AddSkills from "./../../Dashboard/Views/Forms/skills/Add-Skills";
const initialSkills = [
  {
    name: "amazonwebservices",
    id: 1,
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
  },
  {
    name: "android",
    id: 2,
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
  },
  {
    name: "aarch64",
    id: 3,
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aarch64/aarch64-original.svg",
  },
  {
    name: "angularjs",
    id: 4,
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  },
  {
    name: "apache",
    id: 5,
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg",
  },
  {
    name: "apachekafka",
    id: 6,
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg",
  },
  {
    name: "appcelerator",
    id: 7,
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/appcelerator/appcelerator-original.svg",
  },
  {
    name: "apple",
    id: 8,
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
  },
];

const Skills = () => {
  const [editSkill, setEditSkill] = React.useState(false);
  const [addSkillCard, setaddSkillCard] = React.useState(false);
  const [editSkillID, setEditSkillID] = React.useState();

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
      {editSkill && <EditSkills id={editSkillID} filpScreen={onskillClick} />}
      <Heading title="Skills" number="3" />

      <div className="mt-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-x-10 gap-x-2 md:gap-y-10 gap-y-2 px-8 md:px-0">
          {initialSkills.map((item, i) => (
            <div
              onClick={() => onskillClick(item)}
              className="flex items-center justify-center w-full h-full px-6 py-9 cursor-pointer   transform hover:scale-105 transition duration-300 rounded-xl bg-white shadow-xl"
            >
              <img
                src={item.image}
                className="w-12 object-center"
                alt={item.name}
              />
            </div>
          ))}

          <div className="w-full flex-1">
            <div onClick={() => flipAddScreen()} className="flex items-center justify-center flex-1 h-full px-6 py-9 cursor-pointer transform hover:scale-105 transition duration-300 rounded-xl bg-white shadow-xl">
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
