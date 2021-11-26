import { useState, useRef, useEffect, useLayoutEffect } from "react";
import Slider from "react-slick";
import Leap from "leapjs";
import ReactGA from "react-ga";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Artwork from "./Artwork";
import ArtworkThumbnail from "./ArtworkThumbnail";
// import Card from "../UI/Card";
import "./Artworks.scss";
import "../WelcomePage/WelcomePage.scss";

const Artworks = (props) => {
  const [nav1, setNav1] = useState(0);
  const [nav2, setNav2] = useState(0);
  const sliderArtworks = useRef();

  const sliderSettings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 5000,
    afterChange: () => {
      analytics();
    },
  };

  const sliderThumbsSettings = {
    arrows: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
  };

  useLayoutEffect(() => {
    ReactGA.pageview(window.location.pathname);

    const artworksController = Leap.loop(function (frame) {
      console.log('artworks hands', frame.hands.length)
      if (frame.hands.length > 0) {
        const artworksHand = frame.hands[0];

        // Hand.translation() ... moving left/right on the x axis (artworksMovement[0])
        // https://developer-archive.leapmotion.com/documentation/javascript/api/Leap.Hand.html
        //
        const artworksPreviousFrame = artworksController.frame(10);
        const artworksMovement = artworksHand.translation(artworksPreviousFrame);
        if (artworksMovement[0] < 0) {
          sliderArtworks.current.slickNext();
          // console.log("direction", artworksMovement[0]);
        }
        if (artworksMovement[0] > 0) {
          sliderArtworks.current.slickPrev();
          // console.log("direction", artworksMovement[0]);
        }
      }
    });
  }, []);

  const analytics = () => {
    ReactGA.event({
      category: "Gallery Page",
      action: "slickPrevNext",
      label: "0.1.0",
    });
  };

  return (
    <>
      {/* <img className="the-print-qr" src="https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl=https://theprintfineart.com/" alt="qr code for the print website" /> */}
      <Slider {...sliderSettings} asNavFor={nav2} ref={sliderArtworks}>
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
