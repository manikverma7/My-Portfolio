import React from "react";

const Heading = ({ title, body }) => {
  return (
    <div className="pb-8 text-white">
      <p className="font-bold text-4xl inline border-b-4 border-gray-500 ">
        {title}
      </p>
      {body ? <p className="py-6">{body}</p> : null}
    </div>
  );
};

export default Heading;
