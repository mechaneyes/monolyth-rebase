import { BrowserRouter, Routes, Route } from "react-router-dom";

import Mechaneyes from "./routes/mechaneyes";
import Welcome from "./routes/welcome";
import Idle from "./routes/idle";
// import WelcomePage from './components/WelcomePage/WelcomePage'
import "./App.scss";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Idle />} />
          <Route path="idle" element={<Idle />} />
          <Route path="welcome" element={<Welcome />} />
          <Route path="mechaneyes" element={<Mechaneyes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
