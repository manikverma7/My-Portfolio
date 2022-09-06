import React, { useEffect } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Profile from "../components/Profile";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import SocialLinks from "../components/SocialLinks";
// import { FidgetSpinner } from "react-loader-spinner";
import { ClimbingBoxLoader } from "react-spinners";

import { useStateValue } from "../context/StateProvider";

function Home() {
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    if (state.loading) {
      const stopLoader = () => {
        dispatch({
          type: "STOP_LOADER",
        });
      };
      const stopLoader2 = () => {
        dispatch({
          type: "STOP_LOADER2",
        });
      };
      setTimeout(() => {
        stopLoader();
      }, 2500);
      setTimeout(() => {
        stopLoader2();
      }, 2600);
    }
  }, [dispatch, state.loading]);

  return (
    <>
      {state.loading ? (
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

          <ClimbingBoxLoader color="#3b82f6" loading={true} size={20} />
        </div>
      ) : (
        <div className={state.loading2 ? ` bg-slate-900` : null}>
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
