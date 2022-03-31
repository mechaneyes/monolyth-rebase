import { useState } from "react";

import Hexagon from "./Hexagon";
import "./Honeycomb.scss";

const Honeycomb = (props) => {
  return (
    <div className="honeycomb">
      <Hexagon />
      <Hexagon />
      <Hexagon />
      <Hexagon />
      <Hexagon />
    </div>
  );
};

export default Honeycomb;
