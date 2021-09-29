import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UploadResume from "../../components/Card/uploadResume";
import Bio from "../../components/Card/bio";
import CustomDomain from "../../components/Card/CustomDomain";
import Discord from "../../components/Card/Discord";
import LivePreview from "../../components/Card/LivePreview";
import SocialMedia from "../../components/Card/SocialMedia";
import Feedback from "../../components/Card/Feedback";
const initialUser = {
  username: "sumit",
  email: "s@pfolio.me",
  id: 1111,
};

const Home = () => {
  const [user, setUser] = useState(initialUser);

  return (
    <div className="">
      {/* <UploadResume/> */}
      {/* <Bio/> */}

      <div className="w-full rounded ">
        <LivePreview user={user} />
      </div>
      <section class="py-8 px-8">
        <div class="flex flex-wrap justify-center items-center ml-2 md:ml-4">
          <div class="w-full lg:w-1/3  ">
            <Feedback user={user} />
          </div>

          <div class="w-full lg:w-1/3     ">
            <CustomDomain user={user} />
          </div>

          <div class="w-full lg:w-1/3  ">
            <SocialMedia user={user} />
          </div>
        </div>
        <Discord />
      </section>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Home;
