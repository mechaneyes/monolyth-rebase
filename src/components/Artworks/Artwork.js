import React from "react";

import ArtworkTitle from "./ArtworkTitle";
import Card from "../UI/Card";
import "./Artwork.scss";

const Artwork = (props) => {
  return (
    <Card className="artwork-item">
      <img className="artwork-item__image" src={`/images/artworks/${props.image}`} alt={props.alt} />
      <div className="artwork-item__tombstone">
        <h1 className="artwork-item__tombstone__artist-name">{props.artist}</h1>
        <ArtworkTitle title={props.title} year={props.year} />
        <p className="artwork-item__tombstone__artwork-info">{props.info}</p>
        <img className="artwork-item__tombstone__qr" src={`/images/${props.qr}`} alt="QR code to get additional info" />
      </div>
    </Card>
  );
};

export default Artwork;
