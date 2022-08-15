import React from "react";

import Nexter from "../assets/portfolio/Nexter.png";
import Trillo from "../assets/portfolio/Trillo.png";
import Newsletter from "../assets/portfolio/Newsletter.png";
import DBZ from "../assets/portfolio/DBZ.png";
import Heading from "./Heading";

function Portfolio() {
  const portfolios = [
    {
      id: 1,
      image: Trillo,
      demo: "https://elastic-fermat-b44af6.netlify.app/",
      code: "https://github.com/manikverma7/Trillo-FlexBox",
    },
    {
      id: 2,
      image: Nexter,
      demo: "https://sleepy-shockley-045280.netlify.app/",
      code: "https://github.com/manikverma7/Nexter-CSS-Grids",
    },
    {
      id: 3,
      image: Newsletter,
      demo: "https://still-fortress-99285.herokuapp.com/",
      code: "https://github.com/manikverma7?tab=repositories",
    },
    {
      id: 4,
      image: DBZ,
      demo: "https://dragon-ball-blog.netlify.app/",
      code: "https://github.com/manikverma7?tab=repositories",
    },
  ];

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-content w-full h-full">
        <Heading title="Portfolio" body="Check out some of my work here" />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, image, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-500 rounded-lg">
              <img
                src={image}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => openInNewTab(demo)}
                >
                  Demo
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => openInNewTab(code)}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
