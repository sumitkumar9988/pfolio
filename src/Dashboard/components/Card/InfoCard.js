import React from "react";

const InfoCard = () => {
  return (
    <div>
        <div className="h-72 transform hover:scale-105 transition duration-300 rounded-xl bg-white justify-center items-center flex flex-col  shadow-xl text-center">
          <div className="h-32 p-4">
            <img
              className="mx-auto mb-4 h-full w-full object-contain"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEXxURuAzCgAre/7vAn////xTxfxVCDyWiyFzjSEzS8Ir+8dsfD7vxz7vhLyWCfxTRLyYjeL0D4ptPD7wSkDOo23AAABHUlEQVR4nO3PSRKCQBAAwVZAYFhc+P9fPToXrk2MkfWBioxHJDWM/a/pltUchISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhOfCGJJ67hcJxz2rVyV8z1NW0f97hO1H2H6E7UfYfoTtF0vJ6lNtj23NKso9q1IJ1y6tROFyiXAjJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkPBd+AR2XhmxGp3JaAAAAAElFTkSuQmCC"
              alt=""
            />
          </div>

          <h4 className="mb-2 pt-2 text-gray-800 text-2xl font-bold font-heading">
            Microsoft
          </h4>
          <p className="text-gray-500">Head of Development</p>
          <p className="text-gray-500 text-sm font-semibold pt-2">
            2021 feb - 2022 Oct
          </p>
        </div>
    </div>
  );
};

export default InfoCard;
