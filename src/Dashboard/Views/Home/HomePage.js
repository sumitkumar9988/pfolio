import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getprofile } from "./../../../redux/action/dashboardAction";
import Loader from "./../../../utils/loader";
import ToastContainer from "./../../../utils/toast";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomDomain from "../../components/Card/CustomDomain";
import Discord from "../../components/Card/Discord";
import LivePreview from "../../components/Card/LivePreview";
import SocialMedia from "../../components/Card/SocialMedia";

const Home = ({ history }) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.state);
  const { profile } = useSelector((state) => state.store);

  const [username, setUsername] = React.useState("");
  useEffect(() => {
    error && toast.error(error);
    dispatch(getprofile());
    if (profile && profile.data) {
      console.log("username");
      setUsername(profile.data.username);
    } else {
      dispatch(getprofile());
    }
  }, [dispatch]);

  return (
    <div className="">
      {loading ? (
        <Loader />
      ) : (
        <div>
          <ToastContainer />
          <div className="w-full rounded ">
            {profile && profile.data && (
              <LivePreview user={profile.data.username} history={history} />
            )}
          </div>
          <section class="py-8 px-8">
            <div class="flex flex-wrap justify-between items-center ml-2 md:ml-4">
              <div class="w-full lg:w-1/2    ">
                <CustomDomain />
              </div>

              <div class="w-full lg:w-1/2  ">
                <SocialMedia user={profile} />
              </div>
            </div>
            <Discord />
          </section>
        </div>
      )}
    </div>
  );
};

export default Home;
