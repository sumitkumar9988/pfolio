import React from "react";
import { toast } from "react-toastify";
import Loader from "../../../../utils/loader";
import ToastContainer from "../../../../utils/toast";
import { useSelector, useDispatch } from "react-redux";
import {
  getprofile,
  updateDomain,
} from "../../../../redux/action/dashboardAction";
import "react-confirm-alert/src/react-confirm-alert.css";
const CustomDomain = ({ history }) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.state);
  const { profile } = useSelector((state) => state.store);

  const [website, setWebsite] = React.useState("");

  React.useEffect(() => {
    error && toast.error(error);
  }, [ error]);

  React.useEffect(() => {
    dispatch(getprofile());
  }, []);

  React.useEffect(() => {
    if(profile && profile.data){
      setWebsite(profile.data.domain);
    }
  }, [profile]);


 

  const CheckIsValidDomain = (domain) => {
    if (
      /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/.test(
        domain
      )
    ) {
      return true;
    } else {
      return false;
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!CheckIsValidDomain(website)) {
      toast.error("Enter Valid Domain");
    } 
    else{
              const data = {
          domain: website,
        };
      dispatch(updateDomain(data, toast));
    }

    // else {
    //   if (website.split(".").length < 3) {
    //     toast.error("Include subdomain also like www.");
    //   } else {

    //   }
    // }
  };

  return (
    <div>
      <ToastContainer />
      {loading && <Loader />}
      <div className=" flex justify-center   mx-auto ">
        <div className="pt-24 w-full sm:w-8/12 m-4 md:w-3/6">
          <div className="w-full ">
            <h2 className="text-2xl font-bold text-center">
              Add Your Custom Domain
            </h2>
          </div>
          <div>
            <div className=" mt-4 mb-4 ">
              <input
                type="text"
                id="name-with-label"
                onChange={(e) => setWebsite(e.target.value)}
                value={website}
                className=" py-4 pl-4  rounded text-sm focus:outline-none w-full  bg-gray-100 resize-none text-gray-800"
                name="domain"
                placeholder="Your Domain Name"
              />
            </div>
            <div className="text-gray-700 text-base underline font-rubik font-semibold text-center">
              * We not supporting root domain right now make sure to add
              subomain like www or something else
            </div>
            <div
              onClick={submitHandler}
              className="flex cursor-pointer pt-8 items-center justify-center"
            >
              <p className="inline-block py-3 px-6 leading-none text-white bg-red-400 hover:bg-red-500 rounded shadow">
                Save
              </p>
            </div>
            <div className="text-gray-700 pt-32 text-base  font-rubik font-normal text-start items-center">
              <div className="">
                1. After adding domain go tour dns record add CNAME www pfolio.site
              </div>
              <div className="pt-4">
                2. Add A Record to ip address 3.6.182.224
              </div>
              <div className="pt-4">
                3. If you are facing any problem Please feel free to dm me <a href="https://twitter.com/Sumit_r9988" className="underline text-blue-400" target="_blank">sumit</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomDomain;
