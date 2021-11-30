import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sketch from "react-p5";
import Leap from "leapjs";
// import ReactGA from "react-ga";

import ResetToIdlePage from "../ResetToIdlePage/ResetToIdlePage";
import BloomScaling02 from "./BloomScaling02";

import "./IdlePage.scss";

const Idle = () => {
  const navigate = useNavigate();

  useEffect(() => {
    totalControl();
  });

  // <!-- ————————————————————————————————————o P5 o————————————————————————————————————o -->
  // <!-- ————————————————————————————————————o -->

  // <!-- ————————————————————————————————————o SETUP -->
  // <!-- ————————————————————————————————————o -->
  const setup = (p5, canvasParentRef) => {
    p5.frameRate(60);
    const can = p5
      .createCanvas(p5.windowWidth, p5.windowHeight)
      .parent(canvasParentRef);
    p5.noStroke();
    p5.background(220, 10);
    // p5.clear()
  };

  // <!-- ————————————————————————————————————o DRAW -->
  // <!-- ————————————————————————————————————o -->
  const draw = (p5) => {
    // p5.clear();
    p5.stroke(255);
    p5.strokeWeight(20);
    p5.noFill();
    p5.arc(p5.width / 2, p5.height / 2, 800, 800, 0, p5.PI * progressCount);
  };

  // <!-- ————————————————————————————————————o Leap Motion o————————————————————————————————————o -->
  // <!-- ————————————————————————————————————o -->
  let progressCount = 0;

  let totalControl = () => {
    let idleController = new Leap.Controller({
      enableGestures: true,
      frameEventName: "animationFrame",
    });

    idleController.connect();

    idleController.on("frame", function (frame) {
      if (frame.hands.length > 0) {
        let hand = frame.hands[0];
        let position = hand.palmPosition;

        // console.log("position[1]", position[1]);

        // position[0] == x axis
        // position[1] == y axis
        // keeping the play area to closer over the sensor
        //
        if (position[0] >= -50 && position[0] <= 50 && position[1] < 250) {
          if (progressCount <= 2) {
            progressCount += 0.02;
            console.log("floorCount", progressCount);
          } else {
            progressCount = 2;
            navigate("/welcome");
          }
        }
      }
    });
  };

  return (
    <>
      <ResetToIdlePage />
      <Sketch setup={setup} draw={draw} />;
      <BloomScaling02 progress={progressCount} />
    </>
  );
};

export default Idle;
