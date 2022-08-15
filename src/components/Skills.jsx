import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import next from "../assets/nextjs.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import redux from "../assets/redux.png";
import angular from "../assets/angular.png";
import bootstrap from "../assets/bootstrap.png";

import Heading from "./Heading";

function Skills() {
  const skills = [
    {
      id: 1,
      image: html,
      title: "HTML5",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      image: css,
      title: "CSS3",
      style: "shadow-blue-900",
    },
    {
      id: 3,
      image: javascript,
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      image: react,
      title: "React",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      image: react,
      title: "React Native",
      style: "shadow-blue-700",
    },
    {
      id: 6,
      image: redux,
      title: "Redux",
      style: "shadow-purple-900",
    },
    {
      id: 7,
      image: next,
      title: "Nextjs",
      style: "shadow-white",
    },
    {
      id: 8,
      image: angular,
      title: "Angular",
      style: "shadow-red-500",
    },
    {
      id: 9,
      image: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-700",
    },
    {
      id: 10,
      image: tailwind,
      title: "Tailwind",
      style: "shadow-sky-800",
    },
    {
      id: 11,
      image: github,
      title: "Git",
      style: "shadow-gray-500",
    },
  ];
  return (
    <div
      name="Skills"
      className="bg-gradient-to-b from-gray-700 to-gray-900 text-white w-full min-h-screen pt-20 md:pt-0"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-content w-full h-full">
        <Heading
          title="Skills"
          body="These are the technologies I've worked with"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 w-full text-center px-12 gap-8 sm:px-0 ">
          {skills.map(({ id, image, title, style }) => (
            <div
              key={id}
              className={`rounded-lg shadow-md hover:scale-105 duration-500 py-2 ${style}`}
            >
              <img src={image} alt={image} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
