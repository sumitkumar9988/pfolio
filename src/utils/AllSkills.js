import React, { useEffect, useState } from "react";
import data from "./skills.json";
const AllSkills = () => {
  return (
    <div>
      <div className="container mx-auto grid grid-cols-4 pt-6 gap-8">
      {data &&
        data.map((item) => (
          <div className=" mt-12">
            <p >{item.name}</p>
            <img className="h-40 w-40" src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default AllSkills;
