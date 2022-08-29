import React, { useEffect } from "react";
import { useStateValue } from "../context/StateProvider";

function ProjectDetail() {
  const [{ projects, selectedProject }] = useStateValue();
  useEffect(() => {
    console.log(projects);
  }, [projects]);

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-full min-h-screen p-10 text-white bg-gradient-to-b from-gray-900 to-gray-800 pt-20 md:pt-0 z-10 flex  justify-center items-center flex-col ">
      <p className="font-bold text-3xl mb-8">{selectedProject.title}</p>
      <img src={selectedProject.image} alt="" className="h-1/2 w-2/3" />
      <div className="flex items-center">
        {selectedProject.demo ? (
          <>
            <button
              // className="w-1/2 px-6 py-3  my-4  "
              className="bg-gradient-to-r w-fit duration-200 from-cyan-500 to-blue-500 rounded-md items-center  px-6 py-3  flex text-white cursor-pointer  hover:scale-105 mt-8 mr-8"
              onClick={() => openInNewTab(selectedProject.demo)}
            >
              Demo
            </button>
            <button
              // className="w-1/2 px-6 py-3  my-4 duration-200 hover:scale-105"
              className="bg-gradient-to-r w-fit duration-200 from-cyan-500 to-blue-500 rounded-md items-center px-6 py-3  flex text-white cursor-pointer  hover:scale-105 mt-8"
              onClick={() => openInNewTab(selectedProject.code)}
            >
              Code
            </button>
          </>
        ) : (
          <button
            // className="w-full px-6 py-3 my-4 duration-200 hover:scale-105"
            className="bg-gradient-to-r w-fit duration-200 from-cyan-500 to-blue-500 rounded-md items-center will-change-transform px-6 py-3 my-2 flex text-white cursor-pointer z-1 hover:scale-105 mt-8"
            onClick={() => openInNewTab(selectedProject.download)}
          >
            Download Apk
          </button>
        )}
      </div>
    </div>
  );
}

export default ProjectDetail;
