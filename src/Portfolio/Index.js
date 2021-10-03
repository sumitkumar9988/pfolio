import React from "react";
import clsx from "clsx";
import Loader from "../utils/loader";
import { Helmet } from "react-helmet";
import Header from "./components/Headers";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Index = ({ username }) => {
  const [loading] = React.useState(false);
  // const theme = {
  //   bgColor1: "bg-blue-900",
  //   bgColor2: "bg-blue-400",
  //   bgTextColor: "bg-white",
  //   textColor1: "text-white",
  //   textColor2: "text-gray-100",
  // };
 
  // const theme = {
  //   bgColor1: "bg-black",
  //   bgColor2: "bg-gray-900",
  //   bgTextColor: "bg-white",
  //   textColor1: "text-white",
  //   textColor2: "text-gray-200",
  // };
  //   const theme = {
  //   bgColor1: "bg-JapaneseIndigo-1",
  //   bgColor2: "bg-JapaneseIndigo-2",
  //   bgTextColor: "bg-white",
  //   textColor1: "text-white",
  //   textColor2: "text-gray-200",
  // };
  // const theme = {
  //   bgColor1: "bg-YankeesBlue-1",
  //   bgColor2: "bg-YankeesBlue-2",
  //   bgTextColor: "bg-white",
  //   textColor1: "text-white",
  //   textColor2: "text-gray-200",
  // };
  // BeauBlue
  // const theme = {
  //   bgColor1: "bg-BeauBlue-1",
  //   bgColor2: "bg-BeauBlue-2",
  //   bgTextColor: "bg-black",
  //   textColor1: "text-black",
  //   textColor2: "text-gray-900",
  // };
  // TeaGreen
  //   const theme = {
  //   bgColor1: "bg-TeaGreen-1",
  //   bgColor2: "bg-TeaGreen-2",
  //   bgTextColor: "bg-TeaGreen-4",
  //   textColor1: "text-TeaGreen-4",
  //   textColor2: "text-TeaGreen-3",
  // };
  // LightCyan/
  //     const theme = {
  //   bgColor1: "bg-LightCyan-1",
  //   bgColor2: "bg-LightCyan-2",
  //   bgTextColor: "bg-LightCyan-3",
  //   textColor1: "text-LightCyan-3",
  //   textColor2: "text-LightCyan-4",
  // };
  // const theme = {
  //   bgColor1: "bg-white",
  //   bgColor2: "bg-gray-200",
  //   bgTextColor: "bg-black",
  //   textColor1: "text-black",
  //   textColor2: "text-gray-700",
  // };

  // const theme = {
  //   bgColor1: "bg-gradient-to-b from-gray-700 via-gray-900 to-black",
  //   bgColor2: "bg-gray-900",
  //   bgTextColor: "bg-white",
  //   textColor1: "text-white",
  //   textColor2: "text-gray-200",
  // };

  //  const theme = {
  //   bgColor1: "bg-conic-to-l from-sky-400 to-blue-800",
  //   bgColor2: "bg-blue-100",
  //   bgTextColor: "bg-black",
  //   textColor1: "text-black",
  //   textColor2: "text-gray-900",
  // };


  // PeachOrange

  // const theme = {
  //   bgColor1: "bg-PeachOrange-1",
  //   bgColor2: "bg-PeachOrange-2",
  //   bgTextColor: "bg-PeachOrange-3",
  //   textColor1: "text-PeachOrange-3",
  //   textColor2: "text-PeachOrange-4",
  // };

  // // PearlAqua
  //   const theme = {
  //   bgColor1: "bg-PearlAqua-1",
  //   bgColor2: "bg-PearlAqua-2",
  //   bgTextColor: "bg-PearlAqua-3",
  //   textColor1: "text-PearlAqua-3",
  //   textColor2: "text-PearlAqua-4",
  // };


  // // BeauBlue
  // const theme = {
  //   bgColor1: "bg-BeauBlue-1",
  //   bgColor2: "bg-BeauBlue-2",
  //   bgTextColor: "bg-BeauBlue-3",
  //   textColor1: "text-BeauBlue-3",
  //   textColor2: "text-BeauBlue-4",
  // };
    // BeauBlue
    // const theme = {
    //   bgColor1: "bg-BeauBlueRev-1",
    //   bgColor2: "bg-BeauBlueRev-2",
    //   bgTextColor: "bg-BeauBlueRev-3",
    //   textColor1: "text-BeauBlueRev-3",
    //   textColor2: "text-BeauBlueRev-4",
    // };

    // // PearlAqua
    // const theme = {
    //   bgColor1: "bg-MistyRose-1",
    //   bgColor2: "bg-MistyRose-2",
    //   bgTextColor: "bg-MistyRose-3",
    //   textColor1: "text-MistyRose-3",
    //   textColor2: "text-MistyRose-4",
    // };


      // PearlAqua
      // const theme = {
      //   bgColor1: "bg-MoonstoneBlue-1",
      //   bgColor2: "bg-MoonstoneBlue-2",
      //   bgTextColor: "bg-MoonstoneBlue-3",
      //   textColor1: "text-MoonstoneBlue-3",
      //   textColor2: "text-MoonstoneBlue-4",
      // };
      // DeepKoamaru
  //  const theme = {
  //       bgColor1: "bg-DeepKoamaru-1",
  //       bgColor2: "bg-DeepKoamaru-2",
  //       bgTextColor: "bg-DeepKoamaru-3",
  //       textColor1: "text-DeepKoamaru-3",
  //       textColor2: "text-DeepKoamaru-4",
  //     };

    //  const theme = {
    //     bgColor1: "bg-ChineseWhite-1",
    //     bgColor2: "bg-ChineseWhite-2",
    //     bgTextColor: "bg-ChineseWhite-3",
    //     textColor1: "text-ChineseWhite-3",
    //     textColor2: "text-ChineseWhite-4",
    //   };

    //  const theme = {
    //     bgColor1: "bg-PalePink-1",
    //     bgColor2: "bg-PalePink-2",
    //     bgTextColor: "bg-PalePink-3",
    //     textColor1: "text-PalePink-3",
    //     textColor2: "text-black",
    //   };
      // Waterspout

      const theme = {
            bgColor1: "bg-Waterspout-1",
            bgColor2: "bg-Waterspout-2",
            bgTextColor: "bg-Waterspout-3",
            textColor1: "text-Waterspout-3",
            textColor2: "text-black",
          };
      // lighDark
          // const theme = {
          //   bgColor1: "bg-lighDark-1",
          //   bgColor2: "bg-lighDark-2",
          //   bgTextColor: "bg-lighDark-3",
          //   textColor1: "text-lighDark-3",
          //   textColor2: "text-lighDark-4",
          // };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Sumit kumar</title>
            <link rel="canonical" href="https://sumit.pfolio.me" />
          </Helmet>
          <div className={clsx("h-full ", theme.bgColor1)}>
            <Header theme={theme} />
            <Hero theme={theme} />
            <Skills theme={theme} />
            <Project theme={theme} />
            <Experience theme={theme} />
            <Education theme={theme} />
            <Contact theme={theme} />
            <Footer theme={theme} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
