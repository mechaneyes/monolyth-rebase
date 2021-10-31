import React from "react";

import Artwork from "./Artwork";
import Card from "../UI/Card";
import "./Artworks.css";

const Artworks = (props) => {
  return (
    <Card className="artworks">
      <Artwork
        artist={props.items[0].artist}
        image={props.items[0].img}
        title={props.items[0].title}
        year={props.items[0].year}
        info={props.items[0].info}
        qr={props.items[0].qr}
      />
      {/* <Artwork
        title={props.items[1].title}
        amount={props.items[1].amount}
      />
      <Artwork
        title={props.items[2].title}
        amount={props.items[2].amount}
      />
      <Artwork
        title={props.items[3].title}
        amount={props.items[3].amount}
      /> */}
    </Card>
  );
};

export default Artworks;
