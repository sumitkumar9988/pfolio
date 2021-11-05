import React from "react";
import Select from "react-select";
import { toast } from "react-toastify";
import Loader from "./../../../../utils/loader";
import ToastContainer from "./../../../../utils/toast";
import option from "../../../../utils/skills.json";
import { useDispatch, useSelector } from "react-redux";
import {addSkills} from './../../../../redux/action/dashboardAction'

const AddNewSkills = ({ flipAddScreen }) => {

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.state);
  const [skill,setNewSkill]=React.useState(null);

  React.useEffect(()=>{
    error && toast.error(error)
  },[])
  

  const onSaveSkills=()=>{
      if(skill===null){
        toast.error('Select Any Skills')
      }else{
        const data={
          skill:skill.label,
          logo:skill.image
        }
        dispatch(addSkills(data,toast));


      }
  }


  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      padding: 10,
      backgroundColor:'#fff',
      color:'#111',
      fontSize:14,
      width:'100%'

    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: 400,
      backgroundColor:'#f9fafb',
      height:40
    }),
    
  };

  return (
    <div>
      {loading && <Loader/>}
      <ToastContainer/>
      <div class="w-full overflow-hidden h-full fixed block top-0 left-0 bg-gray-100 bg-opacity-90 backdrop-filter backdrop-blur-sm z-30">
        <div className="absolute right-0 pt-8 pr-8">
          <div
            className="transform hover:scale-125 h-full w-full transition duration-300"
            onClick={() => flipAddScreen()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>

        <div class="flex h-screen justify-center items-center ">
          <div className="w-full bg-white shadow rounded ">
            <div className="w-full flex items-center justify-center ">
              <h1 className="text-2xl font-semibold pt-4 ">Add Skills</h1>
            </div>

            <div className="pt-10 w-full flex items-center justify-center">
              <Select
                name="skill"
                options={option}
                onChange={setNewSkill}
                placeholder="select skills"
                styles={customStyles}
                className="basic-single"
                classNamePrefix="select"
                components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
              />
            </div>

            <div className="flex items-center justify-center mt-7 mb-6">
              <button onClick={onSaveSkills} className=" focus:outline-none focus:ring-2 focus:ring-offset-2  hover:bg-red-500 text-sm font-medium leading-none text-center text-white bg-red-400 rounded px-5 py-3">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewSkills;
