import React from "react";
import Item from "./Card/Experience";
const data = [
  {
    title: "React Native Participant",
    place: "N17R Incubator, Almaty",
    date: "Jun 2018 - Aug 2018",
  },
  // {
  //   title: "SWE Intern",
  //   place: "Yandex, Moscow",
  //   date: "Jun 2019 - Aug 2019",
  // },
  // {
  //   title: "React Native Participant",
  //   place: "N17R Incubator, Almaty",
  //   date: "Jun 2018 - Aug 2018",
  // },
  // {
  //   title: "React Native Participant 4",
  //   place: "N17R Incubator, Almaty",
  //   date: "Jun 2018 - Aug 2018",
  // },
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

const Experience = () => {
  console.log(data.length)
  let x,y,z;
  x=0;
  y=data.length - parseInt(data.length / 2);
  z=data.length;

  console.log(x,y,z);


  return (
    <div className="w-full md:w-10/12 lg:w-7/12 mx-auto pb-12">
      <div className="mt-20 mb-16 md:mt-28 ml-8 md:ml-16">
        <div className="mt-14">
          <div className="flex flex-col md:hidden ">
            {data.map((item, i) => (
              <Item
                {...item}
                key={i}
                first={i === 0}
                last={i === data.length - 1}
                custom={i}
              />
            ))}
          </div>
          <div className="hidden md:block">
            <div className="flex justify-between ">
              <div>
                {data
                  .slice(x,y)
                  .map((item, i) => (
                    <Item
                      {...item}
                      key={i}
                      first={i === 0}
                      last={i === data.length - parseInt(data.length / 2) - 1}
                      custom={i}
                    />
                  ))}
              </div>
              <div>
                {data
                  .slice(y,z)
                  .map((item, i) => (
                    <Item
                      {...item}
                      key={i}
                      first={i === 0}
                      last={i === (data.length%2===0?(y-1):(y-2))}
                      custom={i}
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

// data.slice(0, 3).map((item, i) => (
//   <Item
//     {...item}
//     key={i}
//     first={i === 0}
//     last={i === 2}
//     custom={i}
//   />
// ))}
// </div>
// <div>
// {data.slice(3).map((item, i) => (
//   <Item
//     {...item}
//     key={i}
//     first={i === 0}
//     last={i === 2}
//     custom={i}
//   />
// ))}
// </div>
// </>
// ) :
