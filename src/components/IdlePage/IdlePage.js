import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Leap from "leapjs";
// import ReactGA from "react-ga";

import BloomScaling02 from "./BloomScaling02";

const Idle = () => {
  const navigate = useNavigate();

  useEffect(() => {
    totalControl();
  });

  let totalControl = () => {
    let controller = new Leap.Controller({
      enableGestures: true,
      frameEventName: "animationFrame",
    });

    controller.connect();

    controller.on("frame", function (frame) {
      if (frame.hands.length > 0) {
        let hand = frame.hands[0];
        let position = hand.palmPosition;

        // console.log("position[1]", position[1]);

        if (position[1] < 140) {
            navigate("/welcome");
        //   setExitted(true);
        //   console.log("setExitted", exitted);
        }
      }
    });
  };

  return (
    <>
      <BloomScaling02 />
    </>
  );
};

export default Idle;
