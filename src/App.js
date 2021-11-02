import React, { useState } from "react";

import Header from "./components/Header/Header";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import Artworks from "./components/Artworks/Artworks";

import './App.scss'

const App = () => {
  const artworks = [
    {
      id: "a1",
      artist: "Ray Weitzenberg",
      img: "rww-bill-kilgore-1920.gif",
      alt: "Harvey's Angels",
      title: "Harvey's Angels",
      year: 2021,
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod ultrices placerat. Maecenas bibendum molestie dui, pretium rutrum libero aliquet sit amet. Morbi sit amet pharetra libero, vel luctus ligula.",
      qr: "/qr-codes/qr-mechaneyes.com.png",
    },
    {
      id: "a2",
      artist: "Ray Weitzenberg",
      img: "rww-pacific-design-center.jpg",
      alt: "Pacific Design Center",
      title: "Pacific Design Center",
      year: 2018,
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod ultrices placerat. Maecenas bibendum molestie dui, pretium rutrum libero aliquet sit amet. Morbi sit amet pharetra libero, vel luctus ligula.",
      qr: "/qr-codes/qr-mechaneyes.com.png",
    },
    {
      id: "a3",
      artist: "Ray Weitzenberg",
      img: "rww-bk-br-style-transfer.jpg",
      alt: "Brooklyn Bridge Style Transfer",
      title: "Brooklyn Bridge Style Transfer",
      year: 2021,
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod ultrices placerat. Maecenas bibendum molestie dui, pretium rutrum libero aliquet sit amet. Morbi sit amet pharetra libero, vel luctus ligula.",
      qr: "/qr-codes/qr-mechaneyes.com.png",
    },
    {
      id: "a4",
      artist: "Ray Weitzenberg",
      img: "rww-ft-greene-parkways.jpg",
      alt: "Ft. Greene Parkways",
      title: "Ft. Greene Parkways",
      year: 2021,
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod ultrices placerat. Maecenas bibendum molestie dui, pretium rutrum libero aliquet sit amet. Morbi sit amet pharetra libero, vel luctus ligula.",
      qr: "/qr-codes/qr-mechaneyes.com.png",
    },
    {
      id: "a5",
      artist: "Ray Weitzenberg",
      img: "rww-hetal-dia-beacon-1920.jpg",
      alt: "Hetal at Dia Beacon",
      title: "Hetal at Dia Beacon",
      year: 2017,
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod ultrices placerat. Maecenas bibendum molestie dui, pretium rutrum libero aliquet sit amet. Morbi sit amet pharetra libero, vel luctus ligula.",
      qr: "/qr-codes/qr-mechaneyes.com.png",
    },
  ];

  const [togglePage, setTogglePage] = useState(false);

  // console.log(togglePage);

  return (
    <div>
      <Header />
      <p className="toggler" onClick={() => setTogglePage(!togglePage)}>{!togglePage ? 'images' : 'welcome'}</p>
      {!togglePage ? <Artworks items={artworks} /> : <WelcomePage />}
    </div>
  );
};

export default App;
