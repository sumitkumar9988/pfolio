import React from "react";
import Item from "./Card/Experience";
import PropTypes from 'prop-types';


const Experience = ({ user }) => {
  const [experience, setExperience] = React.useState(user.experience);
  let x, y, z;
  x = 0;
  y = experience.length - parseInt(experience.length / 2);
  z = experience.length;

  return (
    <div className="w-full md:w-10/12 lg:w-7/12 mx-auto pb-12">
      <div className="mt-20 mb-4 md:mt-28 ml-8 md:ml-16">
        <div>
          <p
            className=" text-2xl font-bold md:text-3xl font-rubik text-white"
          >
            Experience
          </p>
        </div>
        <div className="">
          <div className="flex flex-col md:hidden ">
            {experience.map((item, i) => (
              <Item
                {...item}
                key={i}
                first={i === 0}
                last={i === experience.length - 1}
                custom={i}
              />
            ))}
          </div>
          <div className="hidden md:block">
            <div className="flex justify-between ">
              <div>
                {experience.slice(x, y).map((item, i) => (
                  <Item
                    {...item}
                    key={i}
                    first={i === 0}
                    last={
                      i ===
                      experience.length - parseInt(experience.length / 2) - 1
                    }
                    custom={i}
                  />
                ))}
              </div>
              <div>
                {experience.slice(y, z).map((item, i) => (
                  <Item
                    {...item}
                    key={i}
                    first={i === 0}
                    last={i === (experience.length % 2 === 0 ? y - 1 : y - 2)}
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

Experience.propTypes={
  theme: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
}


export default Experience;
