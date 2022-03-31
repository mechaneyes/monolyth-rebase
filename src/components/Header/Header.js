import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import "./Header.scss";

const Header = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.body.addEventListener("click", () => {
      if (isVisible === false) {
        console.log('isvis is false', isVisible)
      } else if (isVisible === true){
        // setIsVisible(false)
        console.log('isVisible true', isVisible)
      }
    });
  }, [isVisible]);

  return (
    <div className="header" onClick={() => setIsVisible(!isVisible)}>
      <div className="header__left">
        <img
          className="header__logo"
          src={`/images/mono-ape.png`}
          alt="Temporary Logo"
        />
        <div className="header__title-tagline">
          <h2>Monolyth</h2>
          <CSSTransition in={isVisible} timeout={200} classNames="toggle-links">
            <div className="page-links">
              <Link to="/home">Home</Link>
              <Link to="/">Idle</Link>
              <Link to="/welcome">Buckle Up</Link>
              <Link to="/mechaneyes">Gallery</Link>
              <Link to="/hypno-x">Hypnodelic</Link>
              <Link to="/map">Sound Map</Link>
              {/* <Link to="/hypnodelic">Hyp</Link> */}
            </div>
          </CSSTransition>
        </div>
      </div>
    </div>
  );
};

export default Header;
