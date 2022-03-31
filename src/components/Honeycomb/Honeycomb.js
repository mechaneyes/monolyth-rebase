import { useState, useLayoutEffect } from "react";
import HexagonTrigger from "./HexagonTrigger";
import Hexagon from "./Hexagon";

import "./Honeycomb.scss";

const Honeycomb = () => {
  // based on orientation position honeycomb accordingly
  // 
  const [isPortrait, setIsPortrait] = useState(true);
  useLayoutEffect(() => {
    const getOrientation = () => {
      if (window.innerWidth < window.innerHeight) {
        setIsPortrait(true)
      } else {
        setIsPortrait(false)
      }
    }
    getOrientation()
    window.addEventListener('resize', getOrientation)
  })

  const [isShowing, setIsShowing] = useState(false);
  const showOthers = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div className="honeycomb" style={{ top: isPortrait ? '5.6%' : '7%', left: isPortrait ? '9%' : '4%'}}>
      <HexagonTrigger onClick={showOthers} honeyText="The Sudden Walk" />
      <div
        className={
          isShowing
            ? "honeycomb__others honeycomb__others--showing"
            : "honeycomb__others"
        }
      >
        <Hexagon honeyText="At Night" />
        <Hexagon honeyText="A Dream" />
        <Hexagon honeyText="A Crossbreed" />
        <Hexagon honeyText="A Common Confusion" />
      </div>
    </div>
  );
};

export default Honeycomb;
