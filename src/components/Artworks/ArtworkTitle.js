import React from "react";

import "./ArtworkTitle.scss";

const ArtworkTitle = (props) => {
  return (
    <div className="artwork-title">
      <h2 className="artwork-title__title">
        {props.title} <span className="artwork-title__year">{props.year}</span>
      </h2>
    </div>
  );
};

export default ArtworkTitle;
