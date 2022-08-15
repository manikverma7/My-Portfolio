import React from "react";
import Heading from "./Heading";

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen text-white bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        {/* <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div> */}
        <Heading title="About" />
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          iure, odio odit quia iusto enim laborum quos corrupti quae voluptas,
          recusandae cumque impedit numquam dignissimos. Rerum hic unde ipsum
          quo, sit enim quae est quibusdam laudantium minima similique deserunt
          odio debitis sint iure libero amet dolores nihil magnam. Non, nemo?
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
          cupiditate dolorum officiis. Dignissimos eaque asperiores perspiciatis
          quae architecto temporibus odio minus a atque repellat, quaerat
          exercitationem iste, aut delectus quibusdam porro ducimus repudiandae
          quos in voluptate error sed quo, possimus neque. Vero explicabo ad at,
          minus architecto amet ducimus nam!
        </p>
      </div>
    </div>
  );
}

export default About;
