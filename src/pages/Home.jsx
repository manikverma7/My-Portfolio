import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Profile from "../components/Profile";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import SocialLinks from "../components/SocialLinks";

function Home() {
  return (
    <>
      <Navbar />
      <Profile />
      <SocialLinks />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
    </>
  );
}

export default Home;
