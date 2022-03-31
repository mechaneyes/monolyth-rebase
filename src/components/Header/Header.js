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
          {/* <p>Waves Hands. Collects Art.</p> */}
          <div className="temp-links">
            <Link to="/">Idle</Link> | <Link to="/welcome">Welcome</Link> |{" "}
            <Link to="/mechaneyes">Mechaneyes</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
