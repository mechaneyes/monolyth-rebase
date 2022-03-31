import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./routes/homepage";
import Idle from "./routes/idle";
import Welcome from "./routes/welcome";
import Mechaneyes from "./routes/mechaneyes";
import Map from "./routes/mapOne";
import Hypnodelic from "./routes/hypnodelic";
// import WelcomePage from './components/WelcomePage/WelcomePage'
import "./App.scss";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Idle />} />
          <Route path="home" element={<Homepage />} />
          <Route path="idle" element={<Idle />} />
          <Route path="welcome" element={<Welcome />} />
          <Route path="mechaneyes" element={<Mechaneyes />} />
          <Route path="map" element={<Map />} />
          <Route path="hypnodelic" element={<Hypnodelic />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
