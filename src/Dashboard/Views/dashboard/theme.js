import React from "react";
import Mac from "./../../../assets/Macbook Pro.png";


const theme = () => {


  return (
    <div>
      <div class="py-8 px-6">
        <div class="container px-4 mx-auto">
          <h2 class="text-2xl font-bold">Change Theme</h2>
        </div>
      </div>
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-4">
        <div className="rounded">
          <img class="rounded" src={Mac} alt=""></img>
        </div>
        <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-full p-2">
          <p>aaa</p>
          <p>aaa</p>
          <p>aaa</p>
          <p>aaa</p>
          <p>aaa</p>
          <p>aaa</p>
          <p>aaa</p>
          <p>aaa</p>
          <p>aaa</p>
          <p>aaa</p>
          <p>aaa</p>
          <p>aaa</p>
          <p>aaa</p>
          <p>aaa</p>
          <p>aaa</p>
          <p>aaa</p>
          <p>aaa</p>
          <p>aaa</p>
          <p>aaa</p>
          <p>aaa</p>
          <p>aaa</p>
          <p>aaa</p>
          <p>aaa</p>
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

export default theme;
