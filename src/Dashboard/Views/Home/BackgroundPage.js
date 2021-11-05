import React from "react";
import Experience from "./../../components/Experience";
import Education from "./../../components/Education";
import Skills from "./../../components/Skills";

const Background = () => {
  return (
    <div className="min-h-screen">
      <section class="py-8 px-6">
        <Experience />
      </section>

      <section class="py-8 px-6">
        <Education />
      </section>

      <section class="py-8 px-6">
        <Skills />
      </section>
    </div>
  );
};

export default Background;
