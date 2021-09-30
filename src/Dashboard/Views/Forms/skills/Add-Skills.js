import React from 'react'

const AddSkills = ({flipAddScreen}) => {
    return (
        <div>
      <div class="w-full overflow-hidden h-full fixed block top-0 left-0 bg-gray-100 bg-opacity-90 backdrop-filter backdrop-blur-sm z-50">
        <div className="absolute right-0 pt-8 pr-8">
          <div className="transform hover:scale-125 h-full w-full transition duration-300" onClick={()=>flipAddScreen()}>
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
              <h1 className="text-2xl font-semibold pt-4 ">
                Add Skills
              </h1>
            </div>
           
            <div className="pt-10 px-16 flex items-center justify-center">
             {/*  */}
            </div>

            <div className="flex items-center justify-center mt-7 mb-6">
              <button className=" focus:outline-none focus:ring-2 focus:ring-offset-2  hover:bg-red-500 text-sm font-medium leading-none text-center text-white bg-red-400 rounded px-5 py-3">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default AddSkills
