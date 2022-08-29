import React, { useEffect } from "react";
import { useStateValue } from "../context/StateProvider";

function ProjectDetail() {
  const [{ projects, selectedProject }] = useStateValue();
  useEffect(() => {
    console.log(projects);
  }, [projects]);

  return (
    <div className="w-full min-h-screen  text-white bg-gradient-to-b from-gray-900 to-gray-800 pt-20 md:pt-0 z-10">
      {selectedProject.title}
    </div>
  );
}

export default ProjectDetail;
