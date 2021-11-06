import React from "react";

import "./ArtworkTitle.scss";

const ArtworkTitle = (props) => {
  return (
    <div className="artwork-item__artwork-title">
      <h2 className="artwork-item__artwork-title__title">
        {props.title} <span className="artwork-item__artwork-title__year">{props.year}</span>
      </h2>
    </div>
  );
};

export default ArtworkTitle;
