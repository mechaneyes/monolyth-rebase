import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ResetToIdlePage = () => {
  const navigate = useNavigate();
  const value = useSelector((store) => store.idleReset.value);
  var idleInterval;
  var idleTime = 0;

  let timerIncrement = () => {
    idleTime += 1;
    // console.log("idleTime", idleTime);
    if (idleTime > 2) {
      navigate("/");
      clearInterval(idleInterval);
    }
  };

  // https://stackoverflow.com/questions/39524855/how-to-trigger-off-callback-after-updating-state-in-redux/56945100#56945100
  //
  useEffect(() => {
    var idleTime = 0;
    clearInterval(idleInterval);
    idleInterval = setInterval(timerIncrement, 60000); // 60 Seconds

    return () => {
      clearInterval(idleInterval);
    };
  }, [value]);

  return <></>;
};

export default ResetToIdlePage;
