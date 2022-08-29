import React from "react";
import Heading from "./Heading";
import { TiTick } from "react-icons/ti";
import { portfolios } from "../data/portfolioData";
import { useStateValue } from "../context/StateProvider";
import { Link } from "react-router-dom";

function Portfolio() {
  const [state, dispatch] = useStateValue();

  const showProject = (id) => {
    console.log(state);
    dispatch({
      type: "SELECT_PROJECT",
      id,
    });
  };

  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-gray-800 to-gray-900 w-full text-white min-h-screen pt-20  "
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
              title,
            }) => (
              <div
                key={id}
                className="shadow-md shadow-gray-500 rounded-lg hover:scale-105 duration-300 cursor-pointer"
              >
                <figure className="rounded-md relative">
                  <img
                    src={image}
                    alt=""
                    className="rounded-md overflow-hidden h-44 w-full"
                  />
                </figure>
                <div className="w-full text-center font-bold border-b-2 border-gray-800 py-2">
                  {title}
                </div>

                <div className="p-2 grid grid-cols-2 gap-2 h-16 sm:h-14 sm:px-4 md:px-6 ">
                  {techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="flex justify-start items-center"
                    >
                      <span className="bg-sky-500 rounded-lg p-0.5 mr-1">
                        <TiTick size={12} />
                      </span>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-center">
                  <Link
                    className="w-full px-6 py-3 my-4 duration-200 hover:scale-105 text-center"
                    onClick={() => showProject(id)}
                    to="projectDetails"
                  >
                    View Details
                  </Link>
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
