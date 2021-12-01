import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import Leap from "leapjs";
import Sketch from "react-p5";
import ReactGA from "react-ga";

import { increment } from "../../features/idleReset/idleResetSlice";
import ResetToIdlePage from "../ResetToIdlePage/ResetToIdlePage";
import Header from "../Header/Header";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./WelcomePage.scss";

const WelcomePage = () => {
  const navigate = useNavigate();
  const sliderWelcome = useRef();

  // Redux
  const dispatch = useDispatch();

  let controller;
  let isRunning = true;

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);

    setTimeout(() => {
      welcomeControl();
    }, 2000);

    return () => {
      isRunning = false;
    };
  });

  const welcomeControl = () => {
    controller = Leap.loop(function (frame) {
      if (isRunning) {
        if (frame.hands.length > 0) {
          const hand = frame.hands[0];

          // Hand.translation() ...
          // moving left/right on the x axis (movement[0])
          //
          const previousFrame = controller.frame(1);
          const movement = hand.translation(previousFrame);

          if (movement[0] < 0) {
            sliderWelcome.current.slickNext();
            // console.log("direction", movement[0]);
          }
          if (movement[0] > 0) {
            sliderWelcome.current.slickPrev();
            // console.log("direction", movement[0]);
          }
        }
      }
    });
  };

  const welcomeSliderSettings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    afterChange: () => {
      // analytics();
      dispatch(increment());
      navigate("/mechaneyes");
    },
  };

  // <!-- ————————————————————————————————————o P5 o————————————————————————————————————o -->

  // <!-- ————————————————————————————————————o SETUP -->
  // <!-- ————————————————————————————————————o -->
  
  // Nice breakdown of moving objects on sin wave
  // Easy to implement
  // https://learn.digitalharbor.org/courses/creative-programming/lessons/introduction-to-motion-graphics-in-p5-js/
  // 
  let img
  let angle = 0;
  let offset = 465;
  let scalar = 140;
  let speed = 0.03;

  const setup = (p5, canvasParentRef) => {
    p5.frameRate(60);
    const can = p5
      .createCanvas(p5.windowWidth, p5.windowHeight)
      .parent(canvasParentRef);
    p5.noStroke();

    img = p5.createImg("../../images/hand.png");
    img.size(100, 170);
  };

  // <!-- ————————————————————————————————————o DRAW -->
  // <!-- ————————————————————————————————————o -->
  const draw = (p5) => {
    // p5.clear();
    p5.stroke(255);
    p5.strokeWeight(20);
    p5.noFill();

    let posX = offset + p5.sin(angle + 0.5) * scalar;
    img.position(posX, p5.height / 1.7);
    angle += speed;
  };

  return (
    <>
      <Sketch setup={setup} draw={draw} />;
      <Header />
      <ResetToIdlePage />
      <Slider {...welcomeSliderSettings} ref={sliderWelcome}>
        <main className="welcome-page">
          <div className="welcome-page__content">
            <img
              className="mono-ape"
              src={`/images/mono-ape.png`}
              alt="Ape and Monolith"
            />
            <h1>Welcome to Dwala</h1>
            <h2>We turn apes into astronauts.</h2>
            <div className="direction">
              <p>
                Interact by swiping your hand across the sensor in front of you.
              </p>
              <p className="horizontally">
                <span className="ltr">Left to Right</span>
                or
                <span className="rtl">Right to Left</span>
              </p>
              <p>Keep your hand within 12" of the sensor.</p>
            </div>
          </div>
        </main>
        <div className="loading-animation">
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default WelcomePage;
