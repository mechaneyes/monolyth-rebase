import { Fragment } from "react";

import ArtworkTitle from "./ArtworkTitle";
import Card from "../UI/Card";
import "./Artwork.scss";

const Artwork = (props) => {
  // console.log('props.image992', props.image576)
  const vidOrImg = () => {
    if (props.hasVid) {
      return (
        <video autoPlay={true} loop muted={true}>
          <source
            src={`/images/artworks/576px/${props.image576}`}
            type="video/mp4"
          />
        </video>
      );
    } else {
      return (
        <picture>
          <source
            media="(max-width: 577px)"
            srcset={`/images/artworks/576px/${props.image576}`}
          />
          <source
            media="(max-width: 1999px)"
            srcset={`/images/artworks/992px/${props.image992}`}
          />
          <source
            media="(max-width: 2161px)"
            srcset={`/images/artworks/2160px/${props.image2160}`}
          />
          <img
            className="artwork-item__image"
            src={`/images/artworks/576px/${props.image576}`}
            alt={props.alt}
          />
        </picture>
      );
    }
  };

  return (
    <Card className="artwork-item">
      <div className="artwork-item__headstone">
        <div className="artwork-item__deets">
          <h1 className="artwork-item__artist-name">{props.artist}</h1>
          <ArtworkTitle title={props.title} year={props.year} />
        </div>
        <img
          className="artwork-item__qr"
          src={`/images/${props.qr}`}
          alt="QR code to get additional info"
        />
        {/* <button className="artwork-item__cta">info</button> */}
      </div>
      {vidOrImg()}
      <div className="artwork-item__footstone">
        {/* <p className="artwork-item__artwork-info">{props.info}</p> */}
        <Fragment>
          <p className="artwork-item__artwork-info">{props.info}</p>
        </Fragment>
      </div>
    </Card>
  );
};

export default Artwork;
