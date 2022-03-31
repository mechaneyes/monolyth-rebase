import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import Leap from "leapjs";
// import Sketch from "react-p5";
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

  const analytics = (gaAction) => {
    ReactGA.event({
      category: "Welcome Page",
      action: gaAction,
      label: "floppys",
    });
  };

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
    analytics("landed")

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
      analytics("swiped");
      dispatch(increment());
      setTimeout(() => {
        navigate("/mechaneyes");
      }, 200)
    },
  };

  // // <!-- ————————————————————————————————————o P5 o————————————————————————————————————o -->

  // // <!-- ————————————————————————————————————o SETUP -->
  // // <!-- ————————————————————————————————————o -->

  // // Nice breakdown of moving objects on sin wave
  // // Easy to implement
  // // https://learn.digitalharbor.org/courses/creative-programming/lessons/introduction-to-motion-graphics-in-p5-js/
  // //
  // var img;
  // let handy
  // let angle = 0;
  // let offsetX = 465;
  // let scalar = 190;
  // let speed = 0.03;
  // let offsetY;
  // let t = 0.01;

  // const setup = (p5, canvasParentRef) => {
  //   p5.frameRate(60);
  //   const can = p5.createCanvas(p5.windowWidth, 200).parent(canvasParentRef);
  //   p5.noStroke();

  //   p5.tint(0, 153, 204, 126);

  //   p5.loadImage('../../images/hand.png', img => {
  //     handy = new p5.image(img, p5.width / 2, can.height / 2, 100, 170);
  //   });

  //   t = 0;
  // };

  // // <!-- ————————————————————————————————————o DRAW -->
  // // <!-- ————————————————————————————————————o -->
  // const draw = (p5) => {
  //   // p5.clear();
  //   p5.stroke(255);
  //   p5.strokeWeight(20);
  //   p5.noFill();

  //   let posX = offsetX + p5.sin(angle + 0.2) * scalar * p5.noise(t);
  //   angle += speed;

  //   let noiz = 50 * p5.noise(t);
  //   // img.position(posX, noiz);
  //   // p5.image(img, posX, noiz, 0, 0);
  //   // img.width = 300
  //   // handy(0, 0, 200, 200)
  //   // console.log("noiz", noiz);
  //   console.log('handy', handy)
  //   t = t + 0.006;
  // };

  return (
    <>
      <div className="sketch-hldr">
        {/* <Sketch setup={setup} draw={draw} /> */}
      </div>
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
            <h1>Welcome to Monolyth</h1>
            <h2>We evolve apes into astronauts.</h2>
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
