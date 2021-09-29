import React from 'react'

const SocialMedia = () => {
    return (
        <div>
              <div className="h-80 w-80 p-4  flex justify-center items-center flex-col  shadow-xl rounded-xl">
              <h3 className="text-gray-800 dark:text-gray-100 leading-4 tracking-normal text-base mb-6 font-bold">
                Share on Social Media
              </h3>
              <div className="flex justify-between items-center w-full mb-5">
                <div className="flex items-center">
                  <p className="font-medium text-gray-600 dark:text-gray-400 text-base tracking-normal leading-4">
                    LinkedIn
                  </p>
                </div>
                <button className="focus:outline-none px-6 py-2 bg-red-400 hover:bg-red-500  text-white font-normal text-xs leading-3 rounded">
                  Share
                </button>
              </div>
              <div className="flex justify-between items-center w-full mb-5">
                <div className="flex items-center">
                  <p className="font-medium text-gray-600 dark:text-gray-400 text-base tracking-normal leading-4">
                    Twitter
                  </p>
                </div>
                <button className="focus:outline-none px-6 py-2 bg-red-400 hover:bg-red-500  text-white font-normal text-xs leading-3 rounded">
                  Share
                </button>
              </div>{" "}
              <div className="flex justify-between items-center w-full mb-5">
                <div className="flex items-center">
                  <p className="font-medium text-gray-600 dark:text-gray-400 text-base tracking-normal leading-4">
                    Facebook
                  </p>
                </div>
                <button className="focus:outline-none px-6 py-2 bg-red-400 hover:bg-red-500  text-white font-normal text-xs leading-3 rounded">
                  Share
                </button>
              </div>
            </div>
        </div>
    )
}

export default SocialMedia
