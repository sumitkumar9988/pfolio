import React from "react";
import Item from "./Card/Experience";
const data = [
  {
    title: "React Native Participant",
    place: "N17R Incubator, Almaty",
    date: "Jun 2018 - Aug 2018",
  },
  {
    title: "SWE Intern",
    place: "Yandex, Moscow",
    date: "Jun 2019 - Aug 2019",
  },
  {
    title: "React Native Participant",
    place: "N17R Incubator, Almaty",
    date: "Jun 2018 - Aug 2018",
  },
  {
    title: "React Native Participant 4",
    place: "N17R Incubator, Almaty",
    date: "Jun 2018 - Aug 2018",
  },
  // {
  //   title: "React Native Participant 5",
  //   place: "N17R Incubator, Almaty",
  //   date: "Jun 2018 - Aug 2018",
  // },
  // {
  //   title: "React Native Participant",
  //   place: "N17R Incubator, Almaty",
  //   date: "Jun 2018 - Aug 2018",
  // },
];

const Experience = ({ theme }) => {
  let x, y, z;
  x = 0;
  y = data.length - parseInt(data.length / 2);
  z = data.length;

  return (
    <div className="w-full md:w-10/12 lg:w-7/12 mx-auto pb-12">
      <div className="mt-20 mb-4 md:mt-28 ml-4 md:ml-16">
        <div>
          <p
            className={` text-2xl font-bold md:text-3xl font-rubik ${theme.textColor1}`}
          >
            Experience
          </p>
        </div>
        <div className="">
          <div className="flex flex-col md:hidden ">
            {data.map((item, i) => (
              <Item
                {...item}
                key={i}
                first={i === 0}
                last={i === data.length - 1}
                custom={i}
                theme={theme}
              />
            ))}
          </div>
          <div className="hidden md:block">
            <div className="flex justify-between ">
              <div>
                {data.slice(x, y).map((item, i) => (
                  <Item
                    {...item}
                    key={i}
                    first={i === 0}
                    last={i === data.length - parseInt(data.length / 2) - 1}
                    custom={i}
                    theme={theme}
                  />
                ))}
              </div>
              <div>
                {data.slice(y, z).map((item, i) => (
                  <Item
                    {...item}
                    key={i}
                    first={i === 0}
                    last={i === (data.length % 2 === 0 ? y - 1 : y - 2)}
                    custom={i}
                    theme={theme}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
