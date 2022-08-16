import React from "react";

import Nexter from "../assets/portfolio/Nexter.png";
import Trillo from "../assets/portfolio/Trillo.png";
import Newsletter from "../assets/portfolio/Newsletter.png";
import DBZ from "../assets/portfolio/DBZ.png";
import Heading from "./Heading";
import activue from "../assets/portfolio/activue.png";
import Keeper from "../assets/portfolio/Keeper.PNG";

import { TiTick } from "react-icons/ti";

function Portfolio() {
  const portfolios = [
    {
      id: 1,
      image: Trillo,
      demo: "https://elastic-fermat-b44af6.netlify.app/",
      code: "https://github.com/manikverma7/Trillo-FlexBox",
      download: "",
      techStack: ["HTML5", "Scss", "Flexbox"],
      description: "A webpage built using Html5, Scss and Flexbox",
      descriptionColor: "text-pink-600",
    },
    {
      id: 2,
      image: Nexter,
      demo: "https://sleepy-shockley-045280.netlify.app/",
      code: "https://github.com/manikverma7/Nexter-CSS-Grids",
      download: "",
      techStack: ["HTML5", "Scss", "Grid"],
      description: "A webpage built using Html5, Scss and Grid",
      descriptionColor: "text-white",
    },
    {
      id: 3,
      image: Newsletter,
      demo: "https://still-fortress-99285.herokuapp.com/",
      code: "https://github.com/manikverma7?tab=repositories",
      download: "",
      techStack: ["HTML5", "Css3", "Javascript"],
      description:
        "A signup webpage built using Html5, Css, Javascript and MongoDb",
      descriptionColor: "text-black",
    },
    {
      id: 4,
      image: DBZ,
      demo: "https://dragon-ball-blog.netlify.app/",
      code: "https://github.com/manikverma7?tab=repositories",
      download: "",
      techStack: ["Nextjs", "Css3", "Cms"],
      description:
        "A blog website regarding Dragon Ball Anime series built using Nextjs and Cms",
      descriptionColor: "text-black",
    },
    {
      id: 5,
      image: Keeper,
      demo: "https://beamish-sundae-f3f39c.netlify.app/",
      code: "https://github.com/manikverma7/Keeper-App-React",
      download: "",
      techStack: ["React", "Hooks"],
      description: "A Todo List website built using React and Hooks",
      descriptionColor: "text-black",
    },
    {
      id: 6,
      image: activue,
      demo: "",
      code: "",
      download:
        "https://activueservicedev.azurewebsites.net/api/BuildInfo/GetBuild?fileName=6d1a7b47-eac2-40a9-a1dc-1c0ac43cb934.apk",
      techStack: ["React Native", "Redux"],
      description: "A Mobile App built using React native and Redux",
      descriptionColor: "text-black",
    },
  ];

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-gray-900 to-gray-800 w-full text-white min-h-screen pt-20  "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-content w-full h-full">
        <Heading title="Portfolio" body="Check out some of my work here" />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(
            ({
              id,
              image,
              demo,
              code,
              download,
              techStack,
              description,
              descriptionColor,
            }) => (
              <div
                key={id}
                className="shadow-md shadow-gray-500 rounded-lg hover:scale-105 duration-300"
              >
                <figure className="group rounded-md relative  ">
                  <img
                    src={image}
                    alt=""
                    className="rounded-md overflow-hidden group-hover:blur-sm  duration-300 h-40 w-full"
                  />
                  <figcaption
                    className={`absolute p-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 w-full h-full flex justify-center items-center  opacity-0 group-hover:opacity-100 group-hover:-translate-y-1/2  duration-300  rounded-md overflow-hidden ${descriptionColor}`}
                  >
                    {description}
                  </figcaption>
                </figure>

                <div className="p-2 grid grid-cols-3 gap-2">
                  {techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="flex justify-center items-center"
                    >
                      <span className="bg-sky-500 rounded-lg p-0.5 mr-1">
                        <TiTick size={12} />
                      </span>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-center">
                  {demo ? (
                    <>
                      <button
                        className="w-1/2 px-6 py-3  my-4 duration-200 hover:scale-105"
                        onClick={() => openInNewTab(demo)}
                      >
                        Demo
                      </button>
                      <button
                        className="w-1/2 px-6 py-3  my-4 duration-200 hover:scale-105"
                        onClick={() => openInNewTab(code)}
                      >
                        Code
                      </button>
                    </>
                  ) : (
                    <button
                      className="w-full px-6 py-3 my-4 duration-200 hover:scale-105"
                      onClick={() => openInNewTab(download)}
                    >
                      Download Apk
                    </button>
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
