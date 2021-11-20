import { Link } from "react-router-dom";

import "./Header.scss";

const Header = (props) => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          className="header__logo"
          src={`/images/logo_collection.png`}
          alt="Temporary Logo"
        />
        <div className="header__title-tagline">
          <h2>Dwala</h2>
          {/* <p>Waves Hands. Collects Art.</p> */}
          <div className="temp-links">
          <Link to="/">Idle</Link> | <Link to="/welcome">Welcome</Link> | <Link to="/mechaneyes">Mechaneyes</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
