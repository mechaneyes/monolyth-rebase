import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import HexagonTrigger from "./HexagonTrigger";
import Hexagon from "./Hexagon";

import "./Honeycomb.scss";

const Honeycomb = () => {
  const [isShowing, setIsShowing] = useState(false);
  const showOthers = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div className="honeycomb">
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
