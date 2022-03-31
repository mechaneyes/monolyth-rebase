import React from "react";

import Card from "../UI/Card";
import "./ArtworkThumbnail.scss";

const ArtworkThumbnail = (props) => {
  return (
    <Card className="artwork-thumbnail">
      <img className="artwork-thumbnail__image" src={`/images/artworks/576px/${props.image}`} alt={props.alt} />
    </Card>
  );
};

export default ArtworkThumbnail;
