import React, { useState } from "react";
import ProjectCard from "./Card/ProjectCard";
const initialProject = [
  {
    title: "NU Open",
    description:
      "Landing page for the largest open programming competition organized by Nazarbayev University students.",
    technologies: ["React", "Gatsby", "Node.js"],
    externalLink: "https://nuopen.kz",
    githubLink: "https://github.com/ironsoul0/nuopen",
    imageLink: `https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHw0fHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE2MzI4OTczOTA&ixlib=rb-1.2.1&q=80&w=1080`,
  },
  {
    title: "Railwayz",
    description:
      "rate prediction of the number of railway carriages required for different routes. ",
    technologies: ["React", "XGBoost", "Django"],
    externalLink: "https://railwayz.ironsoul.me",
    githubLink: "https://github.com/ironsoul0/samruk-hackathon",
    imageLink:
      "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwxMnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8fHwxNjMyODk3Mzkw&ixlib=rb-1.2.1&q=80&w=1080",
  },
  {
    title: "NU Open",
    description:
      "Landing page for the largest open programming competition organized by Nazarbayev University students.",
    technologies: ["React", "Gatsby", "Node.js"],
    externalLink: "https://nuopen.kz",
    githubLink: "https://github.com/ironsoul0/nuopen",
    imageLink: `https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHw0fHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE2MzI4OTczOTA&ixlib=rb-1.2.1&q=80&w=1080`,
  },
];

const Project = ({ theme }) => {
  const [project, setProject] = useState(initialProject);
  return (
    <div>
      <div className="w-full md:w-10/12 lg:w-8/12 mx-auto pb-12">
        <div className="mt-20 mb-4 ">
          <div>
            <p
              className={`md:mt-28 ml-8 md:ml-16 lg:ml-32 text-2xl font-bold md:text-3xl font-rubik   ${theme.textColor1}`}
            >
              Project
            </p>
          </div>
          <div className=" mt-10 md:mt-20 md:px-8 max-w-screen-lg">
            {project.map((project, i) => (
              <ProjectCard
                key={i}
                rightShift={i % 2 === 0}
                {...project}
                theme={theme}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
