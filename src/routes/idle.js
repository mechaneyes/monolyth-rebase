import { Link } from "react-router-dom";
import Header from "../components/Header/Header";

// import Ikeda_200 from "../components/IdlePage/Ikeda_200";
// import Ikeda_50 from "../components/IdlePage/Ikeda_50";
// import Bloom from "../components/IdlePage/Bloom";
// import BloomScaling01 from "../components/IdlePage/BloomScaling01";
import BloomScaling02 from "../components/IdlePage/BloomScaling02";

import "../components/IdlePage/IdlePage.scss";

const IdlePage = () => {
  return (
    <>
      <Header />
      {/* <Ikeda_200 /> */}
      {/* <Bloom /> */}
      {/* <BloomScaling01 /> */}
      <BloomScaling02 />
      {/* <Ikeda_50 /> */}
    </>
  );
};
export default IdlePage;
