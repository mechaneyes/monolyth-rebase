import { useState, useRef, useLayoutEffect } from "react";
import Slider from "react-slick";
import Leap from "leapjs";

// import "../Leap/leap.hand-entry.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Artwork from "./Artwork";
import ArtworkThumbnail from "./ArtworkThumbnail";
// import Card from "../UI/Card";
import "./Artworks.scss";

const Artworks = (props) => {
  var sliderSettings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 5000,
  };

  var sliderThumbsSettings = {
    arrows: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
  };

  const [nav1, setNav1] = useState(0);
  const [nav2, setNav2] = useState(0);
  const sliderRef = useRef();

  useLayoutEffect(() => {
    console.log(sliderRef.current);

    var controller = Leap.loop(function (frame) {
      if (frame.hands.length > 0) {
        var hand = frame.hands[0];
        var position = hand.palmPosition;
        var velocity = hand.palmVelocity;
        var direction = hand.direction;

        var previousFrame = controller.frame(1);
        var movement = hand.translation(previousFrame);
        if (direction[0] > 0.5) {
          sliderRef.current.slickNext()
          console.log("direction", direction[0]);
        }
      }
    });
  });

  const next = () => {
    console.log({ nav1 });
    nav1.slickNext();
  };

  // 
  // https://developer-archive.leapmotion.com/documentation/javascript/api/Leap.Hand.html
  //

  return (
    <>
      <button className="button" onClick={next}>
        Next
      </button>
      <Slider {...sliderSettings} asNavFor={nav2} ref={sliderRef}>
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

      <div className="slider-thumbs-bottom">
        <Slider
          {...sliderThumbsSettings}
          asNavFor={nav1}
          ref={(slider2) => setNav2(slider2)}
          className="slider-thumbs"
        >
          <ArtworkThumbnail image={props.items[0].img} />
          <ArtworkThumbnail image={props.items[1].img} />
          <ArtworkThumbnail image={props.items[2].img} />
          <ArtworkThumbnail image={props.items[3].img} />
          <ArtworkThumbnail image={props.items[4].img} />
        </Slider>
      </div>
    </>
  );
};

export default Artworks;
