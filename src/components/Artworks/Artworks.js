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
        {/* alt: "Shaun Burner - Phoenix", */}
        <Artwork
          hasVid={props.items[18].vid}
          artist={props.items[18].artist}
          image={props.items[18].img}
          image576={props.items[18].img576}
          image992={props.items[18].img992}
          image2160={props.items[18].img2160}
          alt={props.items[18].alt}
          title={props.items[18].title}
          year={props.items[18].year}
          info={props.items[18].info}
          qr={props.items[18].qr}
        />
        {/* img: "SVwiliums-frogbergcanvas.jpg", */}
        <Artwork
          hasVid={props.items[16].vid}
          artist={props.items[16].artist}
          image={props.items[16].img}
          image576={props.items[16].img576}
          image992={props.items[16].img992}
          image2160={props.items[16].img2160}
          alt={props.items[16].alt}
          title={props.items[16].title}
          year={props.items[16].year}
          info={props.items[16].info}
          qr={props.items[16].qr}
        />
        {/* alt: "Camille Martin, Fish", */}
        <Artwork
          hasVid={props.items[3].vid}
          artist={props.items[3].artist}
          image={props.items[3].img}
          image576={props.items[3].img576}
          image992={props.items[3].img992}
          image2160={props.items[3].img2160}
          alt={props.items[3].alt}
          title={props.items[3].title}
          year={props.items[3].year}
          info={props.items[3].info}
          qr={props.items[3].qr}
        />
        {/* img: "Emoni_A_00009_5mp.jpg", */}
        <Artwork
          hasVid={props.items[6].vid}
          artist={props.items[6].artist}
          image={props.items[6].img}
          image576={props.items[6].img576}
          image992={props.items[6].img992}
          image2160={props.items[6].img2160}
          alt={props.items[6].alt}
          title={props.items[6].title}
          year={props.items[6].year}
          info={props.items[6].info}
          qr={props.items[6].qr}
        />
        {/* alt: "Ray Weitzenberg - 33 Thomas Street May Appear", */}
        <Artwork
          hasVid={props.items[13].vid}
          artist={props.items[13].artist}
          image={props.items[13].img}
          image576={props.items[13].img576}
          image992={props.items[13].img992}
          image2160={props.items[13].img2160}
          alt={props.items[13].alt}
          title={props.items[13].title}
          year={props.items[13].year}
          info={props.items[13].info}
          qr={props.items[13].qr}
        />
        {/* alt: "Camille Martin - Peacock", */}
        <Artwork
          hasVid={props.items[4].vid}
          artist={props.items[4].artist}
          image={props.items[4].img}
          image576={props.items[4].img576}
          image992={props.items[4].img992}
          image2160={props.items[4].img2160}
          alt={props.items[4].alt}
          title={props.items[4].title}
          year={props.items[4].year}
          info={props.items[4].info}
          qr={props.items[4].qr}
        />
        {/* alt: "Shaun Burner, Figure Man", */}
        <Artwork
          hasVid={props.items[17].vid}
          artist={props.items[17].artist}
          image={props.items[17].img}
          image576={props.items[17].img576}
          image992={props.items[17].img992}
          image2160={props.items[17].img2160}
          alt={props.items[17].alt}
          title={props.items[17].title}
          year={props.items[17].year}
          info={props.items[17].info}
          qr={props.items[17].qr}
        />
        {/* alt: "Dan Ligaya, Kobe", */}
        <Artwork
          hasVid={props.items[5].vid}
          artist={props.items[5].artist}
          image={props.items[5].img}
          image576={props.items[5].img576}
          image992={props.items[5].img992}
          image2160={props.items[5].img2160}
          alt={props.items[5].alt}
          title={props.items[5].title}
          year={props.items[5].year}
          info={props.items[5].info}
          qr={props.items[5].qr}
        />
        {/* alt: "Nate - LAdy", */}
        <Artwork
          hasVid={props.items[12].vid}
          artist={props.items[12].artist}
          image={props.items[12].img}
          image576={props.items[12].img576}
          image992={props.items[12].img992}
          image2160={props.items[12].img2160}
          alt={props.items[12].alt}
          title={props.items[12].title}
          year={props.items[12].year}
          info={props.items[12].info}
          qr={props.items[12].qr}
        />
        {/* alt: "Brandon Alexander, Computer love", */}
        <Artwork
          hasVid={props.items[1].vid}
          artist={props.items[1].artist}
          image={props.items[1].img}
          image576={props.items[1].img576}
          image992={props.items[1].img992}
          image2160={props.items[1].img2160}
          alt={props.items[1].alt}
          title={props.items[1].title}
          year={props.items[1].year}
          info={props.items[1].info}
          qr={props.items[1].qr}
        />
        {/* img: "LilyMott-4.jpg", */}
        <Artwork
          hasVid={props.items[8].vid}
          artist={props.items[8].artist}
          image={props.items[8].img}
          image576={props.items[8].img576}
          image992={props.items[8].img992}
          image2160={props.items[8].img2160}
          alt={props.items[8].alt}
          title={props.items[8].title}
          year={props.items[8].year}
          info={props.items[8].info}
          qr={props.items[8].qr}
        />
        {/* alt: "Ray Weitzenberg - Harvey's Unicorn", */}
        <Artwork
          hasVid={props.items[15].vid}
          artist={props.items[15].artist}
          image={props.items[15].img}
          image576={props.items[15].img576}
          image992={props.items[15].img992}
          image2160={props.items[15].img2160}
          alt={props.items[15].alt}
          title={props.items[15].title}
          year={props.items[15].year}
          info={props.items[15].info}
          qr={props.items[15].qr}
        />
        {/* alt: "Molly Devlin - The Fruting Body", */}
        <Artwork
          hasVid={props.items[10].vid}
          artist={props.items[10].artist}
          image={props.items[10].img}
          image576={props.items[10].img576}
          image992={props.items[10].img992}
          image2160={props.items[10].img2160}
          alt={props.items[10].alt}
          title={props.items[10].title}
          year={props.items[10].year}
          info={props.items[10].info}
          qr={props.items[10].qr}
        />
        {/* img: "LilyMott.jpg", */}
        <Artwork
          hasVid={props.items[9].vid}
          artist={props.items[9].artist}
          image={props.items[9].img}
          image576={props.items[9].img576}
          image992={props.items[9].img992}
          image2160={props.items[9].img2160}
          alt={props.items[9].alt}
          title={props.items[9].title}
          year={props.items[9].year}
          info={props.items[9].info}
          qr={props.items[9].qr}
        />
        {/* alt: "Brandon Gastinell, DOOM", */}
        <Artwork
          hasVid={props.items[2].vid}
          artist={props.items[2].artist}
          image={props.items[2].img}
          image576={props.items[2].img576}
          image992={props.items[2].img992}
          image2160={props.items[2].img2160}
          alt={props.items[2].alt}
          title={props.items[2].title}
          year={props.items[2].year}
          info={props.items[2].info}
          qr={props.items[2].qr}
        />
        {/* alt: "Molly Devlin, fountainhead", */}
        <Artwork
          hasVid={props.items[11].vid}
          artist={props.items[11].artist}
          image={props.items[11].img}
          image576={props.items[11].img576}
          image992={props.items[11].img992}
          image2160={props.items[11].img2160}
          alt={props.items[11].alt}
          title={props.items[11].title}
          year={props.items[11].year}
          info={props.items[11].info}
          qr={props.items[11].qr}
        />
        {/* alt: "Ashley Regan, Tranquility", */}
        <Artwork
          hasVid={props.items[0].vid}
          artist={props.items[0].artist}
          image={props.items[0].img}
          image576={props.items[0].img576}
          image992={props.items[0].img992}
          image2160={props.items[0].img2160}
          alt={props.items[0].alt}
          title={props.items[0].title}
          year={props.items[0].year}
          info={props.items[0].info}
          qr={props.items[0].qr}
        />
        {/* alt: "Jamie Worrall, At Elderway", */}
        <Artwork
          hasVid={props.items[7].vid}
          artist={props.items[7].artist}
          image={props.items[7].img}
          image576={props.items[7].img576}
          image992={props.items[7].img992}
          image2160={props.items[7].img2160}
          alt={props.items[7].alt}
          title={props.items[7].title}
          year={props.items[7].year}
          info={props.items[7].info}
          qr={props.items[7].qr}
        />
        {/* alt: "Ray Weitzenberg - Halalrunner", */}
        <Artwork
          hasVid={props.items[14].vid}
          artist={props.items[14].artist}
          image={props.items[14].img}
          image576={props.items[14].img576}
          image992={props.items[14].img992}
          image2160={props.items[14].img2160}
          alt={props.items[14].alt}
          title={props.items[14].title}
          year={props.items[14].year}
          info={props.items[14].info}
          qr={props.items[14].qr}
        />
      </Slider>

      <div className="slider-thumbs-bottom">
        <Slider
          {...sliderThumbsSettings}
          asNavFor={nav1}
          ref={(slider2) => setNav2(slider2)}
          className="slider-thumbs"
        >
          <ArtworkThumbnail image={props.items[18].img} />
          <ArtworkThumbnail image={props.items[16].img} />
          <ArtworkThumbnail image={props.items[3].img} />
          <ArtworkThumbnail image={props.items[6].img} />
          <ArtworkThumbnail image={props.items[13].img} />
          <ArtworkThumbnail image={props.items[4].img} />
          <ArtworkThumbnail image={props.items[17].img} />
          <ArtworkThumbnail image={props.items[5].img} />
          <ArtworkThumbnail image={props.items[12].img} />
          <ArtworkThumbnail image={props.items[1].img} />
          <ArtworkThumbnail image={props.items[8].img} />
          <ArtworkThumbnail image={props.items[15].img} />
          <ArtworkThumbnail image={props.items[10].img} />
          <ArtworkThumbnail image={props.items[9].img} />
          <ArtworkThumbnail image={props.items[2].img} />
          <ArtworkThumbnail image={props.items[0].img} />
          <ArtworkThumbnail image={props.items[11].img} />
          <ArtworkThumbnail image={props.items[7].img} />
          <ArtworkThumbnail image={props.items[14].img} />
        </Slider>
      </div>
    </>
  );
};

export default Artworks;
