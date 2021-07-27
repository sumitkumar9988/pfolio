import React from "react";
import { ReactComponent as BlogSVG } from "./../../../assets/blog-section.svg";

const blog = () => {
  return (
    <div class="py-8 px-6 overflow-hidden min-h-screen lg:min-h-full">
      <div class="container px-4 mx-auto">
        <h2 class="text-2xl font-bold">Blog</h2>
      </div>
      <div className="justify-center flex mt-24 lg:mt-4 ">
        <BlogSVG className=" h-full w-full   md:w-8/12" />
      </div>
    </div>
  );
};

export default blog;
