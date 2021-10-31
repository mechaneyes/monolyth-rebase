import React from "react";

import "./Header.scss";

const Header = (props) => {
  return (
    <div className="header">
      <div className="header__left">
        <img className="header__logo" src={`/images/logo_collection.png`} alt="Temporary Logo" />
        <div className="header__title-tagline">
          <h2>NFT Kiosk</h2>
          <p>Waves Hands. Collects Art.</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
