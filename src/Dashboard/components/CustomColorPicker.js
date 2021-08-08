import React from 'react'
import { ChromePicker } from "react-color";

const CustomColorPicker = ({toggleShareScreen}) => {
    return (
        <div>
        <div  class="w-full overflow-hidden h-full fixed block top-0 left-0 bg-gray-100  bg-opacity-95 backdrop-filter backdrop-blur-sm z-50">
          <div onClick={toggleShareScreen} className="absolute right-0 pt-8 pr-8">
            <div onClick={toggleShareScreen} className="transform hover:scale-125 h-full w-full transition duration-300">
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
           <ChromePicker width="400px"/>
          </div>
        </div>
      </div>
    )
}

export default CustomColorPicker
