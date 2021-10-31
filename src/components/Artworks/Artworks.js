import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Artwork from "./Artwork";
// import Card from "../UI/Card";
import "./Artworks.css";

const Artworks = (props) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
  };

  return (
    <Slider {...settings}>
      <Artwork
        artist={props.items[0].artist}
        image={props.items[0].img}
        alt={props.items[0].alt}
        title={props.items[0].title}
        year={props.items[0].year}
        info={props.items[0].info}
        qr={props.items[0].qr}
      />
      <Artwork
        artist={props.items[0].artist}
        image={props.items[0].img}
        alt={props.items[0].alt}
        title={props.items[0].title}
        year={props.items[0].year}
        info={props.items[0].info}
        qr={props.items[0].qr}
      />
      <Artwork
        artist={props.items[0].artist}
        image={props.items[0].img}
        alt={props.items[0].alt}
        title={props.items[0].title}
        year={props.items[0].year}
        info={props.items[0].info}
        qr={props.items[0].qr}
      />
    </Slider>
  );
};

export default Artworks;
