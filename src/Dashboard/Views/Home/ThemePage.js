import React,{useState,useEffect} from "react";
import { toast } from "react-toastify";
import { useDispatch,useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {updateProfile} from './../../../redux/action/dashboardAction'
import ToastConatiner from './../../../utils/toast'
import Loader from './../../../utils/loader'
import themeData from "./../../../utils/themeData.json";
const Index = ({history}) => {
  const [theme, setTheme] = useState({});
  const dispatch =useDispatch();
  const {loading ,error}=useSelector((state)=>state.state);

  useEffect(()=>{
    error && toast.error(error);
  },[error])

  const onSave=(e)=>{
    e.preventDefault();
    dispatch(updateProfile(theme,history,null,toast,'Theme Updated visit Your Profile'));
  }

  
  return (
    <div>
    {loading && <Loader/>}
    <ToastConatiner/>
    <div className=" w-full sm:w-11/12 md:w-8/12 lg:w-6/12 mt-8 mx-auto">
      <div className="container mx-auto grid grid-cols-4 p-8">
        {themeData.map((item, i) => (
          <div
            onClick={() => setTheme(item)}
            className="flex transform hover:scale-125 duration-200 flex-row m-2 items-center justify-center mx-auto"
          >
            <div
              className={`h-12 w-6  ${item.bgColor1}  rounded-l-full `}
            ></div>
            <div
              className={`h-12 w-6  ${item.bgColor2}  rounded-r-full `}
            ></div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mx-auto">
        <button onClick={onSave} className="w-36 h-12 shadow-lg text-white bg-gradient-to-l from-red-400 to-red-500 rounded-xl ">
          Save
        </button>
      </div>
    </div>
    </div>
  );
};

export default Index;
