import React, { useEffect } from "react";
import { useStateValue } from "../context/StateProvider";
import { TiTick } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

function ProjectDetail() {
  const navigate = useNavigate();
  const [{ projects, selectedProject }] = useStateValue();
  useEffect(() => {
    console.log(projects, selectedProject);
    if (!selectedProject) {
      navigate("/");
      return;
    }
  }, [projects, navigate, selectedProject]);

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-full min-h-screen p-12 text-white  bg-gradient-to-b from-slate-900 to-slate-800 z-10 flex flex-col md:flex-row pt-10 md:pt-32 ">
      <div className="flex flex-col w-full md:w-1/2 ">
        <p className="font-bold text-3xl mb-4">{selectedProject?.title}</p>

        {selectedProject?.description.map((des, i) => (
          <p key={i} className="text-start w-full md:w-4/5">
            <span className="w-full">{des}</span>
          </p>
        ))}
      </div>

      <div className="h-full w-full md:w-1/2 mt-10 md:mt-0">
        <img
          src={selectedProject?.image}
          alt="project"
          className="h-full w-full md:w-4/5 rounded-md overflow-hidden mt-3"
        />
        <div className="mt-8 grid grid-cols-3 gap-2  w-full md:w-4/5">
          {selectedProject?.techStack.map((tech, index) => (
            <span
              key={index}
              className="flex justify-start items-center text-xl"
            >
              <span className="bg-sky-500 rounded-lg p-0.5 mr-1">
                <TiTick size={12} />
              </span>
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center w-full md:w-4/5">
          {selectedProject?.demo ? (
            <>
              <button
                className="bg-gradient-to-r w-full duration-200 from-cyan-500 to-blue-500 rounded-md items-center px-10 py-3 text-center text-white cursor-pointer  hover:scale-105 mt-8 mr-8"
                onClick={() => openInNewTab(selectedProject?.demo)}
              >
                Demo
              </button>
              <button
                className="bg-gradient-to-r w-full duration-200 from-cyan-500 to-blue-500 rounded-md items-center px-10 py-3   text-white cursor-pointer  hover:scale-105 mt-8"
                onClick={() => openInNewTab(selectedProject?.code)}
              >
                Code
              </button>
            </>
          ) : (
            <button
              className="bg-gradient-to-r w-full duration-200 from-cyan-500 to-blue-500 rounded-md items-center will-change-transform px-6 py-3 my-2  text-white cursor-pointer z-1 hover:scale-105 mt-8"
              onClick={() => openInNewTab(selectedProject?.download)}
            >
              Download Apk
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
