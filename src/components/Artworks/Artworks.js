import { useState, useRef, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import Leap from "leapjs";
import ReactGA from "react-ga";

import { increment } from "../../features/idleReset/idleResetSlice";
import ResetToIdlePage from "../ResetToIdlePage/ResetToIdlePage";
import Artwork from "./Artwork";
import ArtworkThumbnail from "./ArtworkThumbnail";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Artworks.scss";
import "../WelcomePage/WelcomePage.scss";

const Artworks = (props) => {
  const [nav1, setNav1] = useState(0);
  const [nav2, setNav2] = useState(0);
  const sliderArtworks = useRef();

  // Redux
  const dispatch = useDispatch();

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
      dispatch(increment());
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
      if (frame.hands.length > 0) {
        const artworksHand = frame.hands[0];

        // Hand.translation() ... moving left/right on the x axis (artworksMovement[0])
        // https://developer-archive.leapmotion.com/documentation/javascript/api/Leap.Hand.html
        //
        // Limiting hotspot using tip and normalizedPositions
        // https://developer-archive.leapmotion.com/documentation/javascript/api/Leap.Pointable.html#Pointable.tipPosition
        //
        let interactionBox = frame.interactionBox;
        var tipPosition;
        var normalizedPosition;
        if (frame.pointables.length > 0) {
          //Leap coordinates
          tipPosition = frame.pointables[0].tipPosition;
          //Normalized coordinates
          normalizedPosition = interactionBox.normalizePoint(tipPosition);
        }

        const artworksPreviousFrame = artworksController.frame(10);
        const artworksMovement = artworksHand.translation(
          artworksPreviousFrame
        );

        if (
          artworksMovement[0] < 0 &&
          normalizedPosition[0] > -0.5 &&
          normalizedPosition[0] < 0.5 &&
          tipPosition[2] > -75 &&
          tipPosition[2] < 120
        ) {
          // console.log("normalized", normalizedPosition[0]); // LeftRight
          // console.log("tipPosition", tipPosition[2]); // UpDown
          sliderArtworks.current.slickNext();
        }
        if (
          artworksMovement[0] > 0 &&
          normalizedPosition[0] > -0.5 &&
          normalizedPosition[0] < 0.5 &&
          tipPosition[2] > -75 &&
          tipPosition[2] < 120
        ) {
          // console.log("normalized", normalizedPosition[0]);
          // console.log("tipPosition", tipPosition[2]);
          sliderArtworks.current.slickPrev();
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
      <ResetToIdlePage />
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
          hasVid={props.items[2].vid}
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
          <ArtworkThumbnail image={props.items[2].thumb} />
          <ArtworkThumbnail image={props.items[3].img} />
          <ArtworkThumbnail image={props.items[4].img} />
        </Slider>
      </div>
    </>
  );
};

export default Artworks;
