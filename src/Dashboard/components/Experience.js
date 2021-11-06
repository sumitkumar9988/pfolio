import React from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Heading from "./Heading";
import Add from "./Card/Add";
import ExperienceCard from "./Card/InfoCard";
import { useDispatch, useSelector } from "react-redux";
import { getExperience } from "./../../redux/action/dashboardAction";
import Loader from "./../../utils/loader";
import ToastContainer from "./../../utils/toast";

const Experience = () => {
  const dispatch = useDispatch("");
  const { error } = useSelector((state) => state.state);
  const { experiences } = useSelector((state) => state.store);

  React.useEffect(() => {
    dispatch(getExperience());
  }, [dispatch]);

  React.useEffect(() => {
    error && toast.error(error);
  }, [error]);

  return (
    <div>
      <ToastContainer />
      <Heading title="Experience" number={experiences.length} />
      <div className="flex flex-wrap pt-8">
        {experiences.data
          ? experiences.data.map((item, i) => (
              <div
                key={item._id}
                className="mb-4 w-full md:w-1/2 lg:w-1/3 px-3 rounded-lg"
              >
                <Link to={`/home/experience/${item._id}`}>
                  <ExperienceCard
                    heading={item.jobTitle}
                    subheading={item.organization}
                    from={item.startDate}
                    to={item.endDate}
                    id={item._id}
                    image={item.logo}
                  />
                </Link>
              </div>
            ))
          : null}

        <div className="mb-4 w-full md:w-1/2 lg:w-1/3 px-3 rounded-lg">
          <Add link="/home/experience/new" />
        </div>
      </div>
    </div>
  );
};

export default Experience;
