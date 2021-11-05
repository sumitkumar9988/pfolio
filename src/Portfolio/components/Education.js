import React from "react";
import Item from "./Card/Education";
const data = [
  {
    course: "B.tech",
    institute: "IIT Delhi",
    date: "Jun 2018 - Aug 2018",
  },

  {
    course: "B.tech",
    institute: "IIT Delhi",
    date: "Jun 2018 - Aug 2018",
  },
  {
    course: "MBA ",
    institute: "IIM Banglore",
    date: "Jun 2019 - Aug 2019",
  },
  {
    course: "B.tech",
    institute: "IIT Delhi",
    date: "Jun 2018 - Aug 2018",
  },
  {
    course: "MBA ",
    institute: "IIM Banglore",
    date: "Jun 2019 - Aug 2019",
  },
];

const Experience = ({ theme }) => {
  console.log(data.length);
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
            Education
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
