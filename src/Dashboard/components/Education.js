import React from "react";
import { Link } from "react-router-dom";
import Heading from "./Heading";
import Add from "./Card/Add";
import EducationCard from "./Card/InfoCard";

const edu = [
  {
    course: "B.tech",
    logo: "https://upload.wikimedia.org/wikipedia/en/f/fd/Indian_Institute_of_Technology_Delhi_Logo.svg",
    institute: " IIT Delhi",
    from: "2021-06",
    to: "2021-06",
    id: 1,
  },
  {
    course: "MBA",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/IIM_Bangalore_Logo.svg/1200px-IIM_Bangalore_Logo.svg.png",
    institute: " IIM ",
    from: "2021-06",
    to: "",
    id: 1,
  },
  {
    course: "High School",
    logo: "http://www.dpsjhakri.com/images/dps_logo1.png",
    institute: "DPS",
    from: "2021-06",
    to: "2021-06",
    id: 1,
  },
];

const Education = () => {
  return (
    <div>
      <Heading title="Education" number="3" />

      <div className="flex flex-wrap pt-8">
        {edu.map((item, i) => (
          <div className="mb-4 w-full md:w-1/2 lg:w-1/3 px-3 rounded-lg">
            <Link to={`/home/education/${item.id}`}>
              <EducationCard
                heading={item.course}
                subheading={item.institute}
                from={item.from}
                to={item.to}
                id={item.id}
                image={item.logo}
              />
            </Link>
          </div>
        ))}
        <div className="mb-4 w-full md:w-1/2 lg:w-1/3 px-3 rounded-lg">
          <Add link="/home/education/new" />
        </div>
      </div>
    </div>
  );
};

export default Education;
