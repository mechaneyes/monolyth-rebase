import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const ResetToIdlePage = () => {
  const navigate = useNavigate();
  const value = useSelector((store) => store.idleReset.value);
  var idleInterval
  var idleTime = 0;

  let timerIncrement = () => {
    idleTime += 1;
    console.log("idleTime", idleTime);
    if (idleTime > 10) {
        navigate("/");
        clearInterval(idleInterval);
    }

    if (window.location.pathname == "/") {
    //   clearInterval(idleInterval);
    //   window.location.reload(false);
    }
  };


  useEffect(() => {
    var idleTime = 0;
    console.log("trigger", idleTime);
    clearInterval(idleInterval)
    // var idleInterval = setInterval(timerIncrement, 60000); // 1 minute
    idleInterval = setInterval(timerIncrement, 1000);

    return () => {
      clearInterval(idleInterval)
    };
  }, [value]);

  return <></>;
};

export default ResetToIdlePage;
