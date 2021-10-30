import React from "react";
import { toast } from "react-toastify";
import Loader from "../../../../utils/loader";
import ToastContainer from "../../../../utils/toast";
import { useSelector, useDispatch } from "react-redux";
import { getprofile, updateProfile } from "../../../../redux/action/dashboardAction";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
const CustomDomain = ({ history }) => {

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.state)
  const { profile } = useSelector((state) => state.store)

  const [website, setWebsite] = React.useState("www");

  React.useEffect(() => {
    error && toast.error(error);
    if (!profile) {
      dispatch(getprofile());
    }
  }, [dispatch, error])

  const CheckIsValidDomain = (domain) => {
    if (/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/.test(domain)) {
      return true;
    } else {
      return false;
    }
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (!CheckIsValidDomain(website)) {
      toast.error('Enter Valid Domain')
    } else {
      if (website.split('.').length < 3) {
        toast.error('Include subdomain also like www')
      } else {
        const data = {
          website: website
        }
        confirmAlert({
          title: 'Title',
          message: 'Message',
          childrenElement: () => <div ><h1 className="text-red-400">Custom Domain1</h1></div>,
          buttons: [
            {
              label: 'Done!',
            },

          ]
        });
        console.log(data);
      }

    }

  }

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
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                name="domain"
                placeholder="Your Domain Name"
              />
            </div>
            <div className="text-gray-700 text-base underline font-rubik font-semibold text-center">
              * We not supporting root domain right now make sure to add
              subomain like www or something else
            </div>
            <div onClick={submitHandler} className="flex cursor-pointer pt-8 items-center justify-center">
              <p className="inline-block py-3 px-6 leading-none text-white bg-red-400 hover:bg-red-500 rounded shadow">
                Save
              </p>
            </div>
            <div className="text-gray-700 pt-32 text-base  font-rubik font-normal text-start items-center">
              <div className="">
                1. We not supporting root domain right now make sure to add
                subomain like www or something else
              </div>
              <div className="pt-4">
                2. We not supporting root domain right now make sure to add
                subomain like www or something else
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomDomain;
