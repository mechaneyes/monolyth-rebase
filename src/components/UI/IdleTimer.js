import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { on } from "./IdleEvents";

const IdleTimer = () => {
  const navigate = useNavigate();
  let idleTime = 0;

  useEffect(() => {
    on("awake", () => {
      idleTime = 0;
    });

    return () => {};
  }, []);

  let timerIncrement = () => {
    idleTime++;
    console.log("idleTime", idleTime);

    if (idleTime >= 3) {
      idleTime = 0
      // navigate("/");
    }
  };

  let idleInterval = setInterval(timerIncrement, 4000);

  return <></>;
};

export default IdleTimer;
