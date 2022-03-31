import { Link } from "react-router-dom";

import "./Header.scss";

const Header = (props) => {
  return (
    <div className="header">
      <div className="header__left">
        <Link to="/home">
          <img
            className="header__logo"
            src={`/images/mono-ape.png`}
            alt="Temporary Logo"
          />
        </Link>
        <div className="header__title-tagline">
          <Link to="/home">
            <h2>Monolyth</h2>
          </Link>
          <div className="temp-links">
            <Link to="/">Idle</Link> &middot; <Link to="/welcome">Get In</Link> &middot;{" "}
            <Link to="/mechaneyes">Gallery</Link> &middot; <Link to="/map">Map</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
