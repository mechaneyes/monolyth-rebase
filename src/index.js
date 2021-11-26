import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ReactGA from "react-ga";

import Mechaneyes from "./routes/mechaneyes";
import Welcome from "./routes/welcome";
import Idle from "./routes/idle";
// import reportWebVitals from './reportWebVitals';
// import IdleTimer from './components/UI/IdleTimer'

import "./index.css";

ReactGA.initialize("UA-211852193-1", { debug: false })

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Idle />} />
      <Route path="idle" element={<Idle />} />
      <Route path="welcome" element={<Welcome />} />
      <Route path="mechaneyes" element={<Mechaneyes />} />
    </Routes>
    {/* <App /> */}
    {/* <IdleTimer /> */}
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
