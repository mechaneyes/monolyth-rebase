import React, { useState } from "react";
import { Link } from "react-router-dom";

import Header from "./components/Header/Header";
import WelcomePage from "./components/WelcomePage/WelcomePage";
// import Artworks from "./components/Artworks/Artworks";
import IdlePage from "./components/IdlePage/IdlePage";

import './App.scss'

const App = () => {

  const [togglePage, setTogglePage] = useState(false);

  // console.log(togglePage);

  return (
    <div>
      <Header />
      <IdlePage />
      <Link to="/idle">Idle</Link> |{" "}
      <Link to="/welcome">Welcome</Link> |{" "}
      <Link to="/mechaneyes">Mechaneyes</Link>
      <WelcomePage />
      <p className="toggler" onClick={() => setTogglePage(!togglePage)}>{!togglePage ? 'images' : 'welcome'}</p>
      {/* {!togglePage ? <Artworks items={artworks} /> : <WelcomePage />} */}
    </div>
  );
};

export default App;
