import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import Leap from "leapjs";
import ReactGA from "react-ga";
import Header from "../Header/Header";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./WelcomePage.scss";

const WelcomePage = () => {
  var sliderSettings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    afterChange: () => {
      // analytics();
      proceed();
    },
  };

  const sliderRef = useRef();
  const navigate = useNavigate();

  const proceed = () => {
    navigate("/mechaneyes");
  };

  return (
    <>
      <Header />
      <Slider {...sliderSettings} ref={sliderRef}>
        <main className="welcome-page">
          <div className="welcome-page__content">
            <img
              className="mono-ape"
              src={`/images/mono-ape.png`}
              alt="Ape and Monolith"
            />
            <h1>Welcome to Dwala</h1>
            <h2>We turn apes into astronauts.</h2>
            <p className="direction">
              Interact by swiping your hand across the sensor in front of you.
            </p>
            <p className="horizontally">
              {/* <span className="leftRightEmote">👈</span> */}
              <span className="ltr">Left to Right</span>
              or
              <span className="rtl">Right to Left</span>
              {/* <span className="leftRightEmote">👉</span> */}
            </p>
          </div>
        </main>
        <div className="loading-animation">
          <div class="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default WelcomePage;
