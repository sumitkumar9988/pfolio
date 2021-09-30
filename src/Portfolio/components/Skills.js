import React from "react";
const skills = [
  {
    name: "TypeScript",
    href: "https://typescriptlang.org",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "React",
    href: "https://reactjs.org",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Golang",
    href: "https://golang.org",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-original.svg",
  },
  {
    name: "Node.js",
    href: "https://nodejs.org",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "nextjs",
    href: "next js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },

  {
    name: "Golang",
    href: "https://golang.org",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-original.svg",
  },
  {
    name: "Node.js",
    href: "https://nodejs.org",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "nextjs",
    href: "next js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "GraphQL",
    href: "https://graphql.org",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  },
];

const Skills = () => {
  return (
    <div>
      <div className="w-full mt-20 md:mt-4  md:w-10/12 lg:w-7/12 mx-auto ">
        <div className=" pb-8 ml-0  p-8 md:p-16">
          <div>
            <p className="mb-4 text-2xl font-bold md:text-3xl font-rubik text-white">
              Skills
            </p>
          </div>
          <div className="max-w-md mt-8 grid grid-cols-2 sm:grid-cols-3 gap-6">
            {skills.map((skill, i) => (
              <p className="block pt-3 pb-2 text-center bg-gray-700 rounded-lg shadow-lg ">
                <div className="">
                  <img className="mx-auto w-9 h-9" src={skill.icon} alt="" />
                </div>
                <p className="mt-2 text-base font-medium text-white">
                  {skill.name}
                </p>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
