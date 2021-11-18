import React from "react";
import {
  LinkedinShareButton,
  TwitterShareButton,
  TwitterIcon,
  LinkedinIcon,
} from "react-share";
// import {getprofile} from './../../../redux/action/dashboardAction'

const SocialMedia = (user) => {
 
    const url = 'pfolio.me'
    const title = 'hey guys ! I have build portfolio site through pfolio.me . On pfolio.me you can build your portfolio site on Custom domain'
  

  return (
    <div className="justify-center mx-auto">
      <div className="h-80    flex justify-center items-center flex-col w-full md:w-4/6 lg:w-3/6 rounded-xl">
        <h3 className="text-gray-800 dark:text-gray-100 leading-4 tracking-normal text-base mb-6 font-bold">
          Share on Social Media
        </h3>
        <div className="flex justify-center items-center w-full mb-5 mt-4">
          <div className="p-4">
            <LinkedinShareButton
              url={url}
              title={title}
              className="Demo__some-network__share-button"
            >
              <LinkedinIcon size={44} round />
            </LinkedinShareButton>
          </div>
          <div className="p-4">
            <TwitterShareButton
              title={title}
              className="Demo__some-network__share-button"
            >
              <TwitterIcon size={44} round />
            </TwitterShareButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
