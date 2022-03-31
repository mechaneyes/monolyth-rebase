import Hypno from "./Hypno";
import Header from "../Header/Header";

import "./Hypnodelic.scss";

const Hypnodelic = (props) => {
  return (
    <>
      <Header />
      <Hypno
        hasVid={props.items[0].vid}
        class={props.items[0].class}
        artist={props.items[0].artist}
        image={props.items[0].img}
        alt={props.items[0].alt}
        title={props.items[0].title}
        year={props.items[0].year}
        info={props.items[0].info}
        qr={props.items[0].qr}
      />
      <Hypno
        hasVid={props.items[1].vid}
        class={props.items[1].class}
        artist={props.items[1].artist}
        image={props.items[1].img}
        alt={props.items[1].alt}
        title={props.items[1].title}
        year={props.items[1].year}
        info={props.items[1].info}
        qr={props.items[1].qr}
      />
      {/* <div className="hypnodelic">
        <div className="hypnodelic_outer">
          <div className="hypnodelic_canvas">
            <video className="hypnodelic_video" autoPlay loop muted>
              <source src="https://monolyth.s3.amazonaws.com/discoBlink.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="hypnodelic_border">
              <img
                className="hypnodelic_flag"
                src={`/images/endlessnight.svg`}
                alt="Endless Night"
              />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Hypnodelic;
