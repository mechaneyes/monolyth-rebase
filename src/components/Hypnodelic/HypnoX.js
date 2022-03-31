import { useRef } from "react";
import Slider from "react-slick";

import Hypno from "./Hypno";
import Header from "../Header/Header";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import "./Hypnodelic.scss";
import "./HypnoX.scss";

const Hypnodelic = (props) => {
  const sliderArtworks = useRef();

  const sliderSettings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <>
      <Header />
      <Slider
        {...sliderSettings}
        ref={sliderArtworks}
        className="hypno-container"
      >
        <Hypno
          hasVid={props.items[0].vid}
          class={props.items[0].class}
          artist={props.items[0].artist}
          image={props.items[0].img}
          flag={props.items[0].flag}
          alt={props.items[0].alt}
          title={props.items[0].title}
          year={props.items[0].year}
          info={props.items[0].info}
          qr={props.items[0].qr}
        />
        <Hypno
          hasVid={props.items[1].vid}
          class={props.items[3].class}
          artist={props.items[1].artist}
          image={props.items[1].img}
          flag={props.items[3].flag}
          alt={props.items[1].alt}
          title={props.items[1].title}
          year={props.items[1].year}
          info={props.items[1].info}
          qr={props.items[1].qr}
        />
        <Hypno
          hasVid={props.items[1].vid}
          class={props.items[1].class}
          artist={props.items[1].artist}
          image={props.items[1].img}
          flag={props.items[1].flag}
          alt={props.items[1].alt}
          title={props.items[1].title}
          year={props.items[1].year}
          info={props.items[1].info}
          qr={props.items[1].qr}
        />
        <Hypno
          hasVid={props.items[1].vid}
          class={props.items[2].class}
          artist={props.items[1].artist}
          image={props.items[1].img}
          flag={props.items[1].flag}
          alt={props.items[1].alt}
          title={props.items[1].title}
          year={props.items[1].year}
          info={props.items[1].info}
          qr={props.items[1].qr}
        />
      </Slider>
    </>
  );
};

export default Hypnodelic;
