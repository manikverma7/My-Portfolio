import React from "react";
import Heading from "./Heading";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function About() {
  const socialLinks = [
    {
      id: 1,
      child: (
        <>
          <span className="mr-2">LinkedIn</span>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/manik-verma-506811179/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          <span className="mr-2">Github</span>

          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/manikverma7",
    },
    {
      id: 3,
      child: (
        <>
          <span className="mr-2">Stack Overflow</span>

          <FaStackOverflow size={30} />
        </>
      ),
      href: "https://stackoverflow.com/users/10959592/manik-verma",
    },
    {
      id: 4,
      child: (
        <>
          <span className="mr-2">Mail</span>

          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:manikverma6803@gmail.com",
    },
    {
      id: 5,
      child: (
        <>
          <span className="mr-2">Resume</span>
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div
      name="About"
      className="w-full min-h-screen md:min-h-min text-white bg-gradient-to-b from-slate-900 to-slate-700 pt-20 md:pt-0 z-10"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full">
        <Heading title="About" />
        <p className="text-xl mt-8">
          Enthusiastic Frontend Web and App Developer having experience of more
          than 2 years with expertise in React, React native and Angular.
        </p>
        <br />
        <p className="text-xl">
          Passionate about I.T. profession having a B.Tech degree from DAV
          Institute of Engineering and Technology. My interests are in Front End
          Engineering, and I love to create beautiful and performant products
          with delightful user experiences.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:hidden gap-6 mt-10">
          {socialLinks.map(({ id, child, href, style, download }) => {
            return (
              <span
                key={id}
                className={
                  "flex justify-center items-center w-full h-14 bg-slate-500 px-4 hover:scale-105 duration-300 rounded-md" +
                  " " +
                  style
                }
              >
                <a
                  href={href}
                  download={download}
                  target="_blank"
                  rel="noreferrer"
                  className="flex justify-center items-center text-white w-full"
                >
                  {child}
                </a>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;
