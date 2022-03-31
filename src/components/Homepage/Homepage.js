// https://www.theguardian.com/news/2015/mar/26/how-mark-leckey-became-the-artist-of-the-youtube-generation

import { useEffect } from "react";
import ReactGA from "react-ga";

import Header from "../Header/Header";
import RandomCrackly from "../RandomCrackly/RandomCrackly";
import ResetToIdlePage from "../ResetToIdlePage/ResetToIdlePage";

import "./Homepage.scss";

let HomepageComp = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);

    // setTimeout(() => {
    //   welcomeControl();
    // }, 2000);

    return () => {
      // isRunning = false;
    };
  });

  return (
    <>
      <Header />
      <main className="homepage">
        {/* <RandomCrackly /> */}
        <section className="homepage__words">
          {/* https://www.goodreads.com/work/quotes/208362-2001-a-space-odyssey */}
          {/* https://en.wikipedia.org/wiki/Monolith_(Space_Odyssey) */}
          <h1>Welcome to Monolyth</h1>
          <h3>We're making it easy to discover and collect artwork online.</h3>
          <p>
            This is our beta release of the Monolyth experience. We look forward
            to scattering more Monolyths around Sacramento and beyond.
          </p>
          <p>
            Add your email to stay abreast of the development of the experiences
            and to find out how you can participate. We'd love to have you.
          </p>
          <div className="homepage__links">
            <a href="https://www.instagram.com/monolythglobal/">
              <p>@MonolythGlobal</p>
            </a>
          </div>
        </section>
        <video
          className="fiorucci"
          autoPlay={true}
          loop
          muted
          muted={true}
          controls
        >
          <source
            // src={`/images/Leckey-Mark_FiorucciMadeMeHardcore_1999.mp4`}
            src={`/images/pixelsGlitch.mp4`}
            type="video/mp4"
          />
        </video>
      </main>
    </>
  );
};

export default HomepageComp;
