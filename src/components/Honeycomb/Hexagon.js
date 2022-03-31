import { useState } from "react";
import { CSSTransition } from "react-transition-group";

import "./Honeycomb.scss";

const Hexagon = (props) => {
  const [hexaHover, setHover] = useState(false);

  return (
    <div
      className="hexagon"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* <!-- ————————————————————————————————————o hexagon --> */}
      <svg
        viewBox="0 0 425 400"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g className="hexagram-svg" transform="translate(0.000000, 0.000000)">
          <path d="M201,6.77350269 L369.205081,103.886751 L369.205081,298.113249 L201,395.226497 L32.7949192,298.113249 L32.7949192,103.886751 L201,6.77350269 Z"></path>
        </g>

        <svg
          viewBox="0 0 55 60"
          x="55"
          y="55"
          width="40"
          height="50"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g
            className="hexagram__inner"
            transform="translate(0.000000, 0.000000)"
          >
            <path d="M201,6.77350269 L369.205081,103.886751 L369.205081,298.113249 L201,395.226497 L32.7949192,298.113249 L32.7949192,103.886751 L201,6.77350269 Z"></path>
          </g>
        </svg>
      </svg>
      {/* {hexaHover && <div className="flag"></div>} */}
      <CSSTransition in={hexaHover} timeout={200} classNames="flag">
        <div className="flag">
          <h3 className="flag__text">{props.honeyText}</h3>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Hexagon;
