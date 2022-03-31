import { useState } from "react";
import { CSSTransition } from "react-transition-group";

import "./Honeycomb.scss";

const Hexagon = (props) => {
  const [hexaHover, setHover] = useState(false);

  return (
    <div
      className="hexagon hexagon--trigger"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* <!-- ————————————————————————————————————o hexagon trigger --> */}
      <svg
        viewBox="0 0 425 400"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path d="M201,6.77350269 L369.205081,103.886751 L369.205081,298.113249 L201,395.226497 L32.7949192,298.113249 L32.7949192,103.886751 L201,6.77350269 Z"></path>

        <svg
          viewBox="0 0 55 60"
          x="55"
          y="55"
          width="40"
          height="50"
          className="hexagon__inner-one"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path d="M201,6.77350269 L369.205081,103.886751 L369.205081,298.113249 L201,395.226497 L32.7949192,298.113249 L32.7949192,103.886751 L201,6.77350269 Z"></path>
        </svg>

        <svg
          viewBox="0 0 62 40"
          x="110"
          y="95"
          width="28"
          height="50"
          className="hexagon__inner-two"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path d="M201,6.77350269 L369.205081,103.886751 L369.205081,298.113249 L201,395.226497 L32.7949192,298.113249 L32.7949192,103.886751 L201,6.77350269 Z"></path>
        </svg>
      </svg>
    </div>
  );
};

export default Hexagon;
