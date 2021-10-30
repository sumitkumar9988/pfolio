import React from 'react'
import {
  LinkedinShareButton,
  TwitterShareButton,
  TwitterIcon,
  LinkedinIcon,
} from "react-share";
const SocialMedia = () => {
  const shareUrl = 'http://github.com';
  const title = 'GitHub';
  return (
    <div className="justify-center mx-auto">
      <div className="h-80    flex justify-center items-center flex-col w-full md:w-4/6 lg:w-3/6 rounded-xl">
        <h3 className="text-gray-800 dark:text-gray-100 leading-4 tracking-normal text-base mb-6 font-bold">
          Share on Social Media
        </h3>
        <div className="flex justify-center items-center w-full mb-5 mt-4">
          <div className="p-4">
            <LinkedinShareButton url={shareUrl} className="Demo__some-network__share-button">
              <LinkedinIcon size={44} round />
            </LinkedinShareButton>
          </div>
          <div className="p-4">
            <TwitterShareButton
              url={shareUrl}
              title={title}
              className="Demo__some-network__share-button"
            >
              <TwitterIcon size={44} round />
            </TwitterShareButton>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SocialMedia
