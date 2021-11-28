import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { on } from "./IdleEvents";
import WelcomePage from "../WelcomePage/WelcomePage";

const IdleTimer = () => {
  const navigate = useNavigate();
  let idleTime = 0;

  useEffect(() => {
    on("wakeUp", () => {
      idleTime = 0;
    });

    return () => {};
  }, []);

  let timerIncrement = () => {
    // idleTime++;
    // console.log("idleTime", idleTime);

    if (idleTime >= 5) {
      idleTime = 0;
      if (window.location.pathname != "/") {
        clearInterval(idleInterval);
        navigate("/");
      }
    }
  };

  let idleInterval = setInterval(timerIncrement, 4000);

  return <></>;
};

export default IdleTimer;
