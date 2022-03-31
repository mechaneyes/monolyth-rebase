import Header from "../Header/Header";

import "./Hypnodelic.scss";

const Hypnodelic = (props) => {
  return (
    <>
      <Header />
      <div className="hypnodelic">
        <div className="hypnodelic_outer">
          <div className="hypnodelic_canvas">
            <video className="hypnodelic_video" autoPlay loop muted>
              <source src={`/images/discoBlink.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="hypnodelic_border">
              <img
                className="endless-night"
                src={`/images/endlessnight.svg`}
                alt="Endless Night"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hypnodelic;
