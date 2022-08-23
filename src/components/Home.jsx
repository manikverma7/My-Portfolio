import React, { useCallback } from "react";
import ProfileImg from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Particles from "react-tsparticles";

import { loadFull } from "tsparticles";
import config from "../particle-config";

function Home() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div name="Home" className="w-full pt-20 md:pt-0 h-screen ">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={config}
      />
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-content h-full px-4 md:flex-row ">
        <div className="h-full flex flex-col justify-center">
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold ">
            I am a Software Engineer
            <br />
            (Front End Developer)
          </h2>
          <p className="text-gray-500 py-4 max-w-md ">
            I have 2 years of Experience building and designing Softwares.
            Currently, I love to work on web and mobile application using
            technologies like React, React native, Angular, Tailwind, Css3,
            Html5, Javascript and Firebase.
          </p>
          <div>
            <Link
              to="Portfolio"
              smooth
              duration={500}
              className="group bg-gradient-to-r w-fit from-cyan-500 to-blue-500 rounded-md items-center will-change-transform px-6 py-3 my-2 flex text-white cursor-pointer z-1"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={24} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={ProfileImg}
            className="w-2/3 md:w-full rounded-2xl mx-auto px-2"
            alt="my profile"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Home;
