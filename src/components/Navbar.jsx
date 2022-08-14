import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = useState(false);

  const navLinks = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Portfolio",
    },
    {
      id: 4,
      link: "Experience",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];

  return (
    <div className="flex justify-between items-center text-white bg-black px-4 w-full h-20 fixed">
      <div>
        <h1 className="text-5xl ml-2 font-signature">Manik</h1>
      </div>

      <ul className="hidden md:flex">
        {navLinks.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize text-gray-500 hover:scale-105 duration-200 font-medium"
          >
            {link}
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 ">
          {navLinks.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 py-6 cursor-pointer capitalize text-gray-500 text-4xl"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
