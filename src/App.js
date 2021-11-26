import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useIdleTimer } from "react-idle-timer";

import Header from "./components/Header/Header";
// import WelcomePage from "./components/WelcomePage/WelcomePage";
// import Artworks from "./components/Artworks/Artworks";
// import IdlePage from "./components/IdlePage/IdlePage";

import "./App.scss";

const App = () => {
  const [togglePage, setTogglePage] = useState(false);

  // const handleOnIdle = (event) => {
  //   console.log("user is idle", event);
  //   console.log("last active", getLastActiveTime());
  // };

  // const handleOnActive = (event) => {
  //   console.log("user is active", event);
  //   console.log("time remaining", getRemainingTime());
  // };

  // const handleOnAction = (event) => {
  //   console.log("user did something", event);
  // };

  // const { getRemainingTime, getLastActiveTime } = useIdleTimer({
  //   // timeout: 1000 * 60 * 15,
  //   timeout: 1000 * 2,
  //   onIdle: handleOnIdle,
  //   onActive: handleOnActive,
  //   onAction: handleOnAction,
  //   debounce: 500,
  // });

  return (
    <div>
      <Header />
      <IdlePage />
      <Link to="/idle">Idle</Link> | <Link to="/welcome">Welcome</Link> |{" "}
      <Link to="/mechaneyes">Mechaneyes</Link>
      {/* <WelcomePage /> */}
    </div>
  );
};

export default App;
