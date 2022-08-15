import React from "react";
import Heading from "./Heading";

function About() {
  return (
    <div
      name="About"
      className="w-full min-h-screen md:h-screen text-white bg-gradient-to-b from-gray-800 to-black pt-20 md:pt-0"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <Heading title="About" />
        <p className="text-xl mt-20">
          Enthusiastic Frontend Web and App Developer having experience of more
          than 2 years with expertise in React, React native and Angular.
        </p>
        <br />
        <p className="text-xl">
          Passionate about I.T. profession having a B.Tech degree from DAV
          Institute of Engineering and Technology. My interests are in Front End
          Engineering, and I love to create beautiful and performant products
          with delightful user experiences.
        </p>
      </div>
    </div>
  );
}

export default About;
