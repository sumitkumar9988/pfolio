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
  const theme = {
    bgColor1: "bg-black",
    bgColor2: "bg-gray-900",
    bgTextColor: "bg-white",
    textColor1: "text-white",
    textColor2: "text-gray-200",
  };
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
