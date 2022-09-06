import React, { useState, useEffect } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Profile from "../components/Profile";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import SocialLinks from "../components/SocialLinks";
import { FidgetSpinner } from "react-loader-spinner";
import { ClimbingBoxLoader } from "react-spinners";

function Home() {
  const [loading, setloading] = useState(true);
  const [loading2, setloading2] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 2500);
    setTimeout(() => {
      setloading2(false);
    }, 2600);
  }, []);
  return (
    <>
      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center bg-slate-900">
          {/* <FidgetSpinner
            visible={loading}
            height="100"
            width="100"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
            ballColors={["#fff", "#fff", "#fff"]}
            backgroundColor="#3b82f6"
          /> */}

          <ClimbingBoxLoader color="#3b82f6" loading={loading} size={20} />
        </div>
      ) : (
        <div className={loading2 ? ` bg-slate-900` : null}>
          <Navbar />
          <Profile />
          <SocialLinks />
          <About />
          <Portfolio />
          <Skills />
          <Contact />
        </div>
      )}
    </>
  );
}

export default Home;
