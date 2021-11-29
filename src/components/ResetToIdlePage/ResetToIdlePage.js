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
    if (idleTime > 4) {
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
    clearInterval(idleInterval)
    // idleInterval = setInterval(timerIncrement, 60000);

    return () => {
      clearInterval(idleInterval)
    };
  }, [value]);

  return <></>;
};

export default ResetToIdlePage;
