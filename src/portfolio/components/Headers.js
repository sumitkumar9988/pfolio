import React,{useRef} from "react";
import clsx from "clsx";
import {Link} from 'react-router-dom';
import { useHeaderVisible } from "./../utils/useHeaderVisible";

const Headers = () => {

    const visible = useHeaderVisible();
    const ref = useRef(null);

  return  <div
  className={clsx(
    "fixed z-20 w-full opacity-90 bg-lightTheme dark:bg-darkTheme transition-top duration-300",
    visible ? "top-0" : "-top-28"
  )}
>
  <div className="flex items-center justify-between w-auto py-5 md:py-9 text-black-900 dark:text-white-900">
    <Link href="/">
      <a href="/">
        <div className="w-24 fill-current md:w-28 dark:text-white-900 text-black-900" >Sumit</div>
      </a>
    </Link>
    <div className="flex items-center">
     
      <div className="relative ml-2 md:ml-4" ref={ref}>
      
 
       
      </div>
    </div>
  </div>
</div>
};

export default Headers;
