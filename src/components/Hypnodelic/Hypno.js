import "./Hypnodelic.scss";

const Hypno = (props) => {
  const vidOrImg = () => {
    if (props.hasVid) {
      return (
        <video className="hypnodelic_media" autoPlay={true} loop muted={true}>
          <source src={`https://monolyth.s3.amazonaws.com/${props.image}`} type="video/mp4" />
        </video>
      );
    } else {
      return (
        <img
          className="hypnodelic_media"
          src={`/images/artworks/${props.image}`}
          alt={props.alt}
        />
      );
    }
  };

  return (
    <>
      <div className="hypnodelic">
        <div className={`hypnodelic_outer ${props.class}`}>
          <div className="hypnodelic_canvas">
            {vidOrImg()}
            <div className="hypnodelic_border">
              <img
                className="hypnodelic_flag"
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

export default Hypno;
