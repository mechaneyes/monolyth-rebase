// https://www.nts.live/shows/omar-s/episodes/omar-s-24th-december-2021

import { useEffect } from "react";

import ReactGA from "react-ga";
// import Header from "../Header/Header";
import MailchimpForm from "../MailchimpForm/MailchimpForm";
import BloomScaling02 from "../IdlePage/BloomScaling02";

import "./EmailCollection.scss";

let EmailCollection = () => {
  const analytics = () => {
    ReactGA.event({
      category: "Email Collect Page",
      action: "landed",
      label: "floppys",
    });
  };

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
    analytics();

    return () => {
      // isRunning = false;
    };
  });

  return (
    <>
      {/* <Header /> */}
      <main className="email">
        <section className="email__words">
          <h2>Welcome to the beta realease of</h2>
          <h1>Monolyth</h1>
          <h3>Discover and collect the art you love.</h3>
          <p>
            Follow below to play along.
          </p>
          <MailchimpForm />
          <div className="email__links">
            <a href="https://www.instagram.com/monolythglobal/">
              <p>@MonolythGlobal</p>
            </a>
          </div>
        </section>
      </main>
      <BloomScaling02 />
    </>
  );
};

export default EmailCollection;
