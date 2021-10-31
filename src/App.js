import React from "react";

import Header from "./components/Header/Header";
import Artworks from "./components/Artworks/Artworks";

const App = () => {
  const artworks = [
    {
      id: "a1",
      artist: 'Ray Weitzenberg',
      img: "/artworks/rww-bill-kilgore-4k.gif",
      alt: "Harvey's Angels",
      title: "Harvey's Angels",
      year: 2021,
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod ultrices placerat. Maecenas bibendum molestie dui, pretium rutrum libero aliquet sit amet. Morbi sit amet pharetra libero, vel luctus ligula. Ut consectetur sit amet tortor et ultrices. Sed a finibus metus. Etiam vitae turpis ex. Duis tristique tristique urna et finibus. Ut non volutpat lorem.',
      qr: "/qr-codes/qr-mechaneyes.com.png",
    },
    {
      id: "a2",
      artist: 'Ray Weitzenberg',
      img: "/artworks/rww-hetal-dia-beacon-1920.jpg",
      alt: "Hetal at Dia Beacon",
      title: "Hetal at Dia Beacon",
      year: 2017,
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod ultrices placerat. Maecenas bibendum molestie dui, pretium rutrum libero aliquet sit amet. Morbi sit amet pharetra libero, vel luctus ligula. Ut consectetur sit amet tortor et ultrices. Sed a finibus metus. Etiam vitae turpis ex. Duis tristique tristique urna et finibus. Ut non volutpat lorem.',
      qr: "/qr-codes/qr-mechaneyes.com.png",
    },
    {
      id: "a3",
      artist: 'Ray Weitzenberg',
      img: "/artworks/rww-ft-greene-parkways.jpg",
      alt: "Ft. Greene Parkways",
      title: "Ft. Greene Parkways",
      year: 2021,
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod ultrices placerat. Maecenas bibendum molestie dui, pretium rutrum libero aliquet sit amet. Morbi sit amet pharetra libero, vel luctus ligula. Ut consectetur sit amet tortor et ultrices. Sed a finibus metus. Etiam vitae turpis ex. Duis tristique tristique urna et finibus. Ut non volutpat lorem.',
      qr: "/qr-codes/qr-mechaneyes.com.png",
    },
    {
      id: "a4",
      artist: 'Ray Weitzenberg',
      img: "/artworks/rww-bk-br-style-transfer.png",
      alt: "Brooklyn Bridge via Style Transfer",
      title: "Brooklyn Bridge via Style Transfer",
      year: 2021,
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod ultrices placerat. Maecenas bibendum molestie dui, pretium rutrum libero aliquet sit amet. Morbi sit amet pharetra libero, vel luctus ligula. Ut consectetur sit amet tortor et ultrices. Sed a finibus metus. Etiam vitae turpis ex. Duis tristique tristique urna et finibus. Ut non volutpat lorem.',
      qr: "/qr-codes/qr-mechaneyes.com.png",
    },
  ];

  return (
    <div>
      <Header />
      <Artworks items={artworks} />
    </div>
  );
};

export default App;
