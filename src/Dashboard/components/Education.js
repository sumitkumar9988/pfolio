import React from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Heading from "./Heading";
import Add from "./Card/Add";
import EducationCard from "./Card/InfoCard";
import { useDispatch, useSelector } from "react-redux";
import { getEducation } from "./../../redux/action/dashboardAction";
// import Loader from './../../utils/loader'
import ToastContainer from "./../../utils/toast";

const Education = () => {
  const dispatch = useDispatch("");
  const { error } = useSelector((state) => state.state);
  const { educations } = useSelector((state) => state.store);

  React.useEffect(() => {
    error && toast.error(error);
    dispatch(getEducation());
  }, [dispatch]);

  React.useEffect(() => {
    error && toast.error(error);
  }, [error]);

  return (
    <div>
      <ToastContainer />
      <Heading title="Education" number={educations.length} />
      <div className="flex flex-wrap pt-8">
        {educations.data
          ? educations.data.map((item, i) => (
              <div
                key={item._id}
                className="mb-4 w-full md:w-1/2 lg:w-1/3 px-3 rounded-lg"
              >
                <Link to={`/home/education/${item._id}`}>
                  <EducationCard
                    heading={item.degree}
                    subheading={item.institute}
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
          <Add link="/home/education/new" />
        </div>
      </div>
    </div>
  );
};

export default Education;
