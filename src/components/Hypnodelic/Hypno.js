import "./Hypnodelic.scss";

const Hypno = (props) => {
  const vidOrImg = () => {
    if (props.hasVid) {
      return (
        <video className="hypnodelic_media" autoPlay={true} loop muted={true}>
          <source
            src={`https://monolyth.s3.amazonaws.com/${props.image}`}
            type="video/mp4"
          />
        </video>
      );
    } else if (props.shimmer) {
      return (
        <iframe
          _ngcontent-hrb-c64=""
          allowfullscreen=""
          sandbox="allow-forms allow-modals allow-same-origin allow-scripts allow-top-navigation allow-popups-to-escape-sandbox allow-popups"
          src="https://cdn.feralfileassets.com/previews/28cad12d-50f2-4d82-a77d-1284cf934b8c/1615815656/index.html?edition_number=0"
          allow=""
          class="ng-star-inserted"
        ></iframe>
      );
    } else {
      return (
        <img
          className="hypnodelic_media"
          src={`/images/hypnodelic/${props.image}`}
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
                src={`/images/hypnodelic/${props.flag}`}
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
