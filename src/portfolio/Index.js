import React from "react";
import Loader from "../utils/loader";
import { Helmet } from "react-helmet";
import Header from './components/Headers';
import Hero from './components/Hero';
import Skills from './components/Skills';
const Index = () => {
  const [loading] = React.useState(false);

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
          <div className="bg-gray-900 h-full ">
            {/* <Header/> */}
            <Hero/>
            <Skills/>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
