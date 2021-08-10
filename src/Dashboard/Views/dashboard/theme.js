import React from "react";
import Mac from "./../../../assets/Macbook Pro.png";
import { CirclePicker } from "react-color";
import CustomColorPicker from "./../../components/CustomColorPicker";
import { LiveProvider, LivePreview } from "react-live";
import PortfolioSite from "./../../../portfolio/Index";

const Theme = () => {
  const [openColorPicker, setOpenColorPicker] = React.useState(false);
  const toggleShareScreen = () => {
    setOpenColorPicker(!openColorPicker);
  };
  const scope = { PortfolioSite };

  const code = `
  <div><PortfolioSite /></div>
  `;

  return (
    <div className="min-h-screen">
      {openColorPicker && (
        <CustomColorPicker toggleShareScreen={toggleShareScreen} />
      )}
      <div class="py-8 px-6">
        <div class="container px-4 mx-auto">
          <h2 class="text-2xl font-bold">Change Theme</h2>
        </div>
      </div>
      <div className="flex flex-wrap overflow-x-hidden pb-32">
        <div class="md:w-4/5 w-full pb-6 md:pb-0 md:pr-6">
          <div class="">
            <div className="w-full  pl-2">
              <div className="h-96 md:h-70">
                <div className=" border-4  w-full h-full overflow-scroll  ">
                  <LiveProvider code={code} scope={scope}>
                    <LivePreview />
                  </LiveProvider>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="md:w-1/5 w-full">
          <div class=" md:h-full ">
            <div className=" border-4 h-full p-2 w-full">
              <div className="container mx-auto grid grid-cols-1 pt-6 gap-8">
                <div className="rounded ">
                  <p className="text-sm text-center font-semibold h-10">
                    Background Color
                  </p>
                  <div className="flex items-center mx-auto justify-center">
                    <CirclePicker width="420px" circleSize={30} />
                  </div>

                  <div className="flex pt-4 items-center mx-auto justify-center">
                    <p
                      onClick={toggleShareScreen}
                      className="text-xs text-blue-400 font-bold hover:underline transform hover:scale-x-105 transition delay-75"
                    >
                      Choose Custom Color
                    </p>
                  </div>
                </div>
                <div className="rounded ">
                  <p className="text-sm text-center font-semibold h-10">
                    Text Color
                  </p>
                  <div className="flex items-center mx-auto justify-center">
                    <CirclePicker
                      width="420px"
                      circleSize={30}
                      colors={[
                        "#f44336",
                        "#e91e63",
                        "#9c27b0",
                        "#e91e63",
                        "#673ab7",
                        "#3f51b5",
                        "#2196f3",
                        "#03a9f4",
                        "#00bcd4",
                        "#009688",
                        "#4caf50",
                        "#8bc34a",
                        "#cddc39",
                        "#ffeb3b",
                        "#ffc107",
                        "#ff9800",
                        "#ff5722",
                        "#795548",
                      ]}
                    />
                  </div>
                  <div className="flex pt-4 items-center mx-auto justify-center">
                    <p
                      onClick={toggleShareScreen}
                      className="text-xs text-blue-400 font-bold hover:underline transform hover:scale-x-105 transition delay-75"
                    >
                      Choose Custom Color
                    </p>
                  </div>
                </div>
                <div class="container mx-auto grid sm:grid-cols-1 pt-6 gap-8">
                  <div>
                    <div class="flex   items-start ml-2">
                      <div class="relative inline-block w-10 mr-2 align-middle select-none">
                        <input
                          type="checkbox"
                          name="toggle"
                          id="Blue"
                          class="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                        />
                        <label
                          for="Blue"
                          class="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                        ></label>
                      </div>
                      <span class="text-gray-400 font-medium">Show Bio</span>
                    </div>
                  </div>
                  <div>
                    <div class="flex   items-start  ml-2">
                      <div class="relative inline-block w-10 mr-2 align-middle select-none">
                        <input
                          type="checkbox"
                          name="toggle"
                          id="Blue"
                          class="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                        />
                        <label
                          for="Blue"
                          class="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                        ></label>
                      </div>
                      <span class="text-gray-400 font-medium">
                        Show education section
                      </span>
                    </div>
                  </div>{" "}
                  <div>
                    <div class="flex   items-start  ml-2">
                      <div class="relative inline-block w-10 mr-2 align-middle select-none">
                        <input
                          type="checkbox"
                          name="toggle"
                          id="Blue"
                          class="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                        />
                        <label
                          for="Blue"
                          class="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                        ></label>
                      </div>
                      <span class="text-gray-400 font-medium">
                        show experience section
                      </span>
                    </div>
                  </div>{" "}
                  <div>
                    <div class="flex  pb-4 items-start  ml-2">
                      <div class="relative inline-block w-10 mr-2 align-middle select-none">
                        <input
                          type="checkbox"
                          name="toggle"
                          id="Blue"
                          class="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                        />
                        <label
                          for="Blue"
                          class="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                        ></label>
                      </div>
                      <span class="text-gray-400 font-medium">
                        Show contact section
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="  pt-4 w-full text-center">
                <p class="inline-flex items-center py-3 px-4 text-sm text-white bg-red-400 hover:bg-red-500 rounded transition duration-200">
                  <span>Save</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theme;
