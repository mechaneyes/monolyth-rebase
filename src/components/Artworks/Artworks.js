import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Artwork from "./Artwork";
// import Card from "../UI/Card";
import "./Artworks.scss";

const Artworks = (props) => {
  var settings = {
    arrows: false,
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
        artist={props.items[1].artist}
        image={props.items[1].img}
        alt={props.items[1].alt}
        title={props.items[1].title}
        year={props.items[1].year}
        info={props.items[1].info}
        qr={props.items[1].qr}
      />
      <Artwork
        artist={props.items[2].artist}
        image={props.items[2].img}
        alt={props.items[2].alt}
        title={props.items[2].title}
        year={props.items[2].year}
        info={props.items[2].info}
        qr={props.items[2].qr}
      />
      <Artwork
        artist={props.items[3].artist}
        image={props.items[3].img}
        alt={props.items[3].alt}
        title={props.items[3].title}
        year={props.items[3].year}
        info={props.items[3].info}
        qr={props.items[3].qr}
      />
      <Artwork
        artist={props.items[4].artist}
        image={props.items[4].img}
        alt={props.items[4].alt}
        title={props.items[4].title}
        year={props.items[4].year}
        info={props.items[4].info}
        qr={props.items[4].qr}
      />
    </Slider>
  );
};

export default Artworks;
