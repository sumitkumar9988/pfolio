import React from "react";
import { LiveProvider, LivePreview } from "react-live";
import PortfolioSite from "../../../Portfolio/Index";

const LivePreviewofSite = ({ user }) => {
  let username=user.username;
  const scope = { PortfolioSite ,username};
  const code = `
  <div><PortfolioSite username={username}/></div>
  `;

  return (
    <div>
      <div className="h-screen p-4 ">
        <div className=" border-2 shadow-xl  w-full h-full overflow-scroll rounded-lg ">
          <LiveProvider code={code} scope={scope}>
            <div className="flex flex-row mx-4 py-2 ">
              {" "}
              <div className="w-4 h-4 bg-red-500 rounded-full mx-1" />
              <div className="w-4 h-4 bg-yellow-500 rounded-full mx-1" />
              <div className="w-4 h-4 bg-green-500 rounded-full mx-1" />
            </div>

            <div className="pt-2">
              <LivePreview />
            </div>
          </LiveProvider>
        </div>
      </div>
    </div>
  );
};

export default LivePreviewofSite;