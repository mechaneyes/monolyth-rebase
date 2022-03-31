import { Link } from "react-router-dom";

import "./Header.scss";

const Header = (props) => {
  return (
    <div className="header">
      <div className="header__left">
        <Link to="/home">
          <img
            className="header__logo"
            src={`/images/logo_collection.png`}
            alt="Temporary Logo"
          />
        </Link>
        <div className="header__title-tagline">
          <Link to="/home">
            <h2>Monolyth</h2>
          </Link>
          <div className="temp-links">
            <Link to="/">Idle</Link> | <Link to="/welcome">Welcome</Link> |{" "}
            <Link to="/mechaneyes">Gallery</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
