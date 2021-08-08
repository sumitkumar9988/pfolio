import React from "react";
import Mac from "./../../../assets/Macbook Pro.png";
import { CirclePicker } from "react-color";
import CustomColorPicker from './../../components/CustomColorPicker';



const Theme = () => {
  const [openColorPicker,setOpenColorPicker]=React.useState(false)
  const toggleShareScreen=()=>{
    setOpenColorPicker(!openColorPicker);
  }
  
  return (

    <div className="min-h-screen">
        {openColorPicker && <CustomColorPicker toggleShareScreen={toggleShareScreen}/>}
      <div class="py-8 px-6">
        <div class="container px-4 mx-auto">
          <h2 class="text-2xl font-bold">Change Theme</h2>
        </div>
      </div>
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-4">
        <div className="rounded">
          <img class="rounded" src={Mac} alt=""></img>
        </div>
        <div className="rounded border-2 h-full p-2">
          <div className="container mx-auto grid grid-cols-1 pt-6 gap-8">
            <div className="rounded ">
              <p className="text-sm text-center font-semibold h-10">
                Background Color
              </p>
              <div className="flex items-center mx-auto justify-center">
                <CirclePicker width="420px" circleSize={30} />
              </div>

             
              <div className="flex pt-4 items-center mx-auto justify-center" >
                <p onClick={toggleShareScreen} className="text-xs text-blue-400 font-bold hover:underline transform hover:scale-x-105 transition delay-75">Choose Custom Color</p>
              </div>
            </div>

            <div className="rounded ">
              <p className="text-sm text-center font-semibold h-10">
                Text Color
              </p>
              <div className="flex items-center mx-auto justify-center">
                <CirclePicker
                  width="420px"
                  circleSize={30}
                  colors={[
                    "#f44336",
                    "#e91e63",
                    "#9c27b0",
                    "#e91e63",
                    "#673ab7",
                    "#3f51b5",
                    "#2196f3",
                    "#03a9f4",
                    "#00bcd4",
                    "#009688",
                    "#4caf50",
                    "#8bc34a",
                    "#cddc39",
                    "#ffeb3b",
                    "#ffc107",
                    "#ff9800",
                    "#ff5722",
                    "#795548",
                  ]}
                />
              </div>
              <div className="flex pt-4 items-center mx-auto justify-center">
                <p onClick={toggleShareScreen} className="text-xs text-blue-400 font-bold hover:underline transform hover:scale-x-105 transition delay-75">Choose Custom Color</p>
              </div>
            </div>
          </div>
          <div class="  pt-4 w-full text-center">
            <p class="inline-flex items-center py-3 px-4 text-sm text-white bg-red-400 hover:bg-red-500 rounded transition duration-200">
              <span>Save</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theme;
