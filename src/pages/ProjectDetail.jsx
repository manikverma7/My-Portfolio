import React from "react";
import { useStateValue } from "../context/StateProvider";

function ProjectDetail() {
  const [{ projects, selectedProject }, dispatch] = useStateValue();

  return (
    <div className="w-full min-h-screen  text-white bg-gradient-to-b from-gray-900 to-gray-800 pt-20 md:pt-0 z-10">
      {selectedProject.title}
    </div>
  );
}

export default ProjectDetail;
